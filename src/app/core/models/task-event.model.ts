import { Task } from './task.model';

export interface TaskEvent {
  type: 'DELETE' | 'UPDATE_STATUS';
  task: Task;
}
