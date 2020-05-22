import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/Services/user.service';
import { Task } from '../../shared/models/Task';
import { TaskService } from '../../shared/Services/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private taskService: TaskService,
    private router: Router
  ) { }

  currentUser: string = localStorage.getItem('currentUser');
  
  tasks: Array<Task> = this.taskService.getTasks(sessionStorage.getItem('userId'))

  userHours: number = 0;
  
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(sessionStorage.getItem('userId'))  
      .then(tasks => {
        this.userHours = this.userService.calculateTotalHours(tasks)
      });
  }

  navigateToMain(): void {
    this.router.navigate(['main'])
  }



}
