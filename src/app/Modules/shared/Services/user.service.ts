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

  //add all hours from all the user's tasks
  calculateTotalHours(tasks: Array<Task>): number {
    let totalHours: number = 0;
    
    for (let task of tasks) {
      totalHours += task.hours
    }

    this.totalHours = totalHours;

    return totalHours
  }

  //calculate user's current level based on their total hours logged of tasks
  calculateUserLevel(tasks: Array<Task>): string {
    let hoursLogged: number = 0;

    for (let task of tasks) {
      hoursLogged += task.hours
    };
    
    if (hoursLogged < 5) {
      return 'novice';
    } else if (hoursLogged >= 5 && hoursLogged < 30) {
      return 'apprentice'
    } else if (hoursLogged >= 30 && hoursLogged < 50) {
      return 'adept'
    } else if (hoursLogged >= 50 && hoursLogged < 100) {
      return 'expert'
    } else {
      return 'master'
    }; 
  }

}
