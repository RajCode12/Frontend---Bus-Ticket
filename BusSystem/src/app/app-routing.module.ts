import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './bus/add-record/add-record.component';
import { ListRecordsComponent } from './bus/list-records/list-records.component';
import { TicketComponent } from './bus/ticket/ticket.component';
import { PaymentComponent } from './bus/payment/payment.component';
import { SelectBusComponent } from './bus/select-bus/select-bus.component';

const routes: Routes = [
  {path: 'book', component : AddRecordComponent},
  {path: 'show', component : ListRecordsComponent},
  {path: 'show-ticket', component : TicketComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'select-bus', component: SelectBusComponent},
  {path: '', redirectTo: 'book', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
