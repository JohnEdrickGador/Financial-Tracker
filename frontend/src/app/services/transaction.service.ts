import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { newTransaction, Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080/transactions';
  private transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  transactions$ = this.transactionsSubject.asObservable();

  constructor(private http: HttpClient) {}

  setInitialTransactions(list: Transaction[]) {
    this.transactionsSubject.next(list);
  }

  getTransactions(): Observable<{ result: Transaction[] }> {
    return this.http.get<{ result: Transaction[] }>(this.apiUrl + '/list');
  }

  deleteTransaction(id: number): Observable<Object> {
    const updated = this.transactionsSubject.value.filter((t) => t.id !== id);
    this.transactionsSubject.next(updated);
    console.log(`Deleted transaction with ID: ${id}`);
    return this.http.delete(this.apiUrl + '/delete' + `/${id}`);
  }

  createTransaction(transaction: newTransaction): Observable<any> {
    var reqBody = {
      amount: transaction.amount,
      description: transaction.description,
      bank: transaction.bank,
      account_type: transaction.account_type,
      transaction_type: transaction.transaction_type,
      transaction_date: transaction.transaction_date,
    };

    return this.http
      .post<{ message: string; transaction: Transaction }>(
        this.apiUrl + '/new',
        reqBody
      )
      .pipe(
        tap((response) => {
          const newTransaction = response.transaction;
          const current = this.transactionsSubject.value;
          this.transactionsSubject.next([...current, newTransaction]);
          console.log('Added new transaction: ', newTransaction);
        })
      );
  }
}
