import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { User } from '../../shared/models/User';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  @Output() signInEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  signIn(username: string, password: string, confirmPassword?: string) {
    let signInUser: User = {
      username,
      password,
      confirmPassword
    }

    this.signInEvent.emit(signInUser);
  }

}
