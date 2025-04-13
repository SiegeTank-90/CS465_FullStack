import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trips';


@Injectable({
  providedIn: 'root'
})

export class TripDataService {


  constructor(private http: HttpClient) { }

  getTrips(): Observable<Trip[]> {
  let apiURL = 'http://localhost:3000/api/trips';

  console.log('Fetching trips from API...');
    return this.http.get<Trip[]>(apiURL);
    
  
  }
}