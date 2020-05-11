import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  model = new User();

  onSubmit(signUpForm: NgForm) {
    this.newUserEvent.emit(signUpForm.value)
  }

}
