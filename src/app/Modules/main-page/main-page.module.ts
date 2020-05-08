import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageNavComponent } from './main-page-nav/main-page-nav.component';
import { TimeListComponent } from './time-list/time-list.component';
import { TimeListItemComponent } from './time-list-item/time-list-item.component';
import { AddListItemComponent } from './add-list-item/add-list-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, MainPageNavComponent, TimeListComponent, TimeListItemComponent, AddListItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MainPageModule { }
