import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribsListComponent } from './cribs-list.component';

describe('CribsListComponent', () => {
  let component: CribsListComponent;
  let fixture: ComponentFixture<CribsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
