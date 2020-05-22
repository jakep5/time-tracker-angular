import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { LevelInfoComponent } from './level-info/level-info.component';
import { TopTasksComponent } from './top-tasks/top-tasks.component';
import { TopTaskItemComponent } from './top-task-item/top-task-item.component';



@NgModule({
  declarations: [
    ProfilePageComponent, 
    ProfileNavComponent, 
    LevelInfoComponent, 
    TopTasksComponent, TopTaskItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
