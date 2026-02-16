import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, GraduationCap, CalendarDays, Sparkles, Users, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-ai.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import PartnersCarousel from "@/components/PartnersCarousel";
import EventPhotosCarousel from "@/components/EventPhotosCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - Full Background Image */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        <div className="relative z-10 w-full flex items-center min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 py-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Welcome To Your <span className="text-secondary">AI Community</span>
            </h1>
            <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              RepresentAI is a community-led initiative helping people upskill and build careers in AI and security
              while strengthening connection, and driving positive changes in work and society.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/join">
                <Button className="btn-gradient rounded-full px-8 py-6 text-base font-semibold">Join</Button>
              </Link>
              <Link to="/about">
                <Button className="rounded-full px-8 py-6 text-base font-semibold bg-white text-primary hover:bg-white/90">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Row 
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border card-hover">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Newspaper className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI News</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Curated updates on emerging tech, regulatory changes, and real-world AI applications.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border card-hover">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Training</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Free online training designed for real business use — from core concepts to responsible implementation.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border card-hover">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">AI Events</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Expert-led workshops, panels, and networking sessions exploring the future of AI.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Mission Statement */}
      <section className="py-16 relative overflow-hidden gradient-section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Future of AI in Your Hands</h2>
          {/* <p className="mt-4 text-muted-foreground text-lg">Inclusive. Accessible. Community-Driven.</p>*/}

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, hsl(230, 80%, 55%), hsl(270, 60%, 55%))" }}
              >
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Community-Led</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Our agenda is shaped by real needs and lived experience, not sponsors or trends.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, hsl(230, 80%, 55%), hsl(270, 60%, 55%))" }}
              >
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Inclusive & Intersectional</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Creating access, opportunity, and visibility for underrepresented groups across industries.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, hsl(230, 80%, 55%), hsl(270, 60%, 55%))" }}
              >
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Free & Accessible</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Over 1,500 people accessed free AI training in 2025, removing barriers to entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Detail Columns 
      <section className="gradient-wave py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg">AI News & Insights</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Stay ahead of the curve with curated AI news that matters. We filter the noise to deliver concise
                updates on emerging technologies, regulatory changes, major AI product launches, and real-world business
                applications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Practical Training</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Build practical AI capability with free online training designed for real business use. We share courses
                from various vendors to focus on applied skills — from understanding core AI concepts to implementing AI
                responsibly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CalendarDays className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Community Events</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Connect, learn, and collaborate through our AI-focused events. From expert-led workshops and panel
                discussions to networking sessions, our events bring together professionals exploring the future of AI.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Why RepresentAI - Split Section 
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={blog1}
                alt="RepresentAI community"
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why RepresentAI?</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Founded to elevate women and LGBTQIA+ people in AI and technology",
                  "Intersectional focus — creating access for underrepresented groups",
                  "Over 1,500 people upskilled in 2025",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Blog-style Cards - 3 Subsections */}
      <section className="gradient-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Explore RepresentAI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI News Card */}
            <Card className="bg-card border-border overflow-hidden card-hover">
              <img src={blog1} alt="AI News" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg">AI News</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Track innovation, risk, and opportunity as our AI news keeps you informed and commercially aware.
                </p>
                <Link to="/news">
                  <Button className="btn-gradient rounded-full px-6 mt-4 text-sm font-semibold">Read More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Training Card */}
            <Card className="bg-card border-border overflow-hidden card-hover">
              <img src={blog2} alt="AI Training" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg">AI Training</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Build practical AI capability with free online training designed for real business use.
                </p>
                <Link to="/training">
                  <Button className="btn-gradient rounded-full px-6 mt-4 text-sm font-semibold">Read More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Events Card */}
            <Card className="bg-card border-border overflow-hidden card-hover">
              <img src={blog3} alt="AI Events" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground text-lg">AI Events</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Join a community that's actively shaping how AI is used in business today.
                </p>
                <Link to="/events">
                  <Button className="btn-gradient rounded-full px-6 mt-4 text-sm font-semibold">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <PartnersCarousel />

      {/* Event Photos Carousel */}
      <EventPhotosCarousel />

      {/* CTA Section */}
      <section className="py-16 px-4 gradient-section">
        <div
          className="max-w-5xl mx-auto rounded-2xl px-8 py-16 text-center"
          style={{ background: "linear-gradient(135deg, hsl(230, 80%, 55%) 0%, hsl(270, 60%, 55%) 100%)" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Ready to Join the AI Community?</h2>
          <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl mx-auto">
            Take the next step in your AI journey. Join RepresentAI for free training, events, and a supportive
            community.
          </p>
          <Link to="/join">
            <Button className="rounded-full px-10 py-6 text-base font-semibold mt-8 bg-white text-primary hover:bg-white/90">
              Join
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
