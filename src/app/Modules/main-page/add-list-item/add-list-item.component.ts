import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { Task } from '../../shared/models/Task';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.css']
})
export class AddListItemComponent implements OnInit {

  @Output() newTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  model = new Task();

  formValidity: object = {
    name: true,
    hours: true,
    priority: true
  }

  onSubmit(addTaskForm: NgForm) {
    console.log(addTaskForm.value);
    if (addTaskForm.valid) {

    }

    this.newTask.emit(addTaskForm.value);
  }


}
