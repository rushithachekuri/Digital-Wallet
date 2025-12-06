import { Layout } from "@/components/Layout";
import { BalanceCard } from "@/components/BalanceCard";
import { QuickActions } from "@/components/QuickActions";
import { TransactionItem } from "@/components/TransactionItem";
import { mockUser, mockTransactions } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const recentTransactions = mockTransactions.slice(0, 5);

  return (
    <Layout>
      <div className="p-6 md:p-8 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {mockUser.name.split(' ')[0]}!</h1>
          <p className="text-muted-foreground">Here's your financial overview</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <BalanceCard balance={mockUser.balance} />
          
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <QuickActions />
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Transactions</h2>
              <Button
                variant="ghost"
                onClick={() => navigate("/transactions")}
                className="text-primary hover:text-primary"
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-card rounded-xl shadow-card divide-y divide-border">
              {recentTransactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
