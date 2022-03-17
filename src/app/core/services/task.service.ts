import { Task } from 'src/app/core/models/task.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * This service simulates communication to a backend service.
 */

@Injectable()
export class TaskService {
  private _tasks: Task[] = [
    {
      id: 1,
      title: 'Call Adam',
      status: 'PENDING',
    },
    { id: 2, title: 'Buy flowers', status: 'PENDING' },
    { id: 3, title: 'Send email to John', status: 'PENDING' },
    { id: 4, title: 'Buy concert tickets', status: 'DONE' },
    { id: 5, title: 'Call dad', status: 'DONE' },
  ];

  add(title: string): Observable<Task> {
    const id =
      Math.max.apply(
        Math,
        this._tasks.map(function (task) {
          return task.id;
        })
      ) + 1;

    const taskToAdd: Task = { id, title, status: 'PENDING' };

    this._tasks.push(taskToAdd);

    return of(taskToAdd);
  }

  findAll(): Observable<Task[]> {
    return of(this._tasks);
  }

  find(id: number): Observable<Task | undefined> {
    return of(this._tasks.find((task) => task.id === id));
  }

  edit(id: number, task: Task): Observable<Task> {
    const taskToUpdateIndex = this._tasks.findIndex((task) => task.id === id);
    const found = taskToUpdateIndex !== -1;

    if (found) {
      const updateTask = this._tasks[taskToUpdateIndex];
      updateTask.status = task.status;

      return of(updateTask);
    } else {
      return of(undefined);
    }
  }

  remove(id: number): Observable<Task | undefined> {
    const taskToDelete = this._tasks.findIndex((task) => task.id === id);

    const found = taskToDelete !== -1;

    if (found) {
      // deletes the task from tasks-list and returns the deleted task-object
      return of(this._tasks.splice(taskToDelete, 1)[0]);
    } else {
      return of(undefined);
    }
  }
}
