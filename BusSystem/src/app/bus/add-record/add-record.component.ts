import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BusServiceService } from '../../bus-service.service';
import { Bus } from '../../bus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrl: './add-record.component.css'
})
export class AddRecordComponent {

  sources = ['Delhi', 'Pune', 'Patna', 'Punjab', 'Mumbai', 'Chandigarh'];
  destinations = ['Delhi', 'Pune', 'Patna', 'Punjab', 'Mumbai', 'Chandigarh'];

  constructor(private service : BusServiceService, private router : Router) {}
  
  busForm:FormGroup = new FormGroup({});
  ngOnInit() {
    this.busForm = new FormGroup({
      date:new FormControl(null,Validators.required),
      source:new FormControl(null,Validators.required),
      destination:new FormControl(null,Validators.required)
    })
  }

  //select bus
  selectedBus:Bus = new Bus();
  
  selectBus(bus: Bus) {
    this.selectedBus = bus;
  }

  onSubmit() {
    this.selectedBus.source = this.busForm.get('source')?.value;
    this.selectedBus.destination = this.busForm.get('destination')?.value;
    this.selectedBus.date = this.busForm.get('date')?.value;
    this.service.setBus(this.selectedBus);
    this.router.navigate(['/select-bus']);
  }

  goToBook() {
    this.router.navigate(['/book']);
  }
}
