import { AddstudentComponent } from './addstudent/addstudent.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { StudentService } from './student.service';
import { AppRoutingModule } from './app-routing.module';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainbodyComponent,
    AddstudentComponent,
    NotfoundComponent,
    UpdateStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'',
        component: MainbodyComponent
      },
      {
        path:'addstudent',
        component: AddstudentComponent
      },
      {
        path:'updatestudent',
        component: UpdateStudentComponent

      },
    {
      path:'**',
      component: NotfoundComponent
    } 
    ])  
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
