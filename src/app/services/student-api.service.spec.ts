import {TestBed} from '@angular/core/testing';

import {StudentApiService} from './student-api.service';
import {RouterTestingModule} from '@angular/router/testing';
import {TokenService} from './token.service';
import {HttpClientModule} from '@angular/common/http';

describe('StudentApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [TokenService]
    });
  });

  it('should be created', () => {
    const service: StudentApiService = TestBed.get(StudentApiService);
    expect(service).toBeTruthy();
  });
});
