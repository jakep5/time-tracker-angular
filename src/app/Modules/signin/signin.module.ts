import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignInNavComponent } from './sign-in-nav/sign-in-nav.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [SignInPageComponent, SignInFormComponent, SignInNavComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressBarModule
  ]
})
export class SigninModule { }
