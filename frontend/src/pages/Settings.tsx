import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Bell, Lock, CreditCard, Mail, Shield, LogOut } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <Layout>
      <div className="p-6 md:p-8 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your app preferences</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifs" className="cursor-pointer">
                  Push Notifications
                </Label>
                <Switch id="push-notifs" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifs" className="cursor-pointer">
                  Email Notifications
                </Label>
                <Switch id="email-notifs" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="transaction-alerts" className="cursor-pointer">
                  Transaction Alerts
                </Label>
                <Switch id="transaction-alerts" defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="two-factor" className="cursor-pointer">
                  Two-Factor Authentication
                </Label>
                <Switch id="two-factor" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="biometric" className="cursor-pointer">
                  Biometric Login
                </Label>
                <Switch id="biometric" defaultChecked />
              </div>
              <Button variant="outline" className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Change Password
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-save" className="cursor-pointer">
                  Auto-save Receipts
                </Label>
                <Switch id="auto-save" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="quick-pay" className="cursor-pointer">
                  Quick Pay Enabled
                </Label>
                <Switch id="quick-pay" defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Communication
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="marketing" className="cursor-pointer">
                  Marketing Emails
                </Label>
                <Switch id="marketing" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="updates" className="cursor-pointer">
                  Product Updates
                </Label>
                <Switch id="updates" defaultChecked />
              </div>
            </div>
          </Card>

          <Button
            variant="destructive"
            className="w-full"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
