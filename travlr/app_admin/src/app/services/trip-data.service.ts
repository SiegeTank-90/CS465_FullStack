import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Trip } from '../models/trips';


@Injectable({
  providedIn: 'root'
})

export class TripDataService {


  constructor(private http: HttpClient) { }
    url = 'http://localhost:3000/api/trips';
  

  getTrips() : Observable<Trip[]> {
    console.log('Fetching trips from API...');
    
    return this.http.get<Trip[]>(this.url);

  }

  addTrip(formData: Trip): Observable<Trip> {
    //console.long('Inside TripDataService addTrip(form) method...');

    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    //console.long('Inside TripDataService getTrip() singular method...');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    //console.long('Inside TripDataService updateTrip(form) method...');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

    
    
  
  
  
}