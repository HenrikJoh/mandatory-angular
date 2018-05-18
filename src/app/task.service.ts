import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';
import 'rxjs/add/observable/of';

export class TaskService {
  taskList: Task[];
  observer;
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

  constructor() {
    const test = [{
      id: 0,
      status: StatusType.NotStarted,
      title: 'Mocked not started',
      description: 'Mocked description',
    },
    {
      id: 1,
      status: StatusType.Completed,
      title: 'Mocked not started',
      description: 'Mocked description',
    },
    {
      id: 2,
      status: StatusType.InProgress,
      title: 'Mocked not started',
      description: 'Mocked description',
    }
    ];
    this.taskList = test;
  }

  filterTasks(statusType: StatusType, taskList: Task[] = []): Task[] {
    return taskList.filter((task) => {
      return task.status === statusType;
    });
  }

  getTasks(): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...¨
    return new Observable((observer) => {
      this.observer = observer;
      return this.observer.next(this.taskList);
    });
  }

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
    this.taskList[id].status = status;
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
    this.taskList.push({
      id: this.taskList.length,
      status: StatusType.NotStarted,
      title: title,
      description: description,
    });
    return this.observer.next(this.taskList);
  }
}
