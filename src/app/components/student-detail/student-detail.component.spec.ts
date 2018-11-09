import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentDetailComponent} from './student-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {TruncateDatePipe} from '../../pipes/truncate-date-pipe';
import {RouterTestingModule} from '@angular/router/testing';

describe('StudentDetailComponent', () => {
  let component: StudentDetailComponent;
  let fixture: ComponentFixture<StudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDetailComponent, TruncateDatePipe],
      imports: [HttpClientModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
