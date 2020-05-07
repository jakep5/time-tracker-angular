import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageNavComponent } from './main-page-nav.component';

describe('MainPageNavComponent', () => {
  let component: MainPageNavComponent;
  let fixture: ComponentFixture<MainPageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
