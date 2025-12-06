import { Layout } from "@/components/Layout";
import { mockUser } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Camera, Save } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully",
    });
  };

  return (
    <Layout>
      <div className="p-6 md:p-8 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your personal information</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card className="p-8">
            <div className="flex flex-col items-center mb-8">
              <div className="relative group">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                  <AvatarFallback className="text-3xl">
                    {mockUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <Camera className="h-8 w-8 text-white" />
                </button>
              </div>
              <h2 className="text-2xl font-bold mt-4">{mockUser.name}</h2>
              <p className="text-muted-foreground">{mockUser.email}</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue={mockUser.name.split(' ')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    defaultValue={mockUser.name.split(' ')[1]}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={mockUser.email}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue={mockUser.phone}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your address"
                />
              </div>

              <Button
                onClick={handleSaveProfile}
                className="w-full gradient-primary border-0"
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Account Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="text-lg font-semibold">Jan 2024</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Transactions</p>
                <p className="text-lg font-semibold">247</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Connected Cards</p>
                <p className="text-lg font-semibold">3</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Friends</p>
                <p className="text-lg font-semibold">12</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
