import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Components/Day2/First/first.component';
import { SecondComponent } from './Components/Day2/second/second.component';
import { ThirdComponent } from './Components/Day2/third/third.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { HomeComponent } from './Components/Day3/ComponentInteraction/home/home.component';
// import { RegisterationComponent } from './Components/Day3/ComponentInteraction/registeration/registeration.component';
import { RegisterationComponent } from './Components/Day4/ComponentInteraction/registeration/registeration.component';
import { EriniComponent } from './Components/Day3/ComponentInteraction/erini/erini.component';
import { StudentsComponent } from './Components/Day4/ComponentInteraction/students/students.component';
import { ValidTestComponent } from './Components/Day4/Validation/valid-test/valid-test.component';
import { UsersComponent } from './Components/Day4/Routing/users/users.component';
import { UserDetailsComponent } from './Components/Day4/Routing/user-details/user-details.component';
import { HeaderComponent } from './Components/Day4/Routing/header/header.component';
import { ProfileComponent } from './Components/Day4/Routing/profile/profile.component';
import { ErrorComponent } from './Components/Day4/Routing/error/error.component';
import { RouterModule, Routes } from '@angular/router';
/**Decorator [MetaData About ur Class [Configuration] ] */

let routs:Routes = [
  {path:"",component:UsersComponent},
  {path:"users",component:UsersComponent},
  {path:"users/:id",component:UserDetailsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"**",component:ErrorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    AllInOneComponent,
    HomeComponent,
    RegisterationComponent,
    EriniComponent,
    StudentsComponent,
    ValidTestComponent,
    UsersComponent,
    UserDetailsComponent,
    HeaderComponent,
    ProfileComponent,
    ErrorComponent
    /**
     * 1- Components
     * 2- Directives
     * 3- Pipes
     */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routs)
    /**
     * 4- External Modules [RouterModule - FormsModule - HTTPModule - ...]
     */
  ],
  providers: [
    /**
     * 5- Services
     */
  ],
  bootstrap: [AppComponent /**Parent Component */]
})
export class AppModule { }
