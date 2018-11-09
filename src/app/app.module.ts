import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StudentsComponent} from './components/students/students.component';
import {StudentDetailComponent} from './components/student-detail/student-detail.component';
import {StudentAddComponent} from './components/student-add/student-add.component';
import {StudentEditComponent} from './components/student-edit/student-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/auth-guard/auth-guard.service';
import {StudentApiService} from './services/student/student-api.service';
import {JwtInterceptor} from './helpers/JwtInterceptor';
import {ErrorInterceptor} from './helpers/ErrorInterceptor';
import {TruncateDatePipe} from './pipes/truncate-date-pipe';
import {CommonService} from './services/common/common.service';
import {StylishPaginationComponent} from './components/stylish-pagination/stylish-pagination.component';
import {ChartsModule} from 'ng2-charts';
import {AlertModule} from 'ngx-bootstrap';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { TenantHeaderComponent } from './components/tenant-header/tenant-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    TruncateDatePipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    StudentDetailComponent,
    StudentAddComponent,
    StudentEditComponent,
    StylishPaginationComponent,
    TenantHeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ChartsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    AuthService, AuthGuardService, StudentApiService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
