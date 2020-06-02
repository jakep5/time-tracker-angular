import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/models/Task';
import { CompareFunctionsService } from '../../shared/Services/compare-functions.service';
import { TaskService } from '../../shared/Services/task-service.service';

@Component({
  selector: 'app-top-tasks',
  templateUrl: './top-tasks.component.html',
  styleUrls: ['./top-tasks.component.scss']
})
export class TopTasksComponent implements OnInit {


  constructor(
    private compareFunctions: CompareFunctionsService,
    private taskService: TaskService
  ) { }

  tasks: Array<Task>;
  tasksSorted: any;

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(tasks => this.tasks = tasks)
      .then(tasks => this.sortTasks(this.tasks))
  }

  sortTasks(tasks) {
    if (tasks.length === 0) {
      this.tasksSorted = 'no tasks to display yet!';
    } else {

      //top 4 tasks are returned from tasks compared by hours (descending order)
      this.tasksSorted = this.tasks.sort(this.compareFunctions.compareHours)
        .slice(0, 4);
    }
  }
}
