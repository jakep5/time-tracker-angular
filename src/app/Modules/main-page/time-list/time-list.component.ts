import { Component, OnInit } from '@angular/core';

import { Task } from '../../shared/models/Task';
import { CompareFunctionsService } from '../Services/compare-functions.service';
import { TaskService } from '../../shared/Services/task-service.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {

  constructor(
    private compareFunctionsService: CompareFunctionsService,
    private taskService: TaskService
  ) { }

 
  toggleAddToList: boolean = false;

  sortBy: string = '';

  ngOnInit(): void {

  }

  tasks: Task[] = this.taskService.tasks;

  deleteItem(taskToDelete: Task) {
    this.tasks.map(task => {
      if (task.id === taskToDelete.id) {
        let deleteIndex = this.tasks.indexOf(task);

        /* console.log(this.tasks[deleteIndex]) */
        this.tasks.splice(deleteIndex, 1);
      }
    })
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
  }

  addNewTask(task: Task):void {
    this.toggleAddToList = !this.toggleAddToList;
    this.taskService.addTask({
      id: 5,
      name: task.name,
      hours: task.hours,
      userId: parseInt(sessionStorage.getItem('userId')),
      priority: task.priority
    })
  }

  toggleShowAdd(): void {
    this.toggleAddToList = !this.toggleAddToList;
  }
}
