import { Injectable } from '@angular/core';

import { Task } from '../models/Task';
import { config } from '../../../../config';
import { TokenService } from './token.service';

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

  constructor(
    private tokenService: TokenService
  ) { }

  addTask(task: Task) {

    this.tasks.push(task);

    let token = this.tokenService.getAuthToken();
    
    return fetch(`${config.API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`
      },
      body: JSON.stringify(task),
    })
    .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
  }

}
