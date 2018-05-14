import { Component, Input } from '@angular/core';

import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';
@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  @Input() statusType: StatusType;

  tasks: Task[];
  constructor(private tasksService: TaskService) { }

  ngOnInit() {
    this.tasksService.getTasks(this.statusType)
      .subscribe((tasks) => {
        this.tasks = tasks;
      });


  }

  handleStatusChanged(ev) {

  }
}
