import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeListItemEditComponent } from './time-list-item-edit.component';

describe('TimeListItemEditComponent', () => {
  let component: TimeListItemEditComponent;
  let fixture: ComponentFixture<TimeListItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeListItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
