import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { Task } from '../../shared/models/Task';
import { TaskService } from '../../shared/Services/task-service.service';


@Component({
  selector: 'app-time-list-item',
  templateUrl: './time-list-item.component.html',
  styleUrls: ['./time-list-item.component.scss']
})
export class TimeListItemComponent implements OnInit {
  @Input() task: Task;

  @Output() deleteItemEvent = new EventEmitter<Task>();


  //property for badge color styles
  currentStyles: {};

  //property for text color styles
  currentStylesText: {};

  //show task edit form - toggled via this.toggleShowEdit();
  showEdit: boolean = false;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {

    //set styles of item based on priority value for each respective task
    this.setCurrentStyles();
  }

  setCurrentStyles() {

    //change color of task badge depending on priority value
    if (this.task.priority === 'low') {
      this.currentStyles = {
        'background-color': 'green'
      }
    } else if (this.task.priority === 'med') {
      this.currentStyles = {
        'background-color': 'yellow',
      }

      //set text color to black instead of white for 'med' priority
      this.currentStylesText = {
        'color': 'black'
      }
    } else {
      this.currentStyles = {
        'background-color': 'red'
      }
    }
  }

  deleteItem(task: Task): void {
    this.deleteItemEvent.emit(task);
  }

  //toggle visibility of task editing form
  toggleShowEdit(): void {
    this.showEdit = !this.showEdit;
  }

  editTask(task: Task): void {
    task.id = this.task.id;

    this.setCurrentStyles();

    //pass new task object to PATCH function in taskService
    this.taskService.editTask(task)
  }

  hideTaskEdit() {
    this.showEdit = !this.showEdit;
  }
}
