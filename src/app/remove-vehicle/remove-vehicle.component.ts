import { Component } from '@angular/core';
import { ParkingService } from '../parking.service';

@Component({
  selector: 'app-remove-vehicle',
  templateUrl: './remove-vehicle.component.html',
})
export class RemoveVehicleComponent {
  ticket!: string;

  constructor(private parkingService: ParkingService) {}

  unparkVehicle() {
    const success = this.parkingService.unparkVehicle(this.ticket);
    if (success) {
      alert('Vehicle unparked successfully!');
    } else {
      alert('Failed to unpark vehicle. Check the ticket.');
    }
  }
}
