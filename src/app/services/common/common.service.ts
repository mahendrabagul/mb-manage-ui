import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const resourceUrl = environment.API_URL + '/api/v1/commons';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) {
  }

  getAllCommonData(): Observable<any> {
    return this.http.get<any>(resourceUrl + '/getAllCommonData');
  }
}
