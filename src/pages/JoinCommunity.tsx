import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Zap, BrainCircuit, Shield, Sparkles } from "lucide-react";

const JoinCommunity = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    industry: "",
    company: "",
    experience: "",
    interests: [] as string[],
    motivation: "",
  });

  const interestOptions = [
    "AI & Machine Learning",
    "Cybersecurity",
    "Data Science",
    "Ethical AI",
    "Entrepreneurship",
    "Public Sector Tech",
    "Career Development",
    "Mentoring",
  ];

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to RepresentAI!",
      description: "Your application has been received. We'll be in touch soon.",
    });
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      industry: "",
      company: "",
      experience: "",
      interests: [],
      motivation: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero-bg py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Join the Movement
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Become Part of <span className="text-secondary">RepresentAI</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Join a growing community of people shaping the future of AI, security and technology
            — with inclusion at the centre.
          </p>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="border-y border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: BrainCircuit, text: "Free AI & Security Training" },
              { icon: Shield, text: "Safe & Inclusive Space" },
              { icon: Zap, text: "Events, Hackathons & More" },
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

                {/* Experience Level */}
                <div>
                  <Label className="text-foreground font-medium">Experience with AI / Tech *</Label>
                  <Select
                    value={form.experience}
                    onValueChange={(val) => setForm({ ...form, experience: val })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner — Just getting started</SelectItem>
                      <SelectItem value="intermediate">Intermediate — Some experience</SelectItem>
                      <SelectItem value="advanced">Advanced — Working in the field</SelectItem>
                      <SelectItem value="expert">Expert — Leading or teaching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interests */}
                <div>
                  <Label className="text-foreground font-medium">What are you interested in?</Label>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    {interestOptions.map((interest) => (
                      <label key={interest} className="flex items-center gap-2.5 cursor-pointer">
                        <Checkbox
                          checked={form.interests.includes(interest)}
                          onCheckedChange={() => toggleInterest(interest)}
                        />
                        <span className="text-sm text-muted-foreground">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <Label className="text-foreground font-medium">Why do you want to join RepresentAI? *</Label>
                  <Textarea
                    className="mt-2"
                    rows={4}
                    value={form.motivation}
                    onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                    placeholder="Tell us a bit about yourself and what you're hoping to get from the community..."
                    required
                  />
                </div>

                <Button type="submit" className="btn-gradient rounded-full px-10 py-6 text-base font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join the Community
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

export default JoinCommunity;
