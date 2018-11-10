import {User} from './user';

export class Student {
  studentId: string;
  fullName: string;
  rollNumber: string;
  city: string;
  degree: string;
  admissionYear: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: User;
  updatedBy?: User;
  tenant?: any;
}
