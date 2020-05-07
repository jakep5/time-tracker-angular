import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../../shared/models/User';



@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @Output() newUserEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {

  }

  createNewUser(userName: string, password: string) {
    let user: User = {
      userName,
      password
    };

    this.newUserEvent.emit(user);
  }

}
