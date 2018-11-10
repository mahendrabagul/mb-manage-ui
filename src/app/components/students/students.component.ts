import {Component, OnInit, TemplateRef} from '@angular/core';
import {StudentService} from 'src/app/services/student/student.service';
import {Router} from '@angular/router';
import {TokenService} from 'src/app/services/token/token.service';
import {HttpHeaders, HttpResponse} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Student} from '../../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
   pageTitle = 'List of Students';
   students: Student[];
   currentPage = 1;
   itemsPerPage = 10;
   totalItems: number;
   maxPages = 0;
   modalRef: BsModalRef;
   searchKeyWord = undefined;

  constructor(private modalService: BsModalService, private studentService: StudentService,
              private spinner: NgxSpinnerService,
              private router: Router, private tokenService: TokenService) {
  }

  pageChanged(event) {
    this.currentPage = event.page || 1;
    this.itemsPerPage = event.itemsPerPage;
    this.loadDetailsByPage();
  }

  searchByKeyWord() {
    this.loadDetailsByPage();
  }

  goToDetails(studentId: string) {
    this.router.navigateByUrl('/student-details/' + studentId);
  }

  updateStudent(studentId: string) {
    this.router.navigateByUrl('/student-update/' + studentId);
  }

  ngOnInit() {
    this.loadDetailsByPage();
  }

  loadDetailsByPage() {
    this.spinner.show();
    this.studentService.getStudents(this.buildPageRequest(), this.searchKeyWord)
      .subscribe((res: HttpResponse<Student[]>) => {
        this.paginateStudents(res.body, res.headers);
        setTimeout(() => {
          this.spinner.hide();
        }, 300);
      });
  }

  buildPageRequest(): any {
    const page: any = {
      page: this.currentPage - 1,
      size: this.itemsPerPage,
    };
    return page;
  }

  private paginateStudents(data: Student[], headers: HttpHeaders) {
    this.totalItems = parseInt(headers.get('X-Total-Count'));
    this.maxPages = Math.ceil(this.totalItems / this.itemsPerPage);
    console.log('MaxPages : ' + this.maxPages);
    console.log('Header : ' + headers.get('X-Total-Count'));
    this.students = data;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(studentId: string): void {
    this.studentService.deleteStudent(studentId).subscribe(
      result => {
        this.loadDetailsByPage();
      }
    );
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  isAllowed() {
    if (this.tokenService.isSenior() || this.tokenService.isAdmin()) {
      return true;
    }
    return false;
  }

}
