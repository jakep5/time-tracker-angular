import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-alphabetical-sort',
  templateUrl: './alphabetical-sort.component.html',
  styleUrls: ['./alphabetical-sort.component.scss']
})
export class AlphabeticalSortComponent implements OnInit {

  @Output() charSortChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  alphabet: Array<string> = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]; 

  currentLetters: Array<string>;

  setSortLetter(char: string): void {
    console.log(char);

    this.charSortChange.emit(char);

  }

  setSortLetterMobile(event): void {
    let char = event.target.value;

    this.charSortChange.emit(`${char}`);
  }

}
