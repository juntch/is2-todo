import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/core/models/task.model';
import { TaskEventService } from '../task-event.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task: Task;

  checked: boolean;

  constructor(private _taskEventService: TaskEventService) {}

  ngOnInit() {
    this.checked = this.task.status === 'DONE';
  }

  updateStatus() {
    if (this.task.status === 'PENDING') {
      this.task.status = 'DONE';
    } else {
      this.task.status = 'PENDING';
    }

    this._taskEventService.newEvent({ type: 'UPDATE_STATUS', task: this.task });
  }

  onDeleteTask() {
    this._taskEventService.newEvent({
      type: 'DELETE',
      task: this.task,
    });
  }
}
