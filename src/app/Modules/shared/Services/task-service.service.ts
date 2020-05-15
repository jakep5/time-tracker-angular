import { Injectable } from '@angular/core';

import { Task } from '../models/Task';
import { config } from '../../../../config';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService {


  constructor(
    private tokenService: TokenService
  ) { }

  addTask(task: Task) {

    console.log(JSON.stringify(task));

    let token = this.tokenService.getAuthToken();
    
    return fetch(`${config.API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
  }
  
  getTasks(userId: string): any {

    let token = this.tokenService.getAuthToken();

    return fetch(`${config.API_BASE_URL}/tasks`, {
      headers: {
        'Authorization': `bearer ${token}`,
        'user_id': userId
      }
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(e => Promise.reject(e.message));
        } else {
          let responseJson = response.json();
          return responseJson;
        }
      })
  }

  deleteTask(taskId: number): any {
    let token = this.tokenService.getAuthToken();

    return fetch(`${config.API_BASE_URL}/tasks/id/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
  } 

}
