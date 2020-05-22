import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageNavComponent } from './main-page-nav/main-page-nav.component';
import { TimeListComponent } from './time-list/time-list.component';
import { TimeListItemComponent } from './time-list-item/time-list-item.component';
import { AddListItemComponent } from './add-list-item/add-list-item.component';
import { FormsModule } from '@angular/forms';
import { TimeListItemEditComponent } from './time-list-item-edit/time-list-item-edit.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { SearchTasksComponent } from './search-tasks/search-tasks.component';
import { AlphabeticalSortComponent } from './alphabetical-sort/alphabetical-sort.component';
import { AlphabeticalSortButtonComponent } from './alphabetical-sort-button/alphabetical-sort-button.component';



@NgModule({
  declarations: [
    MainPageComponent, 
    MainPageNavComponent, 
    TimeListComponent, 
    TimeListItemComponent, 
    AddListItemComponent, 
    TimeListItemEditComponent, 
    SortByComponent, 
    SearchTasksComponent, 
    AlphabeticalSortComponent, AlphabeticalSortButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class MainPageModule { }
