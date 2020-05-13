import { Injectable } from '@angular/core';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks: Array<Task> = [
    {id: 1, name: "test", hours: 5, userId: 1, priority: "low"},
    {id: 2, name: "test2", hours: 5, userId: 1, priority: "med"},
    {id: 3, name: "test3", hours: 5, userId: 1, priority: "high"},
    {id: 4, name: "test4", hours: 5, userId: 1, priority: "med"}
  ]

  constructor() { }

  insertTask(task: Task) {
    this.tasks.push(task);
  }

}
