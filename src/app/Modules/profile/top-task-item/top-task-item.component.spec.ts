import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTaskItemComponent } from './top-task-item.component';

describe('TopTaskItemComponent', () => {
  let component: TopTaskItemComponent;
  let fixture: ComponentFixture<TopTaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTaskItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTaskItemComponent);
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
