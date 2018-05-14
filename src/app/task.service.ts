import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';
import 'rxjs/add/observable/of';

export class TaskService {
  tasks: Task[];
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

  constructor() {
    this.tasks = [{
      id: 1,
      status: StatusType.NotStarted,
      title: 'title',
      description: 'desc'
    }
    ];
  }

  getTasks(status: StatusType): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...¨

    return Observable.of(this.tasks);
  }

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
    this.tasks.push({
      id: this.tasks.length,
      status: StatusType.NotStarted,
      title: title,
      description: description,
    })
  }
}
