import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Clock, Play, Pause, Settings, Plus } from "lucide-react";

export default function Automations() {
  const automations = [
    {
      id: 1,
      name: "Daily CSV Report",
      description: "Convert daily sales CSV to JSON and send to API",
      schedule: "Daily at 9:00 AM",
      status: "active",
      lastRun: "2024-11-26 09:00",
      nextRun: "2024-11-27 09:00"
    },
    {
      id: 2,
      name: "Weekly Data Cleanup",
      description: "Clean and validate customer data weekly",
      schedule: "Weekly on Monday",
      status: "active",
      lastRun: "2024-11-25 10:00",
      nextRun: "2024-12-02 10:00"
    },
    {
      id: 3,
      name: "API Data Sync",
      description: "Sync external API data to internal database",
      schedule: "Every 2 hours",
      status: "paused",
      lastRun: "2024-11-26 14:00",
      nextRun: "Paused"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Automations</h1>
          <p className="text-muted-foreground">Create and manage automated data conversion workflows.</p>
        </div>

        <div className="mb-6">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Automation
          </Button>
        </div>

        <div className="grid gap-6">
          {automations.map((automation) => (
            <Card key={automation.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{automation.name}</CardTitle>
                    <CardDescription>{automation.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch checked={automation.status === "active"} />
                    <span className={`px-2 py-1 text-xs rounded ${
                      automation.status === "active" ? "bg-green-500 text-white" :
                      automation.status === "paused" ? "bg-yellow-500 text-white" :
                      "bg-gray-500 text-white"
                    }`}>
                      {automation.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Schedule</p>
                    <p className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      {automation.schedule}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Last Run</p>
                    <p>{automation.lastRun}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Next Run</p>
                    <p>{automation.nextRun}</p>
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Run Now
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Pause className="mr-2 h-4 w-4" />
                    {automation.status === "active" ? "Pause" : "Resume"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Automation Templates</CardTitle>
            <CardDescription>Quick start with pre-built automation templates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <h3 className="font-medium mb-2">Scheduled CSV Import</h3>
                <p className="text-sm text-muted-foreground">Automatically import CSV files at set intervals</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <h3 className="font-medium mb-2">API Data Pipeline</h3>
                <p className="text-sm text-muted-foreground">Fetch data from APIs and convert to your format</p>
              </div>
              <div className="p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                <h3 className="font-medium mb-2">File Watcher</h3>
                <p className="text-sm text-muted-foreground">Monitor directories and convert new files automatically</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}