import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/Services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  currentUser: string;

  ngOnInit(): void {

    this.userService.currentUser.subscribe(user => this.currentUser = user);

    console.log(this.currentUser);
    
  }

}
