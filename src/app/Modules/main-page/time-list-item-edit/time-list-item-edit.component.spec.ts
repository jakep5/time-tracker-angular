import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { TimeListItemEditComponent } from './time-list-item-edit.component';
import { FormsModule } from '@angular/forms';

describe('TimeListItemEditComponent', () => {
  let component: TimeListItemEditComponent;
  let fixture: ComponentFixture<TimeListItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [ TimeListItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeListItemEditComponent);
    component = fixture.componentInstance;
    component.task = {
      'name': 'Test',
      'priority': 'med',
      'hours': 10,
      'user_id': 1
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
