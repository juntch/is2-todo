import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './task-add/task-add.component';

@NgModule({
  declarations: [TaskAddComponent],
  imports: [CommonModule],
  exports: [TaskAddComponent],
})
export class TodoModule {}
