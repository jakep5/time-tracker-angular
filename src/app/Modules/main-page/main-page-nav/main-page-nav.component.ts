import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/Services/authentication-service.service';

@Component({
  selector: 'app-main-page-nav',
  templateUrl: './main-page-nav.component.html',
  styleUrls: ['./main-page-nav.component.css']
})
export class MainPageNavComponent implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {

  }

}
