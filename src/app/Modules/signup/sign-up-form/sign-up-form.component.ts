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

  @Output() isLoadingEvent = new EventEmitter<any>();

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

  }

  model = new User();

  error: boolean = false;

  onSubmit(signUpForm: NgForm) {
    this.isLoadingEvent.emit();
    this.authService.handleSignUpAuthentication(signUpForm)
      .then(res => {
        this.isLoadingEvent.emit();
        this.router.navigate(['main'])
        this.tokenService.saveAuthToken(res.authToken);
      })
      .catch(res => {
        this.isLoadingEvent.emit();
        this.error = true;
      })
  }

}
