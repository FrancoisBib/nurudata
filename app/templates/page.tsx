import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Star, Search } from "lucide-react";

export default function Templates() {
  const templates = [
    {
      id: 1,
      name: "CSV to JSON Converter",
      description: "Convert CSV files to JSON format with automatic type detection",
      category: "Data Conversion",
      downloads: 1234,
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: "Excel Data Cleaner",
      description: "Clean and standardize Excel data with validation rules",
      category: "Data Cleaning",
      downloads: 856,
      rating: 4.6,
      featured: false
    },
    {
      id: 3,
      name: "API Response Formatter",
      description: "Format API responses into structured data formats",
      category: "API Integration",
      downloads: 654,
      rating: 4.9,
      featured: true
    },
    {
      id: 4,
      name: "XML to Database",
      description: "Convert XML files to database-ready formats",
      category: "Database",
      downloads: 432,
      rating: 4.4,
      featured: false
    },
    {
      id: 5,
      name: "JSON Schema Validator",
      description: "Validate JSON data against custom schemas",
      category: "Validation",
      downloads: 789,
      rating: 4.7,
      featured: false
    },
    {
      id: 6,
      name: "Multi-format Merger",
      description: "Merge data from multiple formats into a single output",
      category: "Data Integration",
      downloads: 567,
      rating: 4.5,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Templates</h1>
          <p className="text-muted-foreground">Browse and use pre-built conversion templates to speed up your workflow.</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search templates..."
                className="pl-10 pr-4 py-2 w-full border rounded-md"
              />
            </div>
            <select className="p-2 border rounded-md">
              <option value="">All Categories</option>
              <option value="conversion">Data Conversion</option>
              <option value="cleaning">Data Cleaning</option>
              <option value="api">API Integration</option>
              <option value="database">Database</option>
              <option value="validation">Validation</option>
              <option value="integration">Data Integration</option>
            </select>
            <Button variant="outline">Create Template</Button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Featured Templates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.filter(t => t.featured).map((template) => (
              <Card key={template.id} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription>{template.category}</CardDescription>
                    </div>
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{template.downloads} downloads</span>
                    <span>★ {template.rating}</span>
                  </div>
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">All Templates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{template.downloads} downloads</span>
                    <span>★ {template.rating}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}