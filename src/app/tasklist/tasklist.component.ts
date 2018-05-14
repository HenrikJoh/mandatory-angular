import { Component, Input } from '@angular/core';

import { Task, StatusType } from '../constants';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  @Input() statusType: StatusType;

  tasks: Task[];
  constructor() { }

  ngOnInit() {
    console.error('on start' this.statusType);
    this.tasks = [{
      id: 1,
      status: StatusType.NotStarted,
      title: 'title',
      description: 'desc'
    }
    ];
  }

  handleStatusChanged(ev) {

  }
}
