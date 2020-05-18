import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject('test');
  currentUser = this.user.asObservable();

  execChange: Subject<any> = new Subject<any>();

  totalHours: number = 0;

  constructor() { }

  changeUser(userChange: string) {
    this.execChange.next(userChange);
  }

  calculateTotalHours(tasks: Array<Task>): number {
    let totalHours: number = 0;
    
    for (let task of tasks) {
      totalHours += task.hours
    }

    this.totalHours = totalHours;

    return totalHours
  }

  calculateUserLevel(tasks: Array<Task>): string {
    let level: string;

    console.log(tasks);

    let hoursLogged: number = 0;

    for (let task of tasks) {
      hoursLogged += task.hours
    };

    console.log(hoursLogged);

    return '';

   /*  if (tasks < 10) {
      level = 'Rookie';
    } */
  }

}
