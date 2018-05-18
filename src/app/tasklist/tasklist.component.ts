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
  @Input() taskList: Task[];

  constructor(private tasksService: TaskService) { }

}
