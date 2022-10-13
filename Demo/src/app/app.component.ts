import { Component } from '@angular/core';

/**Decortor [Info] */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',/**HTML */
  styleUrls: ['./app.component.css']/**CSS */
})
export class AppComponent {/**Logic TS */
  title = 'Demo';
  // students: {name:string, age:number}[] = []

  student:{}={};

  GetData(data:any){
    // console.log(data)
    // this.students.push(data);
    // console.log(this.students);
    this.student = data;
  }

}
