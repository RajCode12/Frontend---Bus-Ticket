import { Component, OnInit } from '@angular/core';
import { Bus } from '../../bus';
import { BusServiceService } from '../../bus-service.service';
import { Router } from '@angular/router';
import { Passenger } from '../../passenger';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  bus : Bus = new Bus();
  constructor(private service : BusServiceService, private router : Router) {}

  passengers : Passenger[] = [new Passenger()];

  random : number = 0;
  ngOnInit(): void {
    this.bus = this.service.getBus();
    this.random = this.service.getPnrNumber();
  }
  
  addCount() {
    this.passengers.push(new Passenger());
  }
  deleteCount() {
    this.passengers.pop();
  }
  
  i:number=0;
  
  onSubmit() {
    for(this.i=0; this.i < this.passengers.length; this.i++) {
      this.passengers[this.i].pnr = this.random;
      this.passengers[this.i].seat = this.i + 1;
      //adding multiple passenger
      this.service.addPassenger(this.passengers[this.i]).subscribe(data=>{
        
      },
      error => console.log(error));
    }
    this.service.addRecord(this.bus).subscribe(data=>{},
    error => console.log(error));
    //alert
    alert('Successfully created ticket!');
    this.service.setPnrNumber(this.random);
    this.router.navigate(['/show']);
  }

  onBack() {
    this.router.navigate(['/select-bus']);
  }
  
}
