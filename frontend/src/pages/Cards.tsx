import { Layout } from "@/components/Layout";
import { CardItem } from "@/components/CardItem";
import { mockCards } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Cards = () => {
  const handleAddCard = () => {
    toast({
      title: "Add Card",
      description: "Card adding feature coming soon!",
    });
  };

  return (
    <Layout>
      <div className="p-6 md:p-8 pb-24 md:pb-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Cards</h1>
            <p className="text-muted-foreground">Manage your payment cards</p>
          </div>
          <Button onClick={handleAddCard} className="gradient-primary border-0">
            <Plus className="mr-2 h-4 w-4" />
            Add Card
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                onClick={() => {
                  toast({
                    title: "Card Selected",
                    description: `Selected ₹{card.type} ending in ₹{card.last4}`,
                  });
                }}
              />
            ))}
          </div>

          <div className="mt-8 p-6 bg-card rounded-xl shadow-card">
            <h3 className="text-lg font-bold mb-4">Total Card Balance</h3>
            <p className="text-3xl font-bold text-primary">
              ₹{mockCards.reduce((sum, card) => sum + card.balance, 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Across {mockCards.length} cards
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cards;
