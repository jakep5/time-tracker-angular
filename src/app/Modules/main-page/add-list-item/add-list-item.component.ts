import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Task } from '../../shared/models/Task';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.scss']
})
export class AddListItemComponent implements OnInit {

  @Output() newTask: EventEmitter<Task> = new EventEmitter();
  @Output() hideForm: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  model = new Task();

  //emit event with newly-added task
  onSubmit(addTaskForm: NgForm) {
    this.newTask.emit(addTaskForm.value);
  }

  //hide add list form
  onHideFormClick() {
    this.hideForm.emit()
  }
}
