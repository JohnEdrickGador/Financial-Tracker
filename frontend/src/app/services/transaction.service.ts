import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<{ result: Transaction[] }> {
    return this.http.get<{ result: Transaction[] }>(this.apiUrl + '/list');
  }

  deleteTransaction(id: number): Observable<Object> {
    console.log(`Deleted transaction with ID: ${id}`);
    return this.http.delete(this.apiUrl + '/delete' + `/${id}`);
  }
}
