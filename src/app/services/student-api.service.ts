import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

import {Student} from '../models/student';
import {createRequestOption} from '../helpers/request-util';
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {TokenService} from './token.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = environment.API_URL + '/api/v1/students';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }

  getStudents(req?: any, searchKeyWord?: string): Observable<HttpResponse<Student[]>> {
    const options = createRequestOption(req);
    let newUrl = apiUrl;
    if (searchKeyWord !== '' || searchKeyWord !== undefined) {
      newUrl = newUrl + '?searchKeyWord=' + searchKeyWord + '&';
    } else {
      newUrl = newUrl + '?';
    }
    return this.http.get<any>(newUrl + 'tenantId=' + this.tokenService.getTenantId(), {params: options, observe: 'response'});
  }

  getStudent(studentId: string): Observable<Student> {
    const url = `${apiUrl}/${studentId}`;
    return this.http.get<Student>(url).pipe(
      tap(_ => console.log(`fetched student studentId=${studentId}`)),
      catchError(this.handleError<Student>(`getStudent studentId=${studentId}`))
    );
  }

  addStudent(new_student): Observable<Student> {
    return this.http.post<Student>(apiUrl, this.addCreatedByAndModifiedBy(new_student), httpOptions).pipe(
      tap((student: Student) => console.log(`added student studentId=${student.studentId}`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  addCreatedByAndModifiedBy(student: Student) {
    const user = new User();
    user.userName = this.tokenService.getUserNameFromToken();
    if (student.createdBy === undefined
      || student.createdBy === null) {
      student.createdBy = user;
    }
    student.modifiedBy = user;
    return student;
  }

  editStudent(studentId, student): Observable<any> {
    const url = `${apiUrl}/${studentId}`;
    return this.http.put(url, student, httpOptions).pipe(
      tap(_ => console.log(`updated student studentId=${studentId}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  deleteStudent(studentId): Observable<Student> {
    const url = `${apiUrl}/${studentId}`;
    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted student studentId=${studentId}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
