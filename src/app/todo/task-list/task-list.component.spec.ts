import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskListComponent } from './task-list.component';

let component: TaskListComponent;
let fixture: ComponentFixture<TaskListComponent>;
let taskListTitle: HTMLElement;

describe('TaskListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent, TaskItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskListTitle = fixture.nativeElement.querySelector('.task-list .title');
  });

  it('should display noFurtherTasksLabel', () => {
    component.tasks = [];
    component.noFurtherTasksLabel = 'All done.';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('All done.');
  });

  it('should display the taskList title', () => {
    component.title = 'Ongoing tasks';
    fixture.detectChanges();
    expect(taskListTitle.textContent).toEqual('Ongoing tasks');
  });
});
