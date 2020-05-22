import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit {
  
  @Output() sortByChange: EventEmitter<string> = new EventEmitter();
  @Output() sortDirectionChange: EventEmitter<string> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  onChange(sortByForm):void {
    this.sortByChange.emit(sortByForm.value.sortBy);
  }

  onAscClick(): void {
    this.sortDirectionChange.emit('asc');
  }

  onDescClick(): void {
    this.sortDirectionChange.emit('desc');
  }
}
