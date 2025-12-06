import { CreditCard } from "lucide-react";
import { Card } from "@/types/wallet";
import { cn } from "@/lib/utils";

interface CardItemProps {
  card: Card;
  onClick?: () => void;
}

export const CardItem = ({ card, onClick }: CardItemProps) => {
  const getCardIcon = () => {
    switch (card.type) {
      case "visa":
        return "VISA";
      case "mastercard":
        return "Mastercard";
      case "amex":
        return "AMEX";
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative p-6 rounded-2xl shadow-card cursor-pointer transition-smooth hover:shadow-elevated hover:scale-[1.02]",
        card.color
      )}
    >
      <div className="flex justify-between items-start mb-8">
        <CreditCard className="h-10 w-10 text-primary-foreground opacity-80" />
        <span className="text-primary-foreground font-bold text-lg tracking-wider">
          {getCardIcon()}
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-primary-foreground text-2xl font-mono tracking-wider">
            •••• •••• •••• {card.last4}
          </span>
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-primary-foreground/70 text-xs mb-1">Card Holder</p>
            <p className="text-primary-foreground font-semibold text-sm">{card.cardHolder}</p>
          </div>
          <div className="text-right">
            <p className="text-primary-foreground/70 text-xs mb-1">Expires</p>
            <p className="text-primary-foreground font-semibold text-sm">{card.expiry}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-primary-foreground/20">
        <p className="text-primary-foreground/70 text-xs mb-1">Balance</p>
        <p className="text-primary-foreground text-xl font-bold">
          ₹{card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
};
