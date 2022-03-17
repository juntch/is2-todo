import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskAddComponent } from './task-add.component';

let component: TaskAddComponent;
let fixture: ComponentFixture<TaskAddComponent>;

describe('TaskAddComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAddComponent],
    });
    fixture = TestBed.createComponent(TaskAddComponent);
    component = fixture.componentInstance;
  });

  it("should emit an event with the task's title", () => {
    spyOn(component.addTask, 'emit');
    fixture.detectChanges();

    const todoTextInput =
      fixture.debugElement.nativeElement.querySelector('.todo-text');

    todoTextInput.value = 'this is another task that should be done';

    const addButton =
      fixture.debugElement.nativeElement.querySelector('.btn-add');
    addButton.click();

    expect(component.addTask.emit).toHaveBeenCalledWith(
      'this is another task that should be done'
    );
  });
});
