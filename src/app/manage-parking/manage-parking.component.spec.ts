import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageParkingComponent } from './manage-parking.component';

describe('ManageParkingComponent', () => {
  let component: ManageParkingComponent;
  let fixture: ComponentFixture<ManageParkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageParkingComponent]
    });
    fixture = TestBed.createComponent(ManageParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
