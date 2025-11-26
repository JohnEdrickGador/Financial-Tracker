import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { NgFor, NgIf } from '@angular/common';
import { TransactionsFormModalComponent } from '../transactions-form-modal/transactions-form-modal.component';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-transactions',
  imports: [
    Select,
    FormsModule,
    ButtonModule,
    TableModule,
    NgFor,
    NgIf,
    TransactionsFormModalComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
  constructor(private transactionService: TransactionService) {}
  selectedMonth = undefined;
  selectedYear = undefined;
  transactions: Transaction[] = [];
  cols: Column[] = [];
  // cols = [
  //   'Transaction Type',
  //   'Amount',
  //   'Description',
  //   'Bank',
  //   'Account',
  //   'Transaction Date',
  // ];

  ngOnInit(): void {
    this.loadTransactions();
    this.cols = [
      { field: 'transaction_type', header: 'Type' },
      { field: 'amount', header: 'Amount' },
      { field: 'description', header: 'Description' },
      { field: 'bank_abbreviation', header: 'Bank' },
      { field: 'account_type', header: 'Account' },
      { field: 'transaction_date', header: 'Transaction Date' },
    ];
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data.result;
        console.log('Loaded data:', this.transactions);
      },
      error: (err) => {
        console.error('Failed to load transactions: ', err);
      },
    });
  }

  deleteTransaction(transaction: Transaction): void {
    this.transactionService.deleteTransaction(transaction.id).subscribe({
      next: () => {
        console.log(`Deleted transaction with ID: ${transaction.id}`);
        this.transactions = this.transactions.filter(
          (t) => t.id !== transaction.id
        );
      },
      error: (err) => {
        console.log(`Failed to delete transaction:  ${err}`);
      },
    });
  }

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years = [2024, 2025];
  showFilters: boolean = false;
  showTransactionsModal: boolean = false;

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  openTransactionsModal() {
    this.showTransactionsModal = true;
    console.log(`Modal Open: ${this.showTransactionsModal}`);
  }

  closeTransactionsModal() {
    this.showTransactionsModal = false;
  }
}
