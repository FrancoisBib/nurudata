import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Download, Calendar, DollarSign } from "lucide-react";

export default function Billing() {
  const invoices = [
    { id: "INV-001", date: "2024-11-01", amount: "$29.99", status: "paid" },
    { id: "INV-002", date: "2024-10-01", amount: "$29.99", status: "paid" },
    { id: "INV-003", date: "2024-09-01", amount: "$29.99", status: "paid" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Billing</h1>
          <p className="text-muted-foreground">Manage your subscription and billing information.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Pro Plan</div>
              <p className="text-xs text-muted-foreground">$29.99/month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Dec 1, 2024</div>
              <p className="text-xs text-muted-foreground">7 days remaining</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usage This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,450</div>
              <p className="text-xs text-muted-foreground">of 10,000 conversions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Plan Details</CardTitle>
              <CardDescription>Your current subscription features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Monthly conversions</span>
                  <span className="font-medium">10,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>API calls</span>
                  <span className="font-medium">100,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Storage</span>
                  <span className="font-medium">100 GB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Priority support</span>
                  <span className="font-medium">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Advanced templates</span>
                  <span className="font-medium">✓</span>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <Button className="w-full">Upgrade Plan</Button>
                <Button variant="outline" className="w-full">Change Payment Method</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Manage your payment information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded">
                <div className="flex items-center space-x-4">
                  <CreditCard className="h-8 w-8" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/26</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs bg-gray-500 text-white rounded">Primary</span>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Update Payment Method
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>View and download your invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border rounded">
                  <div>
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-sm text-muted-foreground">{invoice.date}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">{invoice.amount}</span>
                    <span className={`px-2 py-1 text-xs rounded ${
                      invoice.status === "paid" ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                    }`}>
                      {invoice.status}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}