import { Layout } from "@/components/Layout";
import { TransactionItem } from "@/components/TransactionItem";
import { mockTransactions } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTransactions = mockTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.recipient?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-6 md:p-8 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Transactions</h1>
          <p className="text-muted-foreground">View and manage your transaction history</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="bg-card rounded-xl shadow-card divide-y divide-border">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
              ))
            ) : (
              <div className="p-12 text-center">
                <p className="text-muted-foreground">No transactions found</p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-xl shadow-card">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Income</p>
              <p className="text-2xl font-bold text-success">
                ₹{mockTransactions
                  .filter((t) => t.type === "income")
                  .reduce((sum, t) => sum + t.amount, 0)
                  .toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Expenses</p>
              <p className="text-2xl font-bold text-destructive">
                ₹{Math.abs(
                  mockTransactions
                    .filter((t) => t.type === "expense")
                    .reduce((sum, t) => sum + t.amount, 0)
                ).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Net Flow</p>
              <p className="text-2xl font-bold text-foreground">
                ₹{mockTransactions
                  .reduce((sum, t) => sum + t.amount, 0)
                  .toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
