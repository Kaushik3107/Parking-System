import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuccessDialogComponent } from './contact-success-dialog.component';

describe('ContactSuccessDialogComponent', () => {
  let component: ContactSuccessDialogComponent;
  let fixture: ComponentFixture<ContactSuccessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSuccessDialogComponent]
    });
    fixture = TestBed.createComponent(ContactSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
