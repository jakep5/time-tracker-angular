import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignUpNavComponent } from './sign-up-nav/sign-up-nav.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';


@NgModule({
  declarations: [SignUpPageComponent, SignUpNavComponent, SignUpFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SignupModule { }
