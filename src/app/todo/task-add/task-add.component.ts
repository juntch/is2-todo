import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {
  @Input()
  placeholder: string = 'Write your task here';

  constructor() {}

  ngOnInit(): void {}
}
