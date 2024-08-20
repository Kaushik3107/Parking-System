// src/app/view-slots/view-slots.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-slots',
  templateUrl: './view-slots.component.html',
  styleUrls: ['./view-slots.component.css'],
})
export class ViewSlotsComponent implements OnInit {
  parkingSlots: any = {};
  floors: number[] = [1, 2, 3];

  ngOnInit(): void {
    this.loadParkingSlots();
  }

  loadParkingSlots(): void {
    const storedSlots = localStorage.getItem('parkingSlots');
    if (storedSlots) {
      this.parkingSlots = JSON.parse(storedSlots);
    } else {
      this.parkingSlots = {
        1: Array(10).fill(null),
        2: Array(10).fill(null),
        3: Array(10).fill(null),
      };
    }
  }

  saveParkingSlots(): void {
    localStorage.setItem('parkingSlots', JSON.stringify(this.parkingSlots));
  }

  checkoutVehicle(floor: number, slotIndex: number): void {
    this.parkingSlots[floor][slotIndex] = null;
    this.saveParkingSlots();
  }
}
