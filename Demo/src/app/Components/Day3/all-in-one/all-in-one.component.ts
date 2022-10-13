import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent implements OnInit {

  studentName=""
  studentAge=0 //"" ==> Falsy Value ==> 0

  AllStudents: {name:string, age:number}[] = [];

  AddNewStudent(){
    let NewStudent:{name:string, age:number} = {name: this.studentName, age: this.studentAge};
    if(this.studentAge<=30 && this.studentName.length >=3)
      this.AllStudents.push(NewStudent);
    // console.log(NewStudent);
    console.log(this.AllStudents);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
