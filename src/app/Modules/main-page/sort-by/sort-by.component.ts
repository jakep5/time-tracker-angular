import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {
  
  @Output() sortByChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(sortByForm):void {
    this.sortByChange.emit(sortByForm.value.sortBy);
  }
}
