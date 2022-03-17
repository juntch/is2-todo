import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskItemComponent } from './task-item.component';

let component: TaskItemComponent;
let fixture: ComponentFixture<TaskItemComponent>;
let taskItemTitle: HTMLElement;

describe('TaskItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
    });
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    taskItemTitle = fixture.nativeElement.querySelector('.task-item .title');
  });

  it("should display the task's title", () => {
    component.task = { id: 1, title: 'Task title', status: 'PENDING' };
    fixture.detectChanges();
    expect(taskItemTitle.textContent).toEqual('Task title');
  });

  it("should have a class of 'done' if status is DONE", () => {
    component.task = { id: 1, title: 'Task title', status: 'DONE' };
    fixture.detectChanges();

    expect(taskItemTitle.classList.contains('done')).toBe(true);
  });

  it("should not have a class of 'done' if status is not DONE", () => {
    component.task = { id: 1, title: 'Task title', status: 'PENDING' };
    fixture.detectChanges();

    expect(taskItemTitle.classList.contains('done')).toBe(false);
  });
});
