import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BalanceCardProps {
  balance: number;
}

export const BalanceCard = ({ balance }: BalanceCardProps) => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <Card className="gradient-card p-6 shadow-elevated border-0 text-primary-foreground">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-primary-foreground/80 text-sm font-medium mb-1">
            Total Balance
          </p>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold">
              {showBalance ? ` ₹ ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : "••••••"}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBalance(!showBalance)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {showBalance ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-success/20 px-3 py-1.5 rounded-full">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-semibold">+12.5%</span>
        </div>
      </div>
      
      <div className="flex gap-3 pt-4 border-t border-primary-foreground/20">
        <div className="flex-1">
          <p className="text-primary-foreground/70 text-xs mb-1">Income</p>
          <p className="text-lg font-semibold"> ₹2,650</p>
        </div>
        <div className="flex-1">
          <p className="text-primary-foreground/70 text-xs mb-1">Expenses</p>
          <p className="text-lg font-semibold"> ₹1,231</p>
        </div>
      </div>
    </Card>
  );
};
