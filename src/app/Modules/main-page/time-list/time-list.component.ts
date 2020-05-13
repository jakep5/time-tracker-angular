import { Component, OnInit } from '@angular/core';

import { Task } from '../../shared/models/Task';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.css']
})
export class TimeListComponent implements OnInit {

  constructor() { }

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

  private compareName(a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
  }

  private comparePriority(a, b) {
    let prioA = a.priority;
    let prioB = b.priority;

    if (prioA === 'low' && prioB === 'med') {
      return 1;
    } else if (prioA === 'med' && prioB === 'high') {
      return 1;
    } else if (prioA === 'low' && prioB === 'high') {
      return 1;
    } else if (prioA === 'med' && prioB === 'low') {
      return -1;
    } else if (prioA === 'high' && prioB === 'low') {
      return -1;
    } else {
      return -1;
    }
  }

  changeSortBy(sortBy: string) {
    this.sortBy = sortBy;

    if (this.sortBy === 'name') {
      this.tasks.sort(this.compareName);
    } else if (this.sortBy === 'priority') {
      this.tasks.sort(this.comparePriority);
    }

    console.log(this.tasks);
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
