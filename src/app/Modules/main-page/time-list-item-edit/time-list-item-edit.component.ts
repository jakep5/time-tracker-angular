import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Task } from '../../shared/models/Task';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-time-list-item-edit',
  templateUrl: './time-list-item-edit.component.html',
  styleUrls: ['./time-list-item-edit.component.scss']
})
export class TimeListItemEditComponent implements OnInit {

  @Input() task: Task;

  @ViewChild('form') ngForm: NgForm;

  @Output() editTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Output() hideTaskEditor: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  model = new Task();

  ngOnInit(): void {
    this.ngForm.form.valueChanges.subscribe(x => {
      console.log(x);
    })
  }

  onSubmit(editTaskForm: NgForm):void {

    this.task.name = editTaskForm.value.name;
    this.task.hours = editTaskForm.value.hours;

    if (editTaskForm.value.priority !== undefined) {
      this.task.priority = editTaskForm.value.priority;
    } 

    this.editTaskEvent.emit(editTaskForm.value);
  }

  hideTaskClick(): void {
    this.hideTaskEditor.emit();
  }

}
