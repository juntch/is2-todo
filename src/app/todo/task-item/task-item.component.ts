import { Component, Input } from '@angular/core';
import { TaskEventService } from '../task-event.service';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
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
