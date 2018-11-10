import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Student} from '../../models/student';

export class MockStudentService {
  getHeroes(): Observable<Student[]> {
    return of([]);
  }

  getHero() {
    return of({});
  }
}
