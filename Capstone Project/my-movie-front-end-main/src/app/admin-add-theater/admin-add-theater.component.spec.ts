import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTheaterComponent } from './admin-add-theater.component';

describe('AdminAddTheaterComponent', () => {
  let component: AdminAddTheaterComponent;
  let fixture: ComponentFixture<AdminAddTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
