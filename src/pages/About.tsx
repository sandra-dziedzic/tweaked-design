import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventPhotosCarousel from "@/components/EventPhotosCarousel";
import { Sparkles, Users, ShieldCheck, CalendarDays, Rocket, Heart, Megaphone } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const tiles = [
  {
    icon: Sparkles,
    title: "Community-Led",
    text: "RepresentAI is a community-led initiative focused on helping people build careers in AI and security, strengthening community, and driving positive change in the workplace. We support people at every stage of their journey by offering free and accessible AI and security training through in-person events, alongside daily AI news, learning resources, and upskilling updates that help our community stay informed and confident in a fast-moving field.",
  },
  {
    icon: Users,
    title: "Inclusive & Intersectional",
    text: "RepresentAI started with a mission to elevate women and LGBTQIA+ individuals working across AI, technology, security, digital and entrepreneurship, across all industries. As the community grew, it became clear that representation needs to be intersectional. Today, RepresentAI supports a broader range of underrepresented groups and works to create access, opportunity and visibility for people who are often left out of conversations about emerging technology.",
  },
  {
    icon: ShieldCheck,
    title: "Free & Accessible",
    text: "Everything we do is shaped by our community. Our agenda is not set by sponsors or trends, but by real needs, lived experience, and what will make the biggest difference for people navigating their careers. We focus on practical skills, confidence building, connection and advocacy, while also encouraging ethical and responsible use of technology at work. In 2025, RepresentAI helped over 1,500 people access free AI training and upskilling, removing barriers to entry and supporting people to develop skills they can actually use.",
  },
  {
    icon: CalendarDays,
    title: "2025 Highlights",
    text: "Our events throughout 2025 brought learning, conversation and community together. Highlights included sessions on quantum computing, AI and sustainability, and ethical AI, as well as industry events like Infosec Europe, Pride London networking in Soho, the UK Black Pride community roundtable, a visit to Bletchley Park, Pride events with partners at RUSI, and collaborative sessions hosted at IBM and BCS Moorgate. The year closed with a community Christmas event delivered with friends and partners.",
  },
  {
    icon: Rocket,
    title: "Looking Ahead",
    text: "Looking ahead to 2026, our programme begins with the Build Together Hackathon on 3 February. This will include a public sector showcase, hands-on building using Lovable, and time to connect and share learning. More events will be announced soon.",
  },
  {
    icon: Heart,
    title: "Our Team",
    text: "RepresentAI was co-founded by Sarah and Laura and is supported by an amazing and growing team, including Kush Shah, Ajesh, Didar and many others who continue to shape and grow the community.",
  },
];

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-hero-bg py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center">About Us</h1>
        </div>
      </section>

      <section className="py-16 gradient-section">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Megaphone className="w-10 h-10 mx-auto mb-4 text-primary opacity-60" />
          <p className="text-2xl md:text-3xl font-bold text-foreground italic leading-snug">
            RepresentAI exists to make sure people don&rsquo;t just hear about the future of AI — they are part of
            building it.
          </p>
        </div>
      </section>

      <section className="py-16 gradient-section">
        <div className="max-w-5xl mx-auto px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {tiles.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] px-4">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "linear-gradient(135deg, hsl(230, 80%, 55%), hsl(270, 60%, 55%))" }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {tiles.map((_, i) => (
              <button
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === selectedIndex ? "bg-secondary" : "bg-border"}`}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <EventPhotosCarousel />

      <Footer />
    </div>
  );
};

export default About;
