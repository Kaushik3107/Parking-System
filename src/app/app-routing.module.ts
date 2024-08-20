import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageParkingComponent } from './manage-parking/manage-parking.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { RemoveVehicleComponent } from './remove-vehicle/remove-vehicle.component';
import { ViewSlotsComponent } from './view-slots/view-slots.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manage-parking', component: ManageParkingComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'remove-vehicle', component: RemoveVehicleComponent },
  { path: 'view-slots', component: ViewSlotsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
