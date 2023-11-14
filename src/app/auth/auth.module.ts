import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../material/material.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';



@NgModule({
  declarations: [
    AuthFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class AuthModule { }
