import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Task } from '../../shared/models/Task';
import { TaskService } from '../../shared/Services/task-service.service';

@Component({
  selector: 'app-search-tasks',
  templateUrl: './search-tasks.component.html',
  styleUrls: ['./search-tasks.component.scss']
})
export class SearchTasksComponent implements OnInit {

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter();

  constructor(
  ) 
  {}


  ngOnInit(): void {
    
  }

  //emit searchTermChange
  search(term: string): void {
    this.searchTermChange.emit(term);
  }

}
