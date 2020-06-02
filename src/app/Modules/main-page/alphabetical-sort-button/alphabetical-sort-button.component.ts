import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alphabetical-sort-button',
  templateUrl: './alphabetical-sort-button.component.html',
  styleUrls: ['./alphabetical-sort-button.component.scss']
})
export class AlphabeticalSortButtonComponent implements OnInit {

  @Input() letter: string;

  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //add outline to show currently-selected alphabetic character
  setStyles() {
    this.active = true;
  }
}
