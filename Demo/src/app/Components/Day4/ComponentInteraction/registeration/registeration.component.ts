import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // student:{} = {};

  @Output() myEvent = new EventEmitter();

  SendData(n:string, a:number){
    this.myEvent.emit({name:n, age: a});
    // console.log(n, a);
    // this.student = {name:n, age: a};
  }

}
