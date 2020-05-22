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

/*   @Output() taskNameSearchEmitter: EventEmitter<string> = new EventEmitter();
 */
  constructor(
    private taskService: TaskService
  ) {
  }

  private searchTerms = new Subject<string>();
  tasks$: Observable<Task[]>;

  ngOnInit(): void {
    this.tasks$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.taskService.searchTasks(term))
    )
  }

  search(term: string): void {
    this.searchTerms.next(term);

    this.taskService.searchTasks(term)
  }

}
