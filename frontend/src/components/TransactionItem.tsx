import { ArrowDownLeft, ArrowUpRight, ArrowLeftRight } from "lucide-react";
import { Transaction } from "@/types/wallet";
import { cn } from "@/lib/utils";

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const getIcon = () => {
    switch (transaction.type) {
      case "income":
        return <ArrowDownLeft className="h-5 w-5" />;
      case "expense":
        return <ArrowUpRight className="h-5 w-5" />;
      case "transfer":
        return <ArrowLeftRight className="h-5 w-5" />;
    }
  };

  const getIconBgColor = () => {
    switch (transaction.type) {
      case "income":
        return "bg-success/10 text-success";
      case "expense":
        return "bg-destructive/10 text-destructive";
      case "transfer":
        return "bg-primary/10 text-primary";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-secondary/50 rounded-lg transition-smooth cursor-pointer">
      <div className={cn("p-3 rounded-full", getIconBgColor())}>
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground truncate">{transaction.description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{formatDate(transaction.date)}</span>
          {transaction.recipient && (
            <>
              <span>•</span>
              <span className="truncate">{transaction.recipient}</span>
            </>
          )}
        </div>
      </div>
      
      <div className="text-right">
        <p
          className={cn(
            "font-bold text-lg",
            transaction.type === "income" ? "text-success" : "text-foreground"
          )}
        >
          {transaction.amount > 0 ? "+" : ""}
          ₹{Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-xs text-muted-foreground capitalize">{transaction.status}</p>
      </div>
    </div>
  );
};
