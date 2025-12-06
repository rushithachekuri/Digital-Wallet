import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Wallet, CreditCard, Clock, QrCode, Users, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: "/", icon: Wallet, label: "Dashboard" },
  { to: "/cards", icon: CreditCard, label: "Cards" },
  { to: "/transactions", icon: Clock, label: "Transactions" },
  { to: "/qr-code", icon: QrCode, label: "QR Code" },
  { to: "/friends", icon: Users, label: "Friends" },
  { to: "/profile", icon: User, label: "Profile" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card shadow-card">
        <div className="p-6">
          <div className="flex items-center gap-2 gradient-primary rounded-lg px-4 py-3">
            <Wallet className="h-6 w-6 text-primary-foreground" />
            <span className="font-bold text-lg text-primary-foreground">DigiPay</span>
          </div>
        </div>
        
        <nav className="flex-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-smooth text-muted-foreground hover:bg-secondary hover:text-foreground",
                  isActive && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-elevated z-50">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-smooth text-muted-foreground",
                  isActive && "text-primary"
                )
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};
