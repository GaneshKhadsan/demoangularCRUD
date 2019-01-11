import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  students : Student[];

  studentForm: boolean = false;
  isNewForm: boolean;
  newStudent: any = {};

  
  constructor(private _studentService: StudentService, private router: Router) { }
  ngOnInit() {
   this.getStudents();  
  }

  getStudents(){
    this.students = this._studentService.getStudentsFromData();
  } 

  cancelNewStudent(){
    this.newStudent={};
    this.studentForm = false;
    this.router.navigateByUrl('');
  }
  
  saveStudent(student: Student){
    if(this.isNewForm){
      //add new student
      this._studentService.addStudent(student);
    }else{
      //update existing student
    }
    this.studentForm = false;
    this._studentService.addStudent(student);
    this.studentForm = false;
    this.router.navigateByUrl('');
  }
  onKeydown(event) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }
}

