import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../shared/models/Task';


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

  onSubmit(form):void {
    this.editTaskEvent.emit(form.value);
  }

}
