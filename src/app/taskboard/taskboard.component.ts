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
    console.log(this.showForm, "test");
    this.showForm = !this.showForm;
  }
  close() {
    console.log(this.showForm, "Close");
    this.showForm = false;
  }


}
