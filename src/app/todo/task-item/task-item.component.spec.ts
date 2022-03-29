import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEventService } from '../task-event.service';
import { TaskItemComponent } from './task-item.component';

let component: TaskItemComponent;
let fixture: ComponentFixture<TaskItemComponent>;
let taskEventService: TaskEventService;

describe('TaskItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
    });
    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    taskEventService = TestBed.inject(TaskEventService);
  });

  it('should change status from PENDING to DONE', () => {
    component.task = { id: 1, title: 'Task title', status: 'PENDING' };
    component.updateStatus();
    expect(component.task.status).toBe('DONE');
  });

  it('should change status from DONE to PENDING', () => {
    component.task = { id: 1, title: 'Task title', status: 'DONE' };
    component.updateStatus();
    expect(component.task.status).toBe('PENDING');
  });

  it('should set the checked property to true if the task status is DONE', () => {
    component.task = { id: 1, title: 'Task title', status: 'DONE' };
    component.ngOnInit();
    expect(component.checked).toBe(true);
  });

  it('should set the checked property to false if the task status is PENDING', () => {
    component.task = { id: 1, title: 'Task title', status: 'PENDING' };
    component.ngOnInit();
    expect(component.checked).toBe(false);
  });

  it('onDeleteTask should call taskEventService with the task', () => {
    const taskEventServiceSpy = spyOn(taskEventService, 'newEvent');

    component.onDeleteTask();

    expect(taskEventServiceSpy).toHaveBeenCalledTimes(1);
  });
});
