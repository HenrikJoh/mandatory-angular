import { Component } from '@angular/core';
import { StatusType, Task } from '../constants';
import { TaskService } from '../task.service';


@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  taskList: Task[] = [];
  statusTypes: StatusType[] = [
    StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
  ];
  showForm = false;

  private statuslist = ['NotStarted', 'InProgress', 'Completed'];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTasks()
      .subscribe((tasks) => {
        this.taskList = tasks;
      });
  }

  newTask() {
    this.showForm = !this.showForm;
  }

  close(task) {
    this.showForm = false;
    return this.taskService.addTask(task.title, task.description);
  }

  filterTasks(statusType: StatusType, taskList: Task[]) {
    return this.taskService.filterTasks(statusType, taskList);
  }
  addMockTask() {
    return this.taskService.addTask('Mock task', 'mock description');
  }

}
