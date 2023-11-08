import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateService } from './services/authenticate.service';



@NgModule({
  providers: [AuthenticateService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
