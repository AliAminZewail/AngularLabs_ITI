import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnChanges {

  constructor() { }

  // @Input() studentsFromParent:{name:string, age:number}[] =[];
  @Input() studentFromParent: any;
  students:{name:string, age:number}[] = [];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if(this.studentFromParent.name){
    //   this.students.push(this.studentFromParent);
    // }
    // if(!changes['studentFromParent'].firstChange){
    //   this.students.push(this.studentFromParent);
    // }
    if(changes['studentFromParent'].currentValue.name){
      this.students.push(this.studentFromParent);
    }
  }





  // this.students.push(this.studentFromParent);


}
