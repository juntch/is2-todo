import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from 'src/app/core/models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskListComponent } from './task-list.component';

let component: TaskListComponent;
let fixture: ComponentFixture<TaskListComponent>;
let taskListTitle: HTMLElement;
let tasks: Task[];

describe('TaskListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent, TaskItemComponent],
    });
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    taskListTitle = fixture.nativeElement.querySelector('.task-list .title');
    tasks = [
      { id: 1, title: 'Call Adam', status: 'PENDING' },
      { id: 2, title: 'Buy flowers', status: 'PENDING' },
      { id: 3, title: 'Send email to John', status: 'PENDING' },
      { id: 4, title: 'Buy concert tickets', status: 'DONE' },
      { id: 5, title: 'Call dad', status: 'DONE' },
    ];
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
