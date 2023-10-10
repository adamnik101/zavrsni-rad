import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from "./services/auth.service";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
