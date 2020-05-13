import { Component, OnInit } from '@angular/core';

import { Task } from '../../shared/models/Task';
import { CompareFunctionsService } from '../Services/compare-functions.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {

  constructor(
    private compareFunctionsService: CompareFunctionsService
  ) { }

  tasks: Array<Task> = [
    {id: 1, name: "test", hours: 5, userId: 1, priority: "low"},
    {id: 2, name: "test2", hours: 5, userId: 1, priority: "med"},
    {id: 3, name: "test3", hours: 5, userId: 1, priority: "high"},
    {id: 4, name: "test4", hours: 5, userId: 1, priority: "med"}
  ]

  toggleAddToList: boolean = false;

  sortBy: string = '';

  ngOnInit(): void {
  }

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

  addNewTask(task: Task):void {
    this.toggleAddToList = !this.toggleAddToList;
    this.tasks.push({
      id: 5,
      name: task.name,
      hours: task.hours,
      userId: 1,
      priority: task.priority
    })
  }

  toggleShowAdd(): void {
    this.toggleAddToList = !this.toggleAddToList;
  }
}
