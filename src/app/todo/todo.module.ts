import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

const components = [TaskAddComponent, TaskItemComponent, TaskListComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class TodoModule {}
