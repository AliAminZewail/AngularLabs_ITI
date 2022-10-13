import { Component } from "@angular/core";

@Component({
    selector:"app-first",
    templateUrl:"./first.component.html",
    styleUrls:["./first.component.css"]
})
export class FirstComponent{
  name="Ahmed";

  myImage = "assets/Images/2.jpg";

  fname = "";

  lname = "";

  // images = [""]

  // srcImg = "";

  // myInterval :ReturnType<setInterval(()=>{},1000)> ;

  changeName(){
    this.name = "Sama";
    this.myImage = "assets/Images/3.jpg"
    // this.myInterval = setInterval(()=>{},1000)
  }

  getData(e:any){
    // console.log(e.target.value);
    this.fname = e.target.value;
    console.log("hello ya "+this.fname + " " + this.lname);
    console.log(`hello ya ${this.fname} ${this.lname}`);
  }
}
