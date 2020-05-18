import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/Services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  currentUser: string = localStorage.getItem('currentUser');

  ngOnInit(): void {

  }

}
