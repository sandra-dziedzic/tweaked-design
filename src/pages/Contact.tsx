import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Handshake, Sparkles } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    industry: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ firstName: "", lastName: "", email: "", jobTitle: "", industry: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground"><span className="text-secondary">Contact</span> Us</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. If you have questions, feedback, collaboration ideas, or media enquiries, please reach out using the form below.
          </p>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="border-y border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: MessageSquare, text: "Questions & Feedback" },
              { icon: Handshake, text: "Partnerships & Collaborations" },
              { icon: Mail, text: "Media & Press Enquiries" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(230, 80%, 55%), hsl(270, 60%, 55%))",
                  }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-card shadow-lg border-border overflow-hidden">
            <div
              className="h-1"
              style={{
                background:
                  "linear-gradient(90deg, hsl(230, 80%, 55%), hsl(270, 60%, 55%), hsl(230, 80%, 55%))",
              }}
            />
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label className="text-foreground font-medium">Name *</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Input
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        placeholder="First"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        placeholder="Last"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label className="text-foreground font-medium">Email *</Label>
                  <Input
                    type="email"
                    className="mt-2"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                {/* Job Title */}
                <div>
                  <Label className="text-foreground font-medium">Job Title *</Label>
                  <Input
                    className="mt-2"
                    value={form.jobTitle}
                    onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                    required
                  />
                </div>

                {/* Industry */}
                <div>
                  <Label className="text-foreground font-medium">Industry *</Label>
                  <Input
                    className="mt-2"
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <Label className="text-foreground font-medium">Company *</Label>
                  <Input
                    className="mt-2"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <Label className="text-foreground font-medium">How can RepresentAI best support you? *</Label>
                  <Textarea
                    className="mt-2"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="btn-gradient rounded-full px-10 py-6 text-base font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
