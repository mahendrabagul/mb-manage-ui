import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from 'src/app/services/student/student.service';
import {Student} from 'src/app/models/student';
import {CommonService} from 'src/app/services/common/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  pageTitle = 'Add an Student';
  years: string[];
  degrees: string[];

  angForm = new FormGroup({
    fullName: new FormControl(Validators.required),
    rollNumber: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    degree: new FormControl('', Validators.required),
    admissionYear: new FormControl('', Validators.required),
    createdAt: new FormControl(''),
    updatedAt: new FormControl(''),
    studentId: new FormControl('')
  });

  constructor(private router: Router,
              private studentService: StudentService,
              private fb: FormBuilder,
              private commonService: CommonService) {
    this.createForm();
  }

  ngOnInit() {
    this.commonService.getAllCommonData().subscribe(allCommonData => {
      this.years = allCommonData['years'];
      this.degrees = allCommonData['degrees'];
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      fullName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      admissionYear: new FormControl('', Validators.required),
      createdAt: new FormControl(''),
      updatedAt: new FormControl(''),
      studentId: new FormControl(''),
      rollNumber: new FormControl(''),
    });
  }

  addStudent(formData) {
    const student = new Student();
    student.fullName = formData.value.fullName;
    student.city = formData.value.city;
    student.admissionYear = formData.value.admissionYear;
    student.degree = formData.value.degree;
    this.studentService.addStudent(student).subscribe(
      result => {
        this.router.navigate(['students']);
      }
    );
  }

}
