import { STUDENT_DETAILS } from './student-data';
import { Student } from './Student';
import { Injectable } from '@angular/core';


@Injectable()
export class StudentService {
  private sData = STUDENT_DETAILS;
  
  getStudentsFromData(): Student[]{
    /* console.log(this.sData); */
    return this.sData;

  }
  
  addStudent(student: Student){
    this.sData.push(student);
    console.log(this.sData);
     /* localStorage.setItem('student', JSON.stringify(this.sData)); */

    alert("Student Details Inserted Successfully...!!");

  }
  
}

  /* 

   getStudentsFromService(): Student[] {
  return[
    {
      name: 'Ganesh',
      email: 'ganeshskhadsan@gmail.com',
      phone: 7620274575,
      dob: '6-30-1996'
    },
    {
      name: 'abc',
      email: 'abc@gmail.com',
      phone: 545654644,
      dob: '10-5-1996'
    },
    {
      name: 'xyz',
      email: 'xyz@gmail.com',
      phone: 8798797975,
      dob: '5-8-1996'
    }
]
  
  }  */