import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StudentsComponent} from './components/students/students.component';
import {StudentDetailComponent} from './components/student-detail/student-detail.component';
import {StudentAddComponent} from './components/student-add/student-add.component';
import {StudentEditComponent} from './components/student-edit/student-edit.component';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {RoleGuardService} from './services/role-guard/role-guard.service';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ROLE_ADMIN'
    }
  },
  {
    path: 'students',
    component: StudentsComponent,
    data: {title: 'List of Students'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'student-details/:studentId',
    component: StudentDetailComponent,
    data: {title: 'Student Details'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'student-add',
    component: StudentAddComponent,
    data: {title: 'Add Student'},
    canActivate: [AuthGuardService]
  },
  {
    path: 'student-edit/:studentId',
    component: StudentEditComponent,
    data: {title: 'Edit Student'},
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
