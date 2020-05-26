import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Task } from '../../shared/models/Task';
import { NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TaskService } from '../../shared/Services/task-service.service';

@Component({
  selector: 'app-time-list-item-edit',
  templateUrl: './time-list-item-edit.component.html',
  styleUrls: ['./time-list-item-edit.component.scss']
})
export class TimeListItemEditComponent implements OnInit {
  @Input() task: Task;

  @ViewChild('editTaskForm', { static: true }) ngForm: NgForm;

  @Output() editTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Output() hideTaskEditor: EventEmitter<Task> = new EventEmitter();

  results$: Observable<any>;
  private subject: Subject<NgForm> = new Subject();

  constructor(
    private taskService: TaskService
  ) { }

  model = new Task();

  ngOnInit(): void {
    this.ngForm.form.valueChanges.subscribe(x => {
      this.onFormChange(x);
    })

    this.subject.pipe(
      debounceTime(500)
    ).subscribe(newTask => {
      this.editTask(newTask);
    })
  }

  onFormChange(editTaskForm: any):void {

    this.subject.next(editTaskForm)

    /* this.task.name = editTaskForm.value.name;
    this.task.hours = editTaskForm.value.hours;

    if (editTaskForm.value.priority !== undefined) {
      this.task.priority = editTaskForm.value.priority;
    } 

    this.editTaskEvent.emit(editTaskForm.value); */
  }
  
  editTask(newTask): void {
    console.log(newTask);

    if (Object.entries(newTask).length === 0) {
      return;
    }

    let taskEdit: Task = {
      name: newTask.name.toString(),
      hours: parseInt(newTask.hours),
      priority: newTask.priority,
      user_id: parseInt(sessionStorage.getItem('userId')),
    }

    this.editTaskEvent.emit(taskEdit);
  }

  hideTaskClick(): void {
    this.hideTaskEditor.emit();
  }

}
