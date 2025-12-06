import { Send, Download, QrCode, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    { icon: Send, label: "Send", onClick: () => navigate("/friends") },
    { icon: Download, label: "Request", onClick: () => navigate("/qr-code") },
    { icon: QrCode, label: "QR Pay", onClick: () => navigate("/qr-code") },
    { icon: Plus, label: "Add Card", onClick: () => navigate("/cards") },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          onClick={action.onClick}
          className="flex flex-col items-center gap-2 h-auto py-4 hover:shadow-card transition-smooth"
        >
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <action.icon className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium">{action.label}</span>
        </Button>
      ))}
    </div>
  );
};
