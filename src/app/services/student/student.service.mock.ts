import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Student} from '../../models/student';

export class MockStudentService {
  getStudents(): Observable<Student[]> {
    return of([]);
  }

  getStudent() {
    return of({});
  }
}
