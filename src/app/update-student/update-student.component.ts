import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../Student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  students : Student[];
  
  studentForm: boolean = false;
  isNewForm: boolean;
  newStudent: any = {};
  

  constructor(private _studentService: StudentService, private router: Router) { }

  ngOnInit() {
      
  }


  cancelNewStudent(){
    this.newStudent={};
    this.studentForm = false;
    this.router.navigateByUrl('');
  }

  updateStudent(student: Student){
    
    if(student){
     this.studentForm = true;
      return;
   }
    
      this.studentForm = true;  
      this.isNewForm = false;
     // this.newStudent = JSON.parse(localStorage.getItem('student'));
      this.newStudent = student;
 }
  
}
