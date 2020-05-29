import { Component, OnInit } from '@angular/core';

import { Task } from '../../shared/models/Task';
import { CompareFunctionsService } from '../../shared/Services/compare-functions.service';
import { TaskService } from '../../shared/Services/task-service.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  results$: Observable<any>;
  private subject: Subject<string> = new Subject();
  
  constructor(
    private compareFunctionsService: CompareFunctionsService,
    private taskService: TaskService,
  ) { }

 
  toggleAddToList: boolean = false;

  sortBy: string = '';

  ngOnInit(): void {
    this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(res => {
        this.tasks = res;
      });

    this.subject.pipe(
      debounceTime(400)
      ).subscribe(searchValue => {
        this.searchTasks(searchValue);
      })
    
  }

  tasks: Task[];

  deleteItem(taskToDelete: Task) {

    let confirmation = confirm(`Are you sure you want to delete ${taskToDelete.name}, with ${taskToDelete.hours} hours logged?`);

    if (confirmation) {
      this.tasks.map(task => {
        if (task.id === taskToDelete.id) {
          let deleteIndex = this.tasks.indexOf(task);

          this.tasks.splice(deleteIndex, 1);
        }
      })

      this.taskService.deleteTask(taskToDelete.id);
    }
    
  }

  onSearchInputChange(searchTerm: string):void {
    this.subject.next(searchTerm)
  }

  searchTasks(searchVal: string): void {

    this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(taskReturn => this.tasks = taskReturn.filter(task => task.name.includes(searchVal)))
  }

  changeSortBy(sortBy: string) {
    this.sortBy = sortBy;

    if (this.sortBy === 'name') {
      this.tasks.sort(this.compareFunctionsService.compareName);
    } else if (this.sortBy === 'priority') {
      this.tasks.sort(this.compareFunctionsService.comparePriority);
    } else {
      this.tasks.sort(this.compareFunctionsService.compareHours)
    } 
  }

  changeSortDirection(sortDirection: string) {
    this.compareFunctionsService.changeSortDirection(sortDirection);

    this.changeSortBy(this.sortBy);
  }

  changeCharSort(char: string) {

    this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(tasks => {
        this.tasks = tasks;

        if (char === 'reset') {
          this.taskService.getTasks(sessionStorage.getItem('userId'))
            .then(tasks => this.tasks = tasks)
        } else {
          let filteredTasks = this.tasks.filter(item => item.name.startsWith(char))

          this.tasks = filteredTasks;
        }
      })
    
  }

  addNewTask(task: Task):void {
    this.tasks.push(task) 
    console.log(this.tasks);
    this.toggleAddToList = !this.toggleAddToList;
    this.taskService.addTask({
      name: task.name,
      hours: task.hours,
      priority: task.priority,
      user_id: parseInt(sessionStorage.getItem('userId')),
    })
      .then(
        this.taskService.getTasks(sessionStorage.getItem('userId'))
        .then(res => {
          this.tasks = res;
        })
      )
  }

  toggleShowAdd(): void {
    this.toggleAddToList = !this.toggleAddToList;
  }
}
