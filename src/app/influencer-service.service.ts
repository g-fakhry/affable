import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Influencer } from './Influencer';

@Injectable({
  providedIn: 'root'
})
export class InfluencerDataService {

  private apiUrl = 'assets/data/mock-influencers.json';

  constructor(private http: HttpClient) { }

  getInfluencers(): Observable<Influencer[]> {
    return this.http.get<Influencer[]>(this.apiUrl);
  }
}
