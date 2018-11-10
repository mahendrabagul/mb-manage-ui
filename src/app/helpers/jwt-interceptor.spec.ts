import {TestBed} from '@angular/core/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TokenService} from '../services/token/token.service';
import {JwtInterceptor} from './JwtInterceptor';
import {Router} from '@angular/router';
import {CommonService} from '../services/common/common.service';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('JwtInterceptor', () => {
  // tslint:disable-next-line:max-line-length
  const tokenResponse = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWhlbmRyYWJhZ3VsIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMRVJLIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn0seyJhdXRob3JpdHkiOiJST0xFX1NFTklPUiJ9XSwidGVuYW50TmFtZSI6IlNHR1MiLCJ0ZW5hbnRJZCI6IjI5N2ViNzcyNjZmNDIzY2QwMTY2ZjQyNDRhMjgwMDI4IiwiaXNzIjoiTWJNYW5hZ2UiLCJpYXQiOjE1NDE2Nzk1ODIsImV4cCI6MTU0NzcyNzU4Mn0.7wdmOze0PPEpXJOhDpEBmx5es23VTFbVpQWsZuOEPplirTjvq2il7XXgN2UBf35SMThLxGwaXBNsflAyLUbMRg';
  let tokenService: TokenService;
  let commonService: CommonService;
  let mockRouter = new MockRouter();
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenService,
        CommonService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
        },
        {provide: Router, useValue: mockRouter}
      ]
    });
    commonService = TestBed.get(CommonService);
    mockRouter = TestBed.get(Router);
    tokenService = TestBed.get(TokenService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(commonService).toBeTruthy();
  });

  describe('#getAllCommonData', () => {
    it('should return an Observable', () => {
      const dummyAllCommonData = {
        'tenantNames': [
          'Shri Guru Gobind Singhji Institute of Engineering and Technology',
          'Pune Institute of Computer Technology'
        ],
        'years': [
          'FIRST',
          'SECOND'
        ],
        'degrees': [
          'BTECH',
          'BE',
          'BCS',
          'MCS',
          'MTECH',
          'ME',
          'PHD'
        ]
      };
      spyOn(tokenService, 'getToken').and.returnValue(tokenResponse);
      const response = tokenService.getToken();
      commonService.getAllCommonData().subscribe(allCommonData => {
        expect(allCommonData).toEqual(dummyAllCommonData);
      });

      const req = httpMock.expectOne(`${commonService.apiUrl}/getAllCommonData`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyAllCommonData);
    });
  });
  // describe('making http calls', () => {
  //   it('adds Authorization header',
  //     inject([HttpClient, HttpTestingController],
  //       (http: HttpClient, httpMock: HttpTestingController) => {
  //         http.get('/data').subscribe(
  //           res => {
  //             expect(res).toBeTruthy();
  //           }
  //         );
  //         spyOn(tokenService, 'getToken').and.returnValue(tokenResponse);
  //         const response = tokenService.getToken();
  //         const req = httpMock.expectOne(r =>
  //           r.headers.has('Authorization') &&
  //           r.headers.get('Authorization') === `${response}`);
  //         expect(req.request.method).toEqual('GET');
  //         req.flush({hello: 'world'});
  //         httpMock.verify();
  //       }));
  // });
});
