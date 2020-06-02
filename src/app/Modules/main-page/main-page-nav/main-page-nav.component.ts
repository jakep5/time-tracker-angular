import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/Services/authentication-service.service';

@Component({
  selector: 'app-main-page-nav',
  templateUrl: './main-page-nav.component.html',
  styleUrls: ['./main-page-nav.component.scss']
})
export class MainPageNavComponent implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }
  
  active: string = ''; 

  ngOnInit(): void {
    
  }
}
