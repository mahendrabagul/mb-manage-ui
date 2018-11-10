// import {TestBed} from '@angular/core/testing';
//
// import {StudentService} from './student.service';
// import {RouterTestingModule} from '@angular/router/testing';
// import {TokenService} from '../token/token.service';
// import {MockStudentService} from './student.service.mock';
// import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
//
// const mockData = [
//   [
//     {
//       'createdAt': '2018-11-09T16:18:13.198+0000',
//       'updatedAt': '2018-11-09T16:18:13.198+0000',
//       'studentId': '297eb77266f943d50166f944464d000e',
//       'rollNumber': '2018ME514',
//       'degree': 'ME',
//       'admissionYear': 'SECOND',
//       'city': 'Jalna',
//       'fullName': 'PICT Student\'s full Name 6',
//       'createdBy': {
//         'userName': 'npawar',
//         'email': 'npawar@pict.ac.in',
//         'tenant': {
//           'tenantId': '297eb77266f943d50166f94443f50004',
//           'tenantName': 'Pune Institute of Computer Technology',
//         }
//       },
//       'modifiedBy': {
//         'userName': 'npawar',
//         'email': 'npawar@pict.ac.in',
//         'tenant': {
//           'tenantId': '297eb77266f943d50166f94443f50004',
//           'tenantName': 'Pune Institute of Computer Technology',
//         }
//       },
//       'tenant': {
//         'tenantId': '297eb77266f943d50166f94443f50004',
//         'tenantName': 'Pune Institute of Computer Technology',
//       }
//     },
//     {
//       'createdAt': '2018-11-09T16:18:13.208+0000',
//       'updatedAt': '2018-11-09T16:18:13.208+0000',
//       'studentId': '297eb77266f943d50166f9444657000f',
//       'rollNumber': '2018ME562',
//       'degree': 'ME',
//       'admissionYear': 'SECOND',
//       'city': 'Pune',
//       'fullName': 'PICT Student\'s full Name 7',
//       'createdBy': {
//         'userName': 'stambe',
//         'email': 'stambe@pict.ac.in',
//         'tenant': {
//           'tenantId': '297eb77266f943d50166f94443f50004',
//           'tenantName': 'Pune Institute of Computer Technology',
//         }
//       },
//       'modifiedBy': {
//         'userName': 'stambe',
//         'email': 'stambe@pict.ac.in',
//         'tenant': {
//           'tenantId': '297eb77266f943d50166f94443f50004',
//           'tenantName': 'Pune Institute of Computer Technology',
//         }
//       },
//       'tenant': {
//         'tenantId': '297eb77266f943d50166f94443f50004',
//         'tenantName': 'Pune Institute of Computer Technology',
//       }
//     }
//   ]
// ] as any[];
//
//
// describe('StudentService', () => {
//   let httpTestingController: HttpTestingController;
//   let studentService: StudentService;
//   let mockStudents: any[];
//   let mockStudent: any;
//   let mockStudentId: any;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule, HttpClientTestingModule],
//       providers: [TokenService,
//         {
//           provide: StudentService,
//           useClass: MockStudentService
//         }]
//     });
//     httpTestingController = TestBed.get(HttpTestingController);
//     studentService = TestBed.get(StudentService); // Add this
//   });
//   beforeEach(() => {
//     mockStudents = [...mockData];
//     mockStudent = mockStudents[0];
//     mockStudentId = mockStudent.studentId;
//   });
//
//   afterEach(() => {
//     // After every test, assert that there are no more pending requests.
//     httpTestingController.verify();
//   });
//
//   const apiUrl = (id: number) => {
//     return `${studentService.apiUrl}`;
//   };
//
//   it('should be created', () => {
//     expect(studentService).toBeTruthy();
//   });
//
//   describe('getStudents', () => {
//
//     it('should return mock students', () => {
//       studentService.getStudents({}, '').subscribe(
//         response => {
//           expect(response.body).toEqual("");
//         },
//         fail
//       );
//       // Receive GET request
//       const req = httpTestingController.expectOne(studentService.apiUrl);
//       expect(req.request.method).toEqual('GET');
//       // Respond with the mock students
//       req.flush(mockStudents);
//     });
//   });
//
// });
