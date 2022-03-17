import { map, Observable } from 'rxjs';
import { Component } from '@angular/core';
import { TaskService } from './core/services/task.service';
import { Task } from './core/models/task.model';
import { TaskEvent } from './core/models/task-event.model';
import { TaskEventService } from './todo/task-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'is2-todo';

  pendingTasks$!: Observable<Task[]>;
  doneTasks$!: Observable<Task[]>;

  taskEvents$!: Observable<TaskEvent>;

  constructor(
    private _taskService: TaskService,
    private _taskEventService: TaskEventService
  ) {
    this.loadTasks();
    this.listenForTasks();
  }

  private loadTasks() {
    const allTasks$ = this._taskService.findAll();
    this.pendingTasks$ = allTasks$.pipe(
      map((tasks) => tasks.filter((task) => task.status === 'PENDING'))
    );
    this.doneTasks$ = allTasks$.pipe(
      map((tasks) => tasks.filter((task) => task.status === 'DONE'))
    );
  }

  private listenForTasks() {
    this._taskEventService.taskEventListener().subscribe((taskEvent) => {
      if (taskEvent.type === 'UPDATE_STATUS') {
        const updateTask = taskEvent.task;
        this._taskService.edit(updateTask.id, updateTask);
        this.loadTasks();
        return;
      }

      if (taskEvent.type === 'DELETE') {
        const updateTask = taskEvent.task;
        this._taskService.remove(updateTask.id);
        this.loadTasks();
        return;
      }
    });
  }

  addNewTask(taskTitle: string) {
    this._taskService.add(taskTitle);

    this.loadTasks();
  }
}
