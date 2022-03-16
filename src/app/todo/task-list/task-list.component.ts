import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input()
  taskItems: Task[] = [
    { id: 1, title: 'Clean room', status: 'PENDING' },
    { id: 2, title: 'Buy water', status: 'DONE' },
    { id: 3, title: 'Go fishing', status: 'PENDING' },
  ];

  @Input()
  title: string = 'Not finished tasks';

  constructor() {}

  ngOnInit(): void {}
}
