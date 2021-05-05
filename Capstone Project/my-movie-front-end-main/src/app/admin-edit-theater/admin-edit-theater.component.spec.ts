import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditTheaterComponent } from './admin-edit-theater.component';

describe('AdminEditTheaterComponent', () => {
  let component: AdminEditTheaterComponent;
  let fixture: ComponentFixture<AdminEditTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
