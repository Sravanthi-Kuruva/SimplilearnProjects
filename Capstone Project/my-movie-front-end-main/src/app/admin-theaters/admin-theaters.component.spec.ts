import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTheatersComponent } from './admin-theaters.component';

describe('AdminTheatersComponent', () => {
  let component: AdminTheatersComponent;
  let fixture: ComponentFixture<AdminTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTheatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
