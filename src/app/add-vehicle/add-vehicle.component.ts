// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-vehicle',
//   templateUrl: './add-vehicle.component.html',
//   styleUrls: ['./add-vehicle.component.css'],
// })
// export class AddVehicleComponent implements OnInit {
//   vehicleType: string = '';
//   vehicleNo: string = '';
//   color: string = '';
//   selectedParkingLotId: string = '';
//   selectedFloor: number = 0;
//   vehicles: any[] = [];
//   parkingLots: any[] = [];
//   floors: any;

//   ngOnInit(): void {
//     this.loadParkingLots();
//     this.loadVehicles();
//   }

//   loadParkingLots(): void {
//     const storedParkingLots = localStorage.getItem('parkingLots');
//     if (storedParkingLots) {
//       this.parkingLots = JSON.parse(storedParkingLots);
//     }
//   }

//   loadVehicles(): void {
//     const storedVehicles = localStorage.getItem('vehicles');
//     if (storedVehicles) {
//       this.vehicles = JSON.parse(storedVehicles);
//     }
//   }

//   saveVehicles(): void {
//     localStorage.setItem('vehicles', JSON.stringify(this.vehicles));
//   }

//   getFloorsForSelectedLot(): number[] {
//     const lot = this.parkingLots.find(
//       (lot) => lot.parkingLotId === this.selectedParkingLotId
//     );
//     if (lot) {
//       return Array.from({ length: lot.numberOfFloors }, (_, i) => i + 1);
//     }
//     return [];
//   }

//   addVehicle(): void {
//     const validFloor = this.validateFloor();

//     if (!validFloor) {
//       alert(
//         'Invalid vehicle type for selected floor. Please choose the correct floor for the vehicle type.'
//       );
//       return;
//     }

//     const newVehicle = {
//       vehicleType: this.vehicleType,
//       vehicleNo: this.vehicleNo,
//       color: this.color,
//       parkingLotId: this.selectedParkingLotId,
//       floor: this.selectedFloor,
//     };

//     this.vehicles.push(newVehicle);
//     this.updateParkingLot();
//     this.saveVehicles();
//     this.clearForm();
//   }

//   validateFloor(): boolean {
//     const lot = this.parkingLots.find(
//       (lot) => lot.parkingLotId === this.selectedParkingLotId
//     );
//     if (!lot) return false;

//     switch (this.selectedFloor) {
//       case 1:
//         return this.vehicleType === 'truck';
//       case 2:
//         return this.vehicleType === 'car';
//       case 3:
//         return this.vehicleType === 'bike';
//       default:
//         return false;
//     }
//   }

//   updateParkingLot(): void {
//     const lotIndex = this.parkingLots.findIndex(
//       (lot) => lot.parkingLotId === this.selectedParkingLotId
//     );
//     if (lotIndex > -1) {
//       const selectedLot = this.parkingLots[lotIndex];
//       // Assuming slotsPerFloor is a total count of available slots on the selected floor
//       if (selectedLot.slotsPerFloor[this.selectedFloor - 1] > 0) {
//         selectedLot.slotsPerFloor[this.selectedFloor - 1] -= 1;
//         this.parkingLots[lotIndex] = selectedLot;
//         localStorage.setItem('parkingLots', JSON.stringify(this.parkingLots));
//       } else {
//         alert('No available slots on this floor.');
//       }
//     }
//   }

//   clearForm(): void {
//     this.vehicleType = '';
//     this.vehicleNo = '';
//     this.color = '';
//     this.selectedParkingLotId = '';
//     this.selectedFloor = 0;
//   }
// }

// src/app/add-vehicle/add-vehicle.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css'],
})
export class AddVehicleComponent implements OnInit {
  vehicleType: string = '';
  vehicleNo: string = '';
  selectedFloor: number | null = null;
  floors: number[] = [1, 2, 3];
  parkingSlots: any = {};

  ngOnInit(): void {
    this.initializeParkingSlots();
  }

  initializeParkingSlots(): void {
    const storedSlots = localStorage.getItem('parkingSlots');
    if (storedSlots) {
      this.parkingSlots = JSON.parse(storedSlots);
    } else {
      this.parkingSlots = {
        1: Array(10).fill(null),
        2: Array(10).fill(null),
        3: Array(10).fill(null),
      };
      this.saveParkingSlots();
    }
  }

  saveParkingSlots(): void {
    localStorage.setItem('parkingSlots', JSON.stringify(this.parkingSlots));
  }

  addVehicle(): void {
    if (
      this.selectedFloor === null ||
      this.vehicleType === '' ||
      this.vehicleNo === ''
    ) {
      alert('Please fill out all fields.');
      return;
    }

    const floorSlots = this.parkingSlots[this.selectedFloor];

    const availableSlotIndex = floorSlots.findIndex(
      (slot: any) => slot === null
    );
    if (availableSlotIndex === -1) {
      alert('No available slots on this floor.');
      return;
    }

    floorSlots[availableSlotIndex] = {
      vehicleType: this.vehicleType,
      vehicleNo: this.vehicleNo,
    };

    this.parkingSlots[this.selectedFloor] = floorSlots;
    this.saveParkingSlots();

    alert('Vehicle added successfully!');
    this.resetForm();
  }

  resetForm(): void {
    this.vehicleType = '';
    this.vehicleNo = '';
    this.selectedFloor = null;
  }
}
