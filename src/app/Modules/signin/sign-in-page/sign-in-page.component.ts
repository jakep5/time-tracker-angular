import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/models/User';
import { AuthenticationService } from '../../shared/Services/authentication-service.service';
import { TokenService } from '../../shared/Services/token.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signInUser(user: User) { 
    this.authService.handleSignInAuthentication(user)
      .then(res => {
        this.tokenService.saveAuthToken(res.authToken);
      })
      .then(res => {
        this.router.navigate(['main'])
      })
  }

}
