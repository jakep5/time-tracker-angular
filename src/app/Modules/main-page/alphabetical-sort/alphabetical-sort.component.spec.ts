import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalSortComponent } from './alphabetical-sort.component';

describe('AlphabeticalSortComponent', () => {
  let component: AlphabeticalSortComponent;
  let fixture: ComponentFixture<AlphabeticalSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabeticalSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticalSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
