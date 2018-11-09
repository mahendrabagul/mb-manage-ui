import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthService', () => {
  let authService: AuthService; // Add this
  let httpClient: HttpClient; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [AuthService, HttpClient]
    });
    authService = TestBed.get(AuthService); // Add this
    httpClient = TestBed.get(HttpClient); // Add this
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
