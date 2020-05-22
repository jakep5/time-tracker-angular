import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/models/User';
import { AuthenticationService } from '../../shared/Services/authentication-service.service';
import { TokenService } from '../../shared/Services/token.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})

export class SignUpFormComponent implements OnInit {

  @Output() newUserEvent = new EventEmitter<User>();

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

  }

  model = new User();

  error: string = null;

  onSubmit(signUpForm: NgForm) {
    this.authService.handleSignUpAuthentication(signUpForm)
      .then(res => {
        this.router.navigate(['main'])
        this.tokenService.saveAuthToken(res.authToken);
      })
      .catch(res => {
        this.error = res.error;
      })
  }

}
