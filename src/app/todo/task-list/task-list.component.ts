import { Component, Input } from '@angular/core';

import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  private tasks = [];
  noFurtherTasks = true;

  @Input()
  set taskItems(tasks: Task[]) {
    this.tasks = tasks;
    this.noFurtherTasks = this.tasks.length === 0;
  }

  get taskItems() {
    return this.tasks;
  }

  @Input()
  noFurtherTasksLabel = '';

  @Input()
  title: string = 'Tasklist';
}
