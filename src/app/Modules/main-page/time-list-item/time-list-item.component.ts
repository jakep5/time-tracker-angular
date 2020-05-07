import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../shared/models/Task';


@Component({
  selector: 'app-time-list-item',
  templateUrl: './time-list-item.component.html',
  styleUrls: ['./time-list-item.component.css']
})
export class TimeListItemComponent implements OnInit {
  @Input() task: Task;

  @Output() deleteItemEvent = new EventEmitter<Task>();

  currentStyles: {};

  constructor() { }

  ngOnInit(): void {
    this.setCurrentStyles();
  }

  setCurrentStyles() {
    if (this.task.priority === 'low') {
      this.currentStyles = {
        'background-color': 'green'
      }
    } else if (this.task.priority === 'med') {
      this.currentStyles = {
        'background-color': 'yellow'
      }
    } else {
      this.currentStyles = {
        'background-color': 'red'
      }
    }
  }

  deleteItem(task: Task) {
    console.log('here');
    this.deleteItemEvent.emit(task);
  }

}
