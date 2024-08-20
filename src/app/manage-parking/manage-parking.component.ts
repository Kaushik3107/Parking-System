import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactSuccessDialogComponent } from '../contact-success-dialog/contact-success-dialog.component';

@Component({
  selector: 'app-manage-parking',
  templateUrl: './manage-parking.component.html',
  styleUrls: ['./manage-parking.component.css'],
})
export class ManageParkingComponent {
  name = '';
  email = '';
  message = '';

  constructor(private dialog: MatDialog) {}

  onSubmit() {
    // Open success dialog
    this.dialog.open(ContactSuccessDialogComponent);

    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
