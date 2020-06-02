import { Component, OnInit} from '@angular/core';

import { User } from '../../shared/models/User';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})

export class SignUpPageComponent implements OnInit {

  isLoading: boolean = false;
  
  constructor() { }

  ngOnInit(): void {

  }

  loadingBarToggle(): void {
    //toggle display of loading bar at top of page
    this.isLoading = !this.isLoading;
  }

}
