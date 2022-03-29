import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskListComponent } from './task-list.component';

let component: TaskListComponent;
let fixture: ComponentFixture<TaskListComponent>;

describe('TaskListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent, TaskItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  it('should set taskItems', () => {
    component.taskItems = [
      { id: 1, title: 'test1', status: 'DONE' },
      { id: 2, title: 'test2', status: 'PENDING' },
    ];
    expect(component.taskItems.length).toBe(2);
  });

  it('should set noFurtherTasks to true if taskItems contains no tasks', () => {
    component.taskItems = [];
    expect(component.noFurtherTasks).toBe(true);
  });
});
