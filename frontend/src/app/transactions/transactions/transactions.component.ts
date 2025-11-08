import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [Select, FormsModule, ButtonModule, TableModule, NgFor, NgIf],
  standalone: true,
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
  showFilters = false;

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
