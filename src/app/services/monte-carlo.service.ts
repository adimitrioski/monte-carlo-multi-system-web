import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MonteCarloResult} from '../models/monte-carlo-result';
import {MonteCarloRequest} from '../models/monte-carlo-request';

@Injectable({
  providedIn: 'root'
})
export class MonteCarloService {

  private monteCarloUrl = 'http://localhost:9080/api/monte_carlo';

  constructor(private httpClient: HttpClient) { }

  runMonteCarlo(
    monteCarloRequest: MonteCarloRequest,
    runOn: string,
  ): Observable<MonteCarloResult> {
    const url = `${this.monteCarloUrl}/${runOn.toLowerCase()}`;
    return this.httpClient.post<MonteCarloResult>(url, monteCarloRequest);
  }
}
