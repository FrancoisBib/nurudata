import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Book, Mail } from "lucide-react";

export default function Help() {
  const faqs = [
    {
      question: "How do I upload files for conversion?",
      answer: "Click the 'Choose Files' button on the Convert page or drag and drop files into the upload area. Supported formats include CSV, JSON, XML, and Excel."
    },
    {
      question: "What file formats are supported?",
      answer: "We support CSV, JSON, XML, Excel (.xlsx, .xls), and many other common data formats. Check the conversion settings for the complete list."
    },
    {
      question: "How do I create an automation?",
      answer: "Go to the Automations page and click 'Create Automation'. Choose a template or build a custom workflow with triggers and actions."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, all data is encrypted in transit and at rest. Files are automatically deleted after 30 days unless you choose to keep them."
    },
    {
      question: "How do I use the API?",
      answer: "Visit the API page for documentation and examples. You'll need an API key from your settings to authenticate requests."
    },
    {
      question: "What are templates?",
      answer: "Templates are pre-built conversion workflows that you can use or customize. Browse them on the Templates page."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-muted-foreground">Find answers to common questions and get support.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <HelpCircle className="h-8 w-8 mb-2" />
              <CardTitle>FAQ</CardTitle>
              <CardDescription>Find quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Browse our frequently asked questions below or search for specific topics.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MessageCircle className="h-8 w-8 mb-2" />
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Need personalized help? Our team is here to assist you.</p>
              <Button variant="outline" className="mt-2">Contact Us</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Book className="h-8 w-8 mb-2" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Learn more about using Nurudata</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Detailed guides and tutorials for all features.</p>
              <Button variant="outline" className="mt-2">View Docs</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Common questions and answers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded p-4">
                  <h3 className="font-medium mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>Can't find what you're looking for? Get in touch with us.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-2">Send us an email and we'll get back to you within 24 hours.</p>
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  support@nurudata.com
                </Button>
              </div>
              <div>
                <h3 className="font-medium mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-2">Chat with our support team in real-time during business hours.</p>
                <Button>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Chat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}