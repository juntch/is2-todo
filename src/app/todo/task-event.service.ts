import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TaskEvent } from '../core/models/task-event.model';

@Injectable({
  providedIn: 'root',
})
export class TaskEventService {
  private _taskEvent = new Subject<TaskEvent>();

  newEvent(event: TaskEvent) {
    this._taskEvent.next(event);
  }

  taskEventListener() {
    return this._taskEvent.asObservable();
  }
}
