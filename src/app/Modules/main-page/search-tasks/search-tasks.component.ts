import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Task } from '../../shared/models/Task';
import { TaskService } from '../../shared/Services/task-service.service';

@Component({
  selector: 'app-search-tasks',
  templateUrl: './search-tasks.component.html',
  styleUrls: ['./search-tasks.component.css']
})
export class SearchTasksComponent implements OnInit {
  tasks$: Observable<Task[]>;

  @Output() taskNameSearchEmitter: EventEmitter<string> = new EventEmitter();

  private searchTerms = new Subject<string>();

  constructor(
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
  }

  onChange(searchTaskForm: NgForm) {
    console.log(searchTaskForm.value.taskName);

    this.searchTerms.next(searchTaskForm.value.taskName);
  }

}
