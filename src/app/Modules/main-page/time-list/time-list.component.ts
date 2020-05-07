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

}
