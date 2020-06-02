import { Component, OnInit } from '@angular/core';

import { TokenService } from '../../shared/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  userId: string;

  ngOnInit(): void {
    if (!sessionStorage.getItem('time-tracker-token-key')) {
      this.router.navigate(['signIn', {needSignIn: true}]);
    };

    let payload = this.tokenService.parseJwt(sessionStorage.getItem('time-tracker-token-key'));

    this.userId = payload.user_id;

    sessionStorage.setItem('userId', this.userId);
  }

 
}
