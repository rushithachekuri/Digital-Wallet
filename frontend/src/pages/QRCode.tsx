import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, Scan, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const QRCodePage = () => {
  const [amount, setAmount] = useState("");

  const handleGenerateQR = () => {
    if (!amount) {
      toast({
        title: "Amount Required",
        description: "Please enter an amount to generate QR code",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "QR Code Generated",
      description: `QR code for ₹${amount} has been generated`,
    });
  };

  const handleScanQR = () => {
    toast({
      title: "Scanner Opening",
      description: "Camera access required for QR scanning",
    });
  };

  return (
    <Layout>
      <div className="p-6 md:p-8 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">QR Payments</h1>
          <p className="text-muted-foreground">Generate or scan QR codes for payments</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="generate" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generate">
                <QrCode className="mr-2 h-4 w-4" />
                Generate
              </TabsTrigger>
              <TabsTrigger value="scan">
                <Scan className="mr-2 h-4 w-4" />
                Scan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="generate" className="mt-6">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto w-64 h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <QrCode className="h-32 w-32 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enter amount below to generate QR code
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Payment Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          ₹
                        </span>
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="pl-7 text-lg"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={handleGenerateQR}
                        className="flex-1 gradient-primary border-0"
                      >
                        Generate QR Code
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="scan" className="mt-6">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto w-full max-w-md aspect-square bg-muted rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                      <Scan className="h-32 w-32 text-muted-foreground animate-pulse" />
                      <div className="absolute inset-0 border-4 border-primary rounded-lg opacity-50"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Position the QR code within the frame
                    </p>
                  </div>

                  <Button
                    onClick={handleScanQR}
                    className="w-full gradient-primary border-0"
                  >
                    <Scan className="mr-2 h-4 w-4" />
                    Activate Scanner
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default QRCodePage;
