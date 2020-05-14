import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { config } from '../../../../config';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  handleSignUpAuthentication(signUpForm: NgForm): Promise<User> {
    let newUser = {
      user_name: signUpForm.value.username,
      password: signUpForm.value.password
    }

    console.log(newUser);

    return fetch(`${config.API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res =>
          (!res.ok)
          ? res.json() .then(e => Promise.reject(e))
          : res.json()
      )
  }



}
