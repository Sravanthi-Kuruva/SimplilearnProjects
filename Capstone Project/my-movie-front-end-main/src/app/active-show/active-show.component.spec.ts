import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveShowComponent } from './active-show.component';

describe('ActiveShowComponent', () => {
  let component: ActiveShowComponent;
  let fixture: ComponentFixture<ActiveShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
