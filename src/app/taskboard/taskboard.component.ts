import { Component } from '@angular/core';
import { StatusType } from '../constants';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  showForm = false;
  private statuslist = ['NotStarted', 'InProgress', 'Completed'];
  constructor() { }

  newTask() {
    this.showForm = true;
  }
  saveTask() {
    this.showForm = false;
  }
}
