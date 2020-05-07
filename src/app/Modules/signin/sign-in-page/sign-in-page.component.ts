import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/User';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signInUser(user: User) {
    console.log(user);
  }

}
