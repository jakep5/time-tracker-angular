import { Component, OnInit} from '@angular/core';

import { User } from '../../shared/models/User';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})

export class SignUpPageComponent implements OnInit {

  isLoading: boolean = false;
  
  constructor() { }

  ngOnInit(): void {

  }

  addUser(newUser: User): void {
    console.log(newUser)
  }

  loadingBarToggle(): void {
    this.isLoading = !this.isLoading;
  }

}
