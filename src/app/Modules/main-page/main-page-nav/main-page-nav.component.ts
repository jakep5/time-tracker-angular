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
    if (localStorage.getItem('active link') === 'Profile') {
      this.active = 'Profile';
    } else {
      this.active = 'Home';
    }

    console.log(this.active);
  }
  
  setToProfile(): void {
    localStorage.setItem('active link', 'Profile');
  }

  setToHome(): void {
    localStorage.setItem('active link', 'Home');
  }

}
