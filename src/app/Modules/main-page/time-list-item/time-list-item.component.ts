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

  currentStyles: {};
  currentStylesText: {};

  showEdit: boolean = false;

  constructor(
    private taskService: TaskService
  ) { }

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
        'background-color': 'yellow',
      }
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

  toggleShowEdit(): void {
    this.showEdit = !this.showEdit;
  }

  editTask(task: Task): void {

    task.id = this.task.id;

    this.setCurrentStyles();

    this.taskService.editTask(task)
  }

  hideTaskEdit() {
    this.showEdit = !this.showEdit;
  }

}
