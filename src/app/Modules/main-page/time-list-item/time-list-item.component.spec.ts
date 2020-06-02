import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeListItemComponent } from './time-list-item.component';

describe('TimeListItemComponent', () => {
  let component: TimeListItemComponent;
  let fixture: ComponentFixture<TimeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeListItemComponent);
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
