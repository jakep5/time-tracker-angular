import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageNavComponent } from './about-page-nav.component';

describe('AboutPageNavComponent', () => {
  let component: AboutPageNavComponent;
  let fixture: ComponentFixture<AboutPageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
