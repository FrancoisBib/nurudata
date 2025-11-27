import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "@/components/ui/upload";
import { FileText, Download, Settings } from "lucide-react";

export default function Convert() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Convert Data</h1>
          <p className="text-muted-foreground">Upload your files and convert them to different formats.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload Files</CardTitle>
                <CardDescription>Drag and drop or click to select files for conversion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">Drop your files here</p>
                  <p className="text-sm text-muted-foreground mb-4">or</p>
                  <Upload>
                    <Button>Choose Files</Button>
                  </Upload>
                  <p className="text-xs text-muted-foreground mt-4">
                    Supports CSV, JSON, XML, Excel, and more formats
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Conversion Settings</CardTitle>
                <CardDescription>Configure your conversion options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="input-format" className="text-sm font-medium">Input Format</label>
                    <select id="input-format" className="w-full p-2 border rounded">
                      <option value="">Select format</option>
                      <option value="csv">CSV</option>
                      <option value="json">JSON</option>
                      <option value="xml">XML</option>
                      <option value="excel">Excel</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="output-format" className="text-sm font-medium">Output Format</label>
                    <select id="output-format" className="w-full p-2 border rounded">
                      <option value="">Select format</option>
                      <option value="csv">CSV</option>
                      <option value="json">JSON</option>
                      <option value="xml">XML</option>
                      <option value="excel">Excel</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="headers" className="rounded" />
                  <label htmlFor="headers" className="text-sm">First row contains headers</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="validate" className="rounded" />
                  <label htmlFor="validate" className="text-sm">Validate data during conversion</label>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Start Conversion
                </Button>
                <Button variant="outline" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Advanced Options
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">CSV to JSON</span>
                    <Button variant="ghost" size="sm">Use</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Excel to CSV</span>
                    <Button variant="ghost" size="sm">Use</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">JSON to XML</span>
                    <Button variant="ghost" size="sm">Use</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}