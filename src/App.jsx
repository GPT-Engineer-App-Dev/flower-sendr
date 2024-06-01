import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select.jsx";
import { Label } from "@/components/ui/label.jsx";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert.jsx";
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastClose, ToastViewport } from "@/components/ui/toast.jsx";
import { useToast } from "@/components/ui/use-toast.js";
import "./App.css";

function App() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    occasion: "valentine",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Your message has been sent successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold">Flower Bliss</h1>
        <p className="mt-4 text-xl">Delivering Love and Joy with Every Bouquet</p>
      </header>
      <main className="container mx-auto px-4 py-10">
        <Card className="bg-white text-black">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">Send Flowers</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="occasion">Occasion</Label>
                <Select id="occasion" name="occasion" value={formData.occasion} onValueChange={(value) => setFormData((prevData) => ({ ...prevData, occasion: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valentine">Valentine's Day</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                Send Flowers
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <footer className="py-10 text-center">
        <p>&copy; 2023 Flower Bliss. All rights reserved.</p>
      </footer>
      <ToastProvider>
        <ToastViewport />
      </ToastProvider>
    </div>
  );
}

export default App;
