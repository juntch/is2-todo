import { ElementRef } from '@angular/core';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  @Input()
  placeholder: string =
    'Write your task here'; /* default value if no placeholder was provided */

  @Output()
  addTask = new EventEmitter<string>();

  @ViewChild('taskTitle') title: ElementRef;

  /* adds a task and resets the input */
  onAddTask(title: string) {
    this.addTask.emit(title);
    this.title.nativeElement.value = '';
  }
}
