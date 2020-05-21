import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/models/Task';
import { UserService } from '../../shared/Services/user.service';
import { TaskService } from '../../shared/Services/task-service.service';

@Component({
  selector: 'app-level-info',
  templateUrl: './level-info.component.html',
  styleUrls: ['./level-info.component.css']
})
export class LevelInfoComponent implements OnInit {

  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) { 
  }

  tasks: Array<Task>
  userLevel: string;

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(tasks => this.userLevel = this.userService.calculateUserLevel(tasks))
  }


}
