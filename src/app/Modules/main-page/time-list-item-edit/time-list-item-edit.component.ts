import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../shared/models/Task';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-time-list-item-edit',
  templateUrl: './time-list-item-edit.component.html',
  styleUrls: ['./time-list-item-edit.component.css']
})
export class TimeListItemEditComponent implements OnInit {

  @Input() task: Task;

  @Output() editTaskEvent: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  model = new Task();

  ngOnInit(): void {

  }

  onSubmit(editTaskForm: NgForm):void {

    this.task.name = editTaskForm.value.name;
    this.task.hours = editTaskForm.value.hours;

    if (editTaskForm.value.priority !== undefined) {
      this.task.priority = editTaskForm.value.priority;
    } 

    this.editTaskEvent.emit(editTaskForm.value);
  }

}
