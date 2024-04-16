import { Component } from '@angular/core';
import { BusServiceService } from '../../bus-service.service';
import { Router } from '@angular/router';
import { Bus } from '../../bus';
import { Passenger } from '../../passenger';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  bus : Bus = new Bus();
  pnr? : number;
  passengers : Passenger[] = []
  constructor(private service:BusServiceService, private router: Router){}
  ngOnInit(): void {
    this.service.getBusBooking(this.service.getSeatNumber()).subscribe(
      data => {
        this.bus = data;
        console.log(data); // You can do something with the data returned by the backend
      },
      error => {
        console.error(error); // Handle error if any
      }
    );
    this.service.getPassengerByPnr(this.service.getPnrNumber()).subscribe(data => {
      this.passengers = data;
    }, error => {
      console.log(error);
    });
  }
}
