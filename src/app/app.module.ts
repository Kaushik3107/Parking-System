import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ManageParkingComponent } from './manage-parking/manage-parking.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { RemoveVehicleComponent } from './remove-vehicle/remove-vehicle.component';
import { ViewSlotsComponent } from './view-slots/view-slots.component';
import { ParkingService } from './parking.service';
import { ContactSuccessDialogComponent } from './contact-success-dialog/contact-success-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ManageParkingComponent,
    AddVehicleComponent,
    RemoveVehicleComponent,
    ViewSlotsComponent,
    ContactSuccessDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
