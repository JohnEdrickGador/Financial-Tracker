import {
  Component,
  EventEmitter,
  Input,
  Output,
  NgModule,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { FloatLabel } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { IftaLabelModule } from 'primeng/iftalabel';
import { TransactionService } from '../../services/transaction.service';
import { newTransaction, Transaction } from '../../models/transaction';

@Component({
  selector: 'transactions-form-modal',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
    FloatLabel,
    FormsModule,
    InputNumberModule,
    DatePickerModule,
    IftaLabelModule,
  ],
  templateUrl: './transactions-form-modal.component.html',
  styleUrl: './transactions-form-modal.component.css',
})
export class TransactionsFormModalComponent {
  constructor(private transactionService: TransactionService) {}

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  transactionType: string | null = null;
  accountType: string | null = null;
  bank: string | null = null;
  amount: number | null = null;
  transactionDate: string | null = null;
  description: string | null = null;

  transactionTypes: string[] = ['Deposit', 'Withdrawal'];
  accountTypes: string[] = ['Payroll', 'Savings'];
  banks: string[] = ['BPI'];

  openModal() {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  submitTransaction() {
    const transaction: newTransaction = {
      transaction_type: this.transactionType!,
      account_type: this.accountType!,
      bank: this.bank!,
      amount: this.amount!,
      transaction_date: this.transactionDate!,
      description: this.description!,
    };

    this.transactionService.createTransaction(transaction).subscribe({
      next: (data) => {
        console.log(`Transaction created successfully with ID ${data.id}`);

        const createdTransaction: Transaction = {
          id: data.id,
          amount: transaction.amount,
          description: transaction.description,
          bank_abbreviation: transaction.bank,
          account_type: transaction.account_type,
          transaction_type: transaction.transaction_type,
          transaction_date: transaction.transaction_date,
        };

        this.closeModal();
      },
      error: (err) => {
        console.log(`Failed to create transaction: ${err}`);
      },
    });
  }

  closeModal() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    console.log(`Modal closed`);
  }
}
