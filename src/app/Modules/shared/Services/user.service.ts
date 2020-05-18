import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject('test');
  currentUser = this.user.asObservable();

  execChange: Subject<any> = new Subject<any>();

  constructor() { }

  changeUser(userChange: string) {
    this.execChange.next(userChange);
  }

}
