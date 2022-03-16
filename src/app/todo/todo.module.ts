import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskItemComponent } from './task-item/task-item.component';

const components = [TaskAddComponent, TaskItemComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components,
})
export class TodoModule {}
