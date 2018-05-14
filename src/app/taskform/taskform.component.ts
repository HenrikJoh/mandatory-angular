import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  showForm = false;
  @Output() taskAdded = new EventEmitter<boolean>();
  constructor() { }

  saveTask() {
    this.showForm = false;
    this.taskAdded.emit(true);
    console.log(this.showForm, "No");
  }
}
