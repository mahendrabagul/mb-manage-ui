import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentUpdateComponent} from './student-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('StudentUpdateComponent', () => {
  let component: StudentUpdateComponent;
  let fixture: ComponentFixture<StudentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentUpdateComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
