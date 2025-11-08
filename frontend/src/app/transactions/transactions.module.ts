import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, TransactionsComponent],
  exports: [TransactionsComponent],
})
export class TransactionsModule {}
