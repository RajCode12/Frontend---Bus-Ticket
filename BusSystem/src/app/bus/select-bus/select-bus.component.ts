import { Component, OnInit } from '@angular/core';
import { Bus } from '../../bus';
import { BusServiceService } from '../../bus-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-bus',
  templateUrl: './select-bus.component.html',
  styleUrl: './select-bus.component.css'
})
export class SelectBusComponent implements OnInit{
  buses: Bus[] = [
    {busNumber: "KA01AB1234",busName: 'Star Travels', type: "AC",departure: "10:00 AM",reporting: "9:30 AM",source: "",destination: "",date: new Date()},
    {busNumber: "MH02CD5678",busName: 'Royal Coaches',type: "Sleeper",departure: "11:00 AM",reporting: "10:30 AM",source: "",destination: "",date: new Date()},
    {busNumber: "DL03EF9101",busName: 'Golden Routes',type: "Semi Sleeper",departure: "12:00 PM",reporting: "11:30 AM",source: "",destination: "",date: new Date()},
    {busNumber: "TN04GH1122",busName: 'Blue Busways',type: "Non AC",departure: "1:00 PM",reporting: "12:30 PM",source: "",destination: "",date: new Date()},
    {busNumber: "UP05IJ1314",busName: 'Red Express',type: "AC",departure: "2:00 PM",reporting: "1:30 PM",source: "",destination: "",date: new Date()},
    {busNumber: "BR09IJ1216",busName: 'Pink Routes',type: "Sleeper",departure: "2:00 PM",reporting: "1:30 PM",source: "",destination: "",date: new Date()}
];

  constructor(private service : BusServiceService, private router : Router) {}
  bus : Bus = new Bus()
  selectedBus : Bus = new Bus()

  ngOnInit(): void {
    this.bus = this.service.getBus();
    console.log(this.bus);
  }

  //generate pnr
  generateRandomNumber(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }
  random : number = this.generateRandomNumber();
  
  onClick(bus : Bus) {
    this.selectedBus = bus;
    this.selectedBus.pnr = this.random;
    this.selectedBus.source = this.bus.source;
    this.selectedBus.destination = this.bus.destination;
    this.selectedBus.date = this.bus.date;
    this.service.setPnrNumber(this.random);
    this.service.setBus(this.selectedBus);
    this.router.navigate(['/payment']);
  }
}
