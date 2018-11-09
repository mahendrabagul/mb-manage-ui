import {Component, OnInit} from '@angular/core';
import {Student} from 'src/app/models/student';
import {StudentApiService} from 'src/app/services/student/student-api.service';
import {ActivatedRoute} from '@angular/router';
import {TokenService} from '../../services/token/token.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(private tokenService: TokenService, private route: ActivatedRoute,
              private studentApiService: StudentApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const studentId = params['studentId'];
      this.studentApiService.getStudent(studentId).subscribe(student => {
        this.student = student;
      });
    });
  }

  getImage(student: Student) {
    return '../../../../assets/profile.png';
  }
}
