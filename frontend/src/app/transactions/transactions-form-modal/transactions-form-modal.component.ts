import {
  Component,
  EventEmitter,
  Input,
  Output,
  NgModule,
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
  banks: string[] = ['Bank 1', 'Bank 2', 'Bank 3'];

  openModal() {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }

  closeModal() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    console.log(`Modal closed`);
  }
}
