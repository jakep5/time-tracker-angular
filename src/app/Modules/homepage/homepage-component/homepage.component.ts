import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  moreInfoDisplay: boolean = false;

  displayMoreInfo(): void {
    this.moreInfoDisplay = !this.moreInfoDisplay;
    console.log(this.moreInfoDisplay)
  }

}
