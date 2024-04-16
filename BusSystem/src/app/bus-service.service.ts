import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {
  private busId : any;
  private pnr : any;
  private bus = new Bus();

  private baseURL = "http://localhost:8080/api/v1/records";

  constructor(private http: HttpClient) {}

  addRecord(bus: Bus): Observable<Object> {
    return this.http.post(`${this.baseURL}`, bus);
  }

  getRecord(): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${this.baseURL}`);
  }

  getBusBooking(id:number):Observable<Bus>{
    return this.http.get<Bus>(`http://localhost:8080/api/v1/bus/${id}`);
  }

  addPassenger(passenger : Passenger) {
    return this.http.post(`http://localhost:8080/api/v1/passengers`, passenger);
  }

  getPassengerByPnr(pnr:number):Observable<Passenger[]> {
    return this.http.get<Passenger[]>(`http://localhost:8080/api/v1/pass/${pnr}`);
  }

  getPnrNumber() : any {
    return this.pnr;
  }
  setPnrNumber(pnr: any): void {
    this.pnr = pnr;
  }

  getSeatNumber() : any{
    return this.busId;
  }
  setSeatNumber(busId: any): void {
    this.busId = busId;
  }

  getBus() : any {
    return this.bus;
  }

  setBus(bus: any) : void {
    this.bus = bus;
  }
}
