import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';



@NgModule({
  declarations: [
    ProfilePageComponent, 
    ProfileNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
