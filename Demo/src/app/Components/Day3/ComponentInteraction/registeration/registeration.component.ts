import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor() {
    // setTimeout(()=>{
    //   this.myEvent.emit(this.DataReg);
    // },2000)
  }

  ngOnInit(): void {
  }

  DataReg = "2na Data Mn El Registeration";

  @Output() myEvent = new EventEmitter();// ---> myEvent.emit(data)


  FireNow(){
    this.myEvent.emit(this.DataReg);
  }



}
