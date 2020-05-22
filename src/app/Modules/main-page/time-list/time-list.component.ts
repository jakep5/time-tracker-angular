import { Component, OnInit } from '@angular/core';

import { Task } from '../../shared/models/Task';
import { CompareFunctionsService } from '../../shared/Services/compare-functions.service';
import { TaskService } from '../../shared/Services/task-service.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  constructor(
    private compareFunctionsService: CompareFunctionsService,
    private taskService: TaskService,
  ) { }

 
  toggleAddToList: boolean = false;

  sortBy: string = '';

  ngOnInit(): void {
    this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(res => {
        this.tasks = res;
      })
  }

  tasks: Task[];

  deleteItem(taskToDelete: Task) {
    this.tasks.map(task => {
      if (task.id === taskToDelete.id) {
        let deleteIndex = this.tasks.indexOf(task);

        /* console.log(this.tasks[deleteIndex]) */
        this.tasks.splice(deleteIndex, 1);
      }
    })

    this.taskService.deleteTask(taskToDelete.id);
  }

  changeSortBy(sortBy: string) {
    this.sortBy = sortBy;

    if (this.sortBy === 'name') {
      this.tasks.sort(this.compareFunctionsService.compareName);
    } else if (this.sortBy === 'priority') {
      this.tasks.sort(this.compareFunctionsService.comparePriority);
    } else {
      this.tasks.sort(this.compareFunctionsService.compareHours)
    } 
  }

  changeSortDirection(sortDirection: string) {
    this.compareFunctionsService.changeSortDirection(sortDirection);

    this.changeSortBy(this.sortBy);
  }

  changeCharSort(char: string) {
    console.log(char);

    console.log(this.tasks);

    if (char === 'reset') {
      this.tasks = this.taskService.getTasks(sessionStorage.getItem('userId'))
    } else {
      let filteredTasks = this.tasks.filter(item => item.name.startsWith(char))

      this.tasks = filteredTasks;
    }
  }

  addNewTask(task: Task):void {
    this.toggleAddToList = !this.toggleAddToList;
    this.taskService.addTask({
      name: task.name,
      hours: task.hours,
      priority: task.priority,
      user_id: parseInt(sessionStorage.getItem('userId')),
    })

    this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(res => {
        this.tasks = res;
      })
  
  }

  toggleShowAdd(): void {
    this.toggleAddToList = !this.toggleAddToList;
  }
}
