import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/models/Task';
import { UserService } from '../../shared/Services/user.service';
import { TaskService } from '../../shared/Services/task-service.service';
import { ProgressBar } from 'progress';

@Component({
  selector: 'app-level-info',
  templateUrl: './level-info.component.html',
  styleUrls: ['./level-info.component.scss']
})
export class LevelInfoComponent implements OnInit {

  @Input() userHours: number;

  constructor(
    private userService: UserService,
    private taskService: TaskService
  ) { 
  }

  tasks: Array<Task>
  userLevel: string;
  barTotal: number;
  levelProgress: number;

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(sessionStorage.getItem('userId'))
      .then(tasks => this.userLevel = this.userService.calculateUserLevel(tasks))
      .then(tasks => this.generateProgressBar())
  }

  generateProgressBar () {
    let barTotal;

    //change bar total based on user's current level
    if (this.userLevel === 'novice') {
      barTotal = 5;
    } else if (this.userLevel === 'apprentice') {
      barTotal = 30;
    } else if (this.userLevel === 'adept') {
      barTotal = 50;
    } else if (this.userLevel === 'expert') {
      barTotal = 100
    } else {
      barTotal = 1000;
    }

    this.barTotal = barTotal;
    
    //calculate amount of progress bar to fill, as a percentage value
    this.levelProgress = (this.userHours / barTotal) * 100;
  }

}
