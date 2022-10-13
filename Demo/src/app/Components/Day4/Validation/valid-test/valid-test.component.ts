import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-test',
  templateUrl: './valid-test.component.html',
  styles: [
  ]
})
export class ValidTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myRegFormValidation = new FormGroup({
    name: new FormControl("Ahmed",Validators.required),
    age: new FormControl(0,[Validators.min(20), Validators.max(40)])
  })


  get NameValid(){
    return this.myRegFormValidation.controls.name.valid;
  }

  get AgeValid(){
    return this.myRegFormValidation.controls.age.valid;
  }

  SendData(){
    console.log(this.myRegFormValidation);
    //Add Data To DB
    if(this.myRegFormValidation.valid){
      //ADD--->DB
    }
  }

}
