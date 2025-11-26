export interface Transaction {
  id: number;
  amount: number;
  description: string;
  bank_id: number;
  account_type: string;
  transaction_type: string;
  transaction_date: string;
}
