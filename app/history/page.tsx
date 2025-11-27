import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, Trash2, Search } from "lucide-react";

export default function History() {
  const conversions = [
    {
      id: 1,
      name: "sales_data.csv",
      inputFormat: "CSV",
      outputFormat: "JSON",
      status: "completed",
      date: "2024-11-26",
      size: "2.3 MB"
    },
    {
      id: 2,
      name: "user_export.xlsx",
      inputFormat: "Excel",
      outputFormat: "CSV",
      status: "completed",
      date: "2024-11-25",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "api_response.json",
      inputFormat: "JSON",
      outputFormat: "XML",
      status: "failed",
      date: "2024-11-24",
      size: "456 KB"
    },
    {
      id: 4,
      name: "inventory.xml",
      inputFormat: "XML",
      outputFormat: "JSON",
      status: "completed",
      date: "2024-11-23",
      size: "789 KB"
    },
    {
      id: 5,
      name: "report_data.csv",
      inputFormat: "CSV",
      outputFormat: "Excel",
      status: "processing",
      date: "2024-11-22",
      size: "3.1 MB"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <span className="px-2 py-1 text-xs bg-green-500 text-white rounded">Completed</span>;
      case "failed":
        return <span className="px-2 py-1 text-xs bg-red-500 text-white rounded">Failed</span>;
      case "processing":
        return <span className="px-2 py-1 text-xs bg-yellow-500 text-white rounded">Processing</span>;
      default:
        return <span className="px-2 py-1 text-xs border rounded">Unknown</span>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Conversion History</h1>
          <p className="text-muted-foreground">View and manage your past data conversions.</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search conversions..."
                className="pl-10 pr-4 py-2 w-full border rounded-md"
              />
            </div>
            <select className="p-2 border rounded-md">
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
              <option value="processing">Processing</option>
            </select>
            <select className="p-2 border rounded-md">
              <option value="">All Formats</option>
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="xml">XML</option>
              <option value="excel">Excel</option>
            </select>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Conversions</CardTitle>
            <CardDescription>A list of your data conversion activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversions.map((conversion) => (
                <div key={conversion.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-medium">{conversion.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {conversion.inputFormat} → {conversion.outputFormat} • {conversion.size} • {conversion.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    {getStatusBadge(conversion.status)}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {conversion.status === "completed" && (
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}