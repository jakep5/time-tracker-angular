import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
  
  //get tasks associated with user ID that is passed as an argument
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

  //delete task by taskId
  deleteTask(taskId: number): any {
    let token = this.tokenService.getAuthToken();

    return fetch(`${config.API_BASE_URL}/tasks/id/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
  }
  
  //PATCH task, accessed by task ID
  editTask(task: Task): any {

    let token = this.tokenService.getAuthToken();

    let taskEdit = {
      name: task.name,
      hours: task.hours,
      priority: task.priority
    }

    return fetch(`${config.API_BASE_URL}/tasks/id/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `bearer ${token}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(taskEdit)
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(e => Promise.reject(e.message))
        } else {
          let responseJson = response.json();
          return responseJson;
        }
      })
  }

  //search all tasks via their name, tasks must match current user's ID
  searchTasks(term: string): Observable<Task[]> {
    if (!term.trim()) {
      return of([]);
    }

    let userId = sessionStorage.getItem('user_id');

    let token = this.tokenService.getAuthToken();

    return Observable.create(observer => {
      fetch(`${config.API_BASE_URL}/tasks/search/?name=${term}`, {
        headers: {
          'Authorization': `bearer ${token}`,
          'user_id': userId
        }
      })
        .then(response => {
          return response.json();
        })
        .then(body => {
          observer.next(body);
          
          observer.complete();
        })

        .catch(err => observer.error(err));
    })
  }
}
