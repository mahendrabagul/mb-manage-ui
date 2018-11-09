import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentsComponent} from './students.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TruncateDatePipe} from '../../pipes/truncate-date-pipe';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BsModalService} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent, TruncateDatePipe],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, BsDropdownModule.forRoot(), HttpClientModule, RouterTestingModule],
      providers: [BsModalService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
