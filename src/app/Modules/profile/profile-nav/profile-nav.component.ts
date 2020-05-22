import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/Services/authentication-service.service';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

}
