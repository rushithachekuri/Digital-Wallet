import { Layout } from "@/components/Layout";
import { mockFriends } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Search, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFriends = mockFriends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMoney = (friendName: string) => {
    toast({
      title: "Send Money",
      description: `Opening payment to ₹{friendName}`,
    });
  };

  const handleAddFriend = () => {
    toast({
      title: "Add Friend",
      description: "Friend request feature coming soon!",
    });
  };

  return (
    <Layout>
      <div className="p-6 md:p-8 pb-24 md:pb-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Friends & Contacts</h1>
            <p className="text-muted-foreground">Send money to your friends</p>
          </div>
          <Button onClick={handleAddFriend} className="gradient-primary border-0">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Friend
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="grid gap-4">
            {filteredFriends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-elevated transition-smooth"
              >
                <Avatar className="h-14 w-14">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{friend.name}</p>
                  <p className="text-sm text-muted-foreground">{friend.username}</p>
                  {friend.lastTransaction && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {friend.lastTransaction}
                    </p>
                  )}
                </div>

                <Button
                  onClick={() => handleSendMoney(friend.name)}
                  className="gradient-primary border-0"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </div>
            ))}
          </div>

          {filteredFriends.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No friends found</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Friends;
