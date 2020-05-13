import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { Task } from '../../shared/models/Task';


@Component({
  selector: 'app-time-list-item',
  templateUrl: './time-list-item.component.html',
  styleUrls: ['./time-list-item.component.css']
})
export class TimeListItemComponent implements OnInit {
  @Input() task: Task;

  @Output() deleteItemEvent = new EventEmitter<Task>();
/* 
  @HostListener('click', ['$event'])
  onClick(e) {
    this.showEdit = !this.showEdit;
    console.log(this.showEdit);
  } */

  currentStyles: {};

  showEdit: boolean = false;

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

  deleteItem(task: Task): void {
    console.log('here');
    this.deleteItemEvent.emit(task);
  }

  toggleShowEdit(): void {
    this.showEdit = !this.showEdit;
    console.log(this.showEdit)
  }

  editTask(task: Task): void {
    this.task.name = task.name;
    this.task.hours = task.hours;
    this.task.priority = task.priority;
    this.setCurrentStyles();

    this.showEdit = false;

    console.log(this.task);
  }

}
