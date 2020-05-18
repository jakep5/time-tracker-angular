import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject('test');
  currentUser = this.user.asObservable();

  constructor() { }

  changeUser(user: string) {
    console.log(user, 'changed')
    this.user.next(user);
  }
}
