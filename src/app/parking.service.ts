// src/app/parking.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  private storageKey = 'parkingLots';

  constructor() {}

  // Initialize parking lot with floors and slots
  initParkingLot(parkingLotId: string, floors: number, slotsPerFloor: number) {
    const parkingLot = {
      id: parkingLotId,
      floors: Array.from({ length: floors }, (_, i) => ({
        floorNumber: i + 1,
        slots: this.createSlots(slotsPerFloor),
      })),
    };
    localStorage.setItem(this.storageKey, JSON.stringify(parkingLot));
  }

  // Create slots with predefined types
  private createSlots(slotsPerFloor: number) {
    return Array.from({ length: slotsPerFloor }, (_, i) => {
      let type: string;
      if (i === 0) type = 'truck';
      else if (i <= 2) type = 'bike';
      else type = 'car';
      return { type, occupied: false, vehicle: null };
    });
  }

  // Park a vehicle and generate a ticket
  parkVehicle(vehicle: any) {
    const parkingLot = this.getParkingLot();
    for (const floor of parkingLot.floors) {
      for (const slot of floor.slots) {
        if (slot.type === vehicle.type && !slot.occupied) {
          slot.occupied = true;
          slot.vehicle = vehicle;
          const ticket = `${parkingLot.id}_${floor.floorNumber}_${
            floor.slots.indexOf(slot) + 1
          }`;
          this.saveParkingLot(parkingLot);
          return ticket;
        }
      }
    }
    return null;
  }

  // Unpark a vehicle using the ticket
  unparkVehicle(ticket: string) {
    const parkingLot = this.getParkingLot();
    const [lotId, floorNo, slotNo] = ticket.split('_').map(Number);
    const floor = parkingLot.floors[floorNo - 1];
    const slot = floor.slots[slotNo - 1];
    slot.occupied = false;
    slot.vehicle = null;
    this.saveParkingLot(parkingLot);
    return true;
  }

  // Get parking lot status
  getParkingLot() {
    return JSON.parse(localStorage.getItem(this.storageKey) || 'null');
  }

  // Save parking lot status
  private saveParkingLot(parkingLot: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(parkingLot));
  }

  // Get available slots by type
  getAvailableSlots(type: string) {
    const parkingLot = this.getParkingLot();
    let availableSlots = 0;
    for (const floor of parkingLot.floors) {
      availableSlots += floor.slots.filter(
        (slot: any) => slot.type === type && !slot.occupied
      ).length;
    }
    return availableSlots;
  }
}
