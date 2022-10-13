import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erini',
  templateUrl: './erini.component.html',
  styleUrls: ['./erini.component.css']
})
export class EriniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DataParent = "2na Data Mn EL Parent";

  DataFromReg = "";

  GetData(data:any){
    // console.log(data);
    this.DataFromReg = data;
  }

}
