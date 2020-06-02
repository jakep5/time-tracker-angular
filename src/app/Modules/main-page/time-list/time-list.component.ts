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

  //visibility of task add form
  toggleAddToList: boolean = false;

  //property for currently-selected sort by value 
  sortBy: string = '';

  tasks: Task[];

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

  deleteItem(taskToDelete: Task) {
    
    //confirmation popup with corresponding task information
    let confirmation = confirm(`Are you sure you want to delete ${taskToDelete.name}, with ${taskToDelete.hours} hours logged?`);

    if (confirmation) {

      //if confirmation is true, delete task via its ID
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

    //send get request for all tasks, then filter based on current search value (passed as argument)
    this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(taskReturn => this.tasks = taskReturn.filter(task => task.name.includes(searchVal)))
  }

  //change sort by property, then execute current sort via compareFunctionsService
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

  //change sort direction, then re-sort the tasks
  changeSortDirection(sortDirection: string) {
    this.compareFunctionsService.changeSortDirection(sortDirection);

    this.changeSortBy(this.sortBy);
  }

  //change currently-selected alphabetic character to sort by
  changeCharSort(char: string) {
    this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(tasks => {
        this.tasks = tasks;

        if (char === 'reset') {
          this.taskService.getTasks(sessionStorage.getItem('userId'))
            .then(tasks => this.tasks = tasks)
        } else {
          //change tasks to tasks that start with currently-selected sortBy character
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
