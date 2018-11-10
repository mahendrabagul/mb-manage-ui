import {TestBed} from '@angular/core/testing';

import {StudentService} from './student.service';
import {RouterTestingModule} from '@angular/router/testing';
import {TokenService} from '../token/token.service';
import {MockStudentService} from './student.service.mock';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs';

const mockData = [
  [
    {
      'createdAt': '2018-11-09T16:18:13.198+0000',
      'updatedAt': '2018-11-09T16:18:13.198+0000',
      'studentId': '297eb77266f943d50166f944464d000e',
      'rollNumber': '2018ME514',
      'degree': 'ME',
      'admissionYear': 'SECOND',
      'city': 'Jalna',
      'fullName': 'PICT Student\'s full Name 6',
      'createdBy': {
        'userName': 'npawar',
        'email': 'npawar@pict.ac.in',
        'tenant': {
          'tenantId': '297eb77266f943d50166f94443f50004',
          'tenantName': 'Pune Institute of Computer Technology',
        }
      },
      'updatedBy': {
        'userName': 'npawar',
        'email': 'npawar@pict.ac.in',
        'tenant': {
          'tenantId': '297eb77266f943d50166f94443f50004',
          'tenantName': 'Pune Institute of Computer Technology',
        }
      },
      'tenant': {
        'tenantId': '297eb77266f943d50166f94443f50004',
        'tenantName': 'Pune Institute of Computer Technology',
      }
    },
    {
      'createdAt': '2018-11-09T16:18:13.208+0000',
      'updatedAt': '2018-11-09T16:18:13.208+0000',
      'studentId': '297eb77266f943d50166f9444657000f',
      'rollNumber': '2018ME562',
      'degree': 'ME',
      'admissionYear': 'SECOND',
      'city': 'Pune',
      'fullName': 'PICT Student\'s full Name 7',
      'createdBy': {
        'userName': 'stambe',
        'email': 'stambe@pict.ac.in',
        'tenant': {
          'tenantId': '297eb77266f943d50166f94443f50004',
          'tenantName': 'Pune Institute of Computer Technology',
        }
      },
      'updatedBy': {
        'userName': 'stambe',
        'email': 'stambe@pict.ac.in',
        'tenant': {
          'tenantId': '297eb77266f943d50166f94443f50004',
          'tenantName': 'Pune Institute of Computer Technology',
        }
      },
      'tenant': {
        'tenantId': '297eb77266f943d50166f94443f50004',
        'tenantName': 'Pune Institute of Computer Technology',
      }
    }
  ]
] as any[];


describe('StudentService', () => {
  let httpMock: HttpTestingController;
  let studentService: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [TokenService,
        {
          provide: StudentService,
          useClass: MockStudentService
        }]
    });
    httpMock = TestBed.get(HttpTestingController);
    studentService = TestBed.get(StudentService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(studentService).toBeTruthy();
  });

  it('should return a collection of students', () => {
    let response;
    spyOn(studentService, 'getStudents').and.returnValue(of(mockData));
    studentService.getStudents().subscribe(res => {
      response = res;
    });
    expect(response).toEqual(mockData);
  });
});
