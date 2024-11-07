import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${baseCurrency}`);
  }
}