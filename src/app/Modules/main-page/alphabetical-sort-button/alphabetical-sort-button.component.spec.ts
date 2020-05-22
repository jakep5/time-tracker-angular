import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalSortButtonComponent } from './alphabetical-sort-button.component';

describe('AlphabeticalSortButtonComponent', () => {
  let component: AlphabeticalSortButtonComponent;
  let fixture: ComponentFixture<AlphabeticalSortButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabeticalSortButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticalSortButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
