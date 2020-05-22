import { Component, OnInit } from '@angular/core';

import { TokenService } from '../../shared/Services/token.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private tokenService: TokenService
  ) { }

  userId: string;

  ngOnInit(): void {
    let payload = this.tokenService.parseJwt(sessionStorage.getItem('time-tracker-token-key'));

    this.userId = payload.user_id;

    sessionStorage.setItem('userId', this.userId);
  }

 
}
