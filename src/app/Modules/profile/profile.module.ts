import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { LevelInfoComponent } from './level-info/level-info.component';



@NgModule({
  declarations: [
    ProfilePageComponent, 
    ProfileNavComponent, LevelInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
