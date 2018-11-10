var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"login","component":"LoginComponent"},{"path":"dashboard","component":"DashboardComponent","canActivate":["RoleGuardService"],"data":{"expectedRole":"ROLE_ADMIN"}},{"path":"students","component":"StudentsComponent","data":{"title":"ListofStudents"},"canActivate":["AuthGuardService"]},{"path":"student-details/:studentId","component":"StudentDetailComponent","data":{"title":"StudentDetails"},"canActivate":["AuthGuardService"]},{"path":"student-add","component":"StudentAddComponent","data":{"title":"AddStudent"},"canActivate":["AuthGuardService"]},{"path":"student-update/:studentId","component":"StudentUpdateComponent","data":{"title":"UpdateStudent"},"canActivate":["AuthGuardService"]},{"path":"","redirectTo":"/students","pathMatch":"full"},{"path":"**","component":"PageNotFoundComponent"}],"kind":"module"}]}
