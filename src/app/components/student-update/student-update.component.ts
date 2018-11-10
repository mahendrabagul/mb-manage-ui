import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from 'src/app/services/student/student.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from 'src/app/services/common/common.service';
import {TokenService} from '../../services/token/token.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  angForm = new FormGroup({
    fullName: new FormControl(Validators.required),
    city: new FormControl('', Validators.required),
    degree: new FormControl('', Validators.required),
    admissionYear: new FormControl('', Validators.required),
    rollNumber: new FormControl(''),
    createdAt: new FormControl(''),
    updatedAt: new FormControl(''),
    studentId: new FormControl(''),
    createdBy: new FormControl(''),
    updatedBy: new FormControl(''),
    tenant: new FormControl('')
  });
  degrees: string[];
  years: string[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private commonService: CommonService) {
  }

  ngOnInit() {
    this.commonService.getAllCommonData().subscribe(allCommonData => {
      this.degrees = allCommonData['degrees'];
      this.years = allCommonData['years'];
    });
    this.route.params.subscribe(params => {
      const studentId = params['studentId'];
      this.studentService.getStudent(studentId).subscribe(student => {
        this.setValue(student);
      });
    });
  }

  setValue(student: any) {
    this.angForm.setValue(student);
  }

  updateStudent() {
    this.route.params.subscribe(params => {
      const student = this.angForm.value;
      this.studentService.updateStudent(student.studentId, student).subscribe(
        result => console.log(result)
      );
      this.router.navigate(['students']);
    });
  }

}
