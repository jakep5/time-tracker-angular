import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageNavComponent } from './main-page-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainPageNavComponent', () => {
  let component: MainPageNavComponent;
  let fixture: ComponentFixture<MainPageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
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
