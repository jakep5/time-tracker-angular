import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../shared/models/User';
import { AuthenticationService } from '../../shared/Services/authentication-service.service';
import { TokenService } from '../../shared/Services/token.service';
import { UserService } from '../../shared/Services/user.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  isLoading: boolean = false;

  error: boolean = false;

  needSignIn: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('needSignIn')) {
      this.needSignIn = true;
    }
  }

  signInUser(user: User) { 

    this.isLoading = true;

    localStorage.setItem('currentUser', user.username);
    
    this.authService.handleSignInAuthentication(user)
      .then(res => {
        this.tokenService.saveAuthToken(res.authToken);
      })
      .then(res => {
        this.isLoading = false;
        this.router.navigate(['main'])
      })
      .catch(err => {
        this.error = true;
        this.isLoading = false;
      })
  }

}
