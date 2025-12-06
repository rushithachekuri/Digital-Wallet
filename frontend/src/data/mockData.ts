import { Card, Transaction, Friend, User } from "@/types/wallet";

export const mockUser: User = {
  id: "1",
  name: "Rushitha Chekuri",
  email: "Rushithachekuri@email.com",
  phone: "+91 1234567890",

  // ✅ SAFE PLACEHOLDER AVATAR (change later if you want)
  // Later: just replace this link with your own direct image URL
  // like: "https://your-domain.com/rushitha.jpg"
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOoYGH9ITN7X08BwXvGbOGX0iIKi9NQOGVA&s",

  balance: 12458.5,
};

export const mockCards: Card[] = [
  {
    id: "1",
    type: "visa",
    last4: "4242",
    expiry: "12/25",
    cardHolder: "RUSHITHA CHEKURI",
    balance: 5230.0,
    color: "gradient-card",
  },
  {
    id: "2",
    type: "mastercard",
    last4: "8888",
    expiry: "09/26",
    cardHolder: "RUSHITHA CHEKURI",
    balance: 3150.25,
    color: "gradient-success",
  },
  {
    id: "3",
    type: "amex",
    last4: "1234",
    expiry: "03/27",
    cardHolder: "RUSHITHA CHEKURI",
    balance: 4078.25,
    color: "gradient-primary",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "income",
    amount: 2500.0,
    description: "Monthly Salary",
    date: "2025-01-15",
    category: "Salary",
    status: "completed",
  },
  {
    id: "2",
    type: "expense",
    amount: -85.5,
    description: "Grocery Shopping",
    date: "2025-01-14",
    category: "Food",
    recipient: "Whole Foods Market",
    status: "completed",
  },
  {
    id: "3",
    type: "transfer",
    amount: -200.0,
    description: "Transfer to Sarah",
    date: "2025-01-14",
    category: "Transfer",
    recipient: "Sarah Williams",
    status: "completed",
  },
  {
    id: "4",
    type: "expense",
    amount: -45.99,
    description: "Netflix Subscription",
    date: "2025-01-13",
    category: "Entertainment",
    recipient: "Netflix",
    status: "completed",
  },
  {
    id: "5",
    type: "income",
    amount: 150.0,
    description: "Freelance Project",
    date: "2025-01-12",
    category: "Income",
    status: "completed",
  },
  {
    id: "6",
    type: "expense",
    amount: -120.0,
    description: "Electric Bill",
    date: "2025-01-11",
    category: "Bills",
    recipient: "City Power",
    status: "completed",
  },
  {
    id: "7",
    type: "transfer",
    amount: -50.0,
    description: "Coffee with Mike",
    date: "2025-01-10",
    category: "Transfer",
    recipient: "Mike Chen",
    status: "pending",
  },
  {
    id: "8",
    type: "expense",
    amount: -299.99,
    description: "New Headphones",
    date: "2025-01-09",
    category: "Shopping",
    recipient: "Amazon",
    status: "completed",
  },
];

export const mockFriends: Friend[] = [
  {
    id: "1",
    name: "Vidya Suryadevara",
    username: "@vidya_suryadevara",

    avatar: "https://i.pinimg.com/originals/92/3e/60/923e60892f86bf47bb61badb18bed1a7.png",

    lastTransaction: "Received ₹200",
  },
  {
    id: "2",
    name: "Varshini Bikkina",
    username: "@varshini_bikkina",
    avatar: "https://i.pinimg.com/736x/06/6f/53/066f53fcf3feb3074bbfb61a0263193b.jpg",
    lastTransaction: "Sent ₹50",
  },
  {
    id: "3",
    name: "Sruthi Annam",
    username: "@sruthi_annam",
    avatar: "data:image/jpeg;base64,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",
    lastTransaction: "Received ₹75",
  },
  {
    id: "4",
    name: "Pranavi Musunuru",
    username: "@pranavi_musunuru",
    avatar: "https://i.pinimg.com/736x/7e/5d/05/7e5d05d7ebeda2ed8968c0231ac06e62.jpg",
    lastTransaction: "Sent ₹120",
  },
  {
    id: "5",
    name: "Vyshnavi Vakkalagada",
    username: "@vyshnavi_vakkalagada",
    avatar: "https://i.pinimg.com/736x/1b/65/32/1b653280b8dfa977ad3b17155c994bdc.jpg",
    lastTransaction: "Received ₹40",
  },
];
