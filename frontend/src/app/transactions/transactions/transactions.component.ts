import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { NgFor, NgIf } from '@angular/common';
import { TransactionsFormModalComponent } from '../transactions-form-modal/transactions-form-modal.component';

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
export class TransactionsComponent {
  Transactions = [
    { Type: 'Deposit', Amount: 1000, Description: 'Income', Account: 'BPI' },
    { Type: 'Deposit', Amount: 1000, Description: 'Income', Account: 'BPI' },
    { Type: 'Deposit', Amount: 1000, Description: 'Income', Account: 'BPI' },
  ];

  selectedMonth = undefined;
  selectedYear = undefined;

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
  cols = ['Type', 'Amount', 'Description', 'Account', 'Transaction Date'];
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
