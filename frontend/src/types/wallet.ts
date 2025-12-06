export interface Card {
  id: string;
  type: "visa" | "mastercard" | "amex";
  last4: string;
  expiry: string;
  cardHolder: string;
  balance: number;
  color: string;
}

export interface Transaction {
  id: string;
  type: "income" | "expense" | "transfer";
  amount: number;
  description: string;
  date: string;
  category: string;
  recipient?: string;
  status: "completed" | "pending" | "failed";
}

export interface Friend {
  id: string;
  name: string;
  username: string;
  avatar: string;
  lastTransaction?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  balance: number;
}
