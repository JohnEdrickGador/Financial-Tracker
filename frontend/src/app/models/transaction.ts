export interface Transaction {
  id: number;
  amount: number;
  description: string;
  bank_abbreviation: string;
  account_type: string;
  transaction_type: string;
  transaction_date: string;
}

export interface newTransaction {
  amount: number;
  description: string;
  bank: string;
  account_type: string;
  transaction_type: string;
  transaction_date: string;
}

export interface tableTransaction {
  amount: number;
  description: string;
  bank_abbreviation: string;
  account_type: string;
  transaction_type: string;
  transaction_date: string;
}
