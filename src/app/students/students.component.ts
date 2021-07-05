import { Component, OnInit } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  model: Student;
  allStudents: Student[];
  constructor() {
    this.allStudents = this.getAllStudents();
    this.model = {
      studentId: 0,
      name: '',
      studentRoll: 0,
      studentClass: ''

    }
   }
  ngOnInit(): void {
  }
  getAllStudents(): Student[] {
    return [
        {studentId: 101, name: 'Atik Ullah', studentRoll: 10, studentClass: 'Five'},
        {studentId: 102, name: 'Shamim Uddin', studentRoll : 15, studentClass: 'Five'},
        {studentId: 103, name: 'Md Riaz', studentRoll: 1, studentClass: 'Five'},
        {studentId: 104, name: 'Shari Ahmed', studentRoll: 5, studentClass: 'Five'}
    ]
}
OnAddStudent() {
  this.allStudents.push({
    studentId: this.model.studentId,
    name: this.model.name,
    studentRoll: this.model.studentRoll,
    studentClass: this.model.studentClass
  })
  this.model = {
    studentId: 0,
    name: '',
    studentRoll: 0,
    studentClass: ''
  }
}
getStudents(student: Student){
  this.model = {
    studentId: student.studentId,
    name: student.name,
    studentRoll: student.studentRoll,
    studentClass: student.studentClass
  }
}
deleteStudent(student: Student){
  var st = this.allStudents.indexOf(student);
  this.allStudents.splice(st);
}
}
