import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const eventHighlights = [
  "Intro to Quantum Computing – 21st May",
  "Introduction to AI & Sustainability at Trainline – 27th May",
  "Presenting at Infosec Europe – 2nd June",
  "Pride London Networking in Soho – 11th June",
  "UK Black Pride Community Roundtable – 20th June",
  "Bletchley Park Trip & Evening Event – 24th June",
  "Pride with Lavender Group at RUSI – 25th June",
  "Authenticity at Work & Ethical AI at IBM – 7th July",
  "Scale Your Content Using AI Marketing at BCS Moorgate – 8th October",
  "RepresentAI & BCS Christmas AI Event with Women Defining AI, OWL & friends – 2nd December",
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-hero-bg py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Next Event */}
          <Card className="bg-card/80 backdrop-blur border-border shadow-xl">
            <CardContent className="p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Super excited to announce our next event!
              </h1>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground">Overview:</p>
                  <p>
                    Join us for the showcasing of public sector AI prototypes built during a hackathon using Lovable by members of WDAI supported by UKAI, RepAI & BCS Pride and sponsored by Mony Group.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-foreground">Speakers</p>
                  <ul className="space-y-1 mt-2">
                    <li>Tim Flagg, CEO, UKAI</li>
                    <li>Baroness Uddin, Parliamentarian, House of Lords, APPG Chair/ member for Digital ID, Metaverse, Web 3 etc.</li>
                    <li>Sumathi Narayanan Menon, Regional Lead, WDAI UK</li>
                    <li>Zahra Shah, Chair, Women in AI Working Group, UKAI</li>
                    <li>Sarah Rench, Global AI Security Lead, Avanade, BCS Pride Chair & RepresentAI Founder.</li>
                  </ul>
                </div>

                <p>
                  Find out more about the event here and SIGN up below before tickets run out, look forward to seeing you all there!
                </p>
              </div>

              <a href="https://www.eventbrite.co.uk/e/hybrid-build-together-public-hackathon-showcase-by-wdai-ukai-repai-tickets-1980866067732" target="_blank" rel="noopener noreferrer">
                <Button className="btn-gradient rounded-full px-8 mt-6 font-semibold">
                  Register Here
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Milestone */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              A Major 2025 Milestone: 1,500+ People Upskilled
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In 2025, RepresentAI reached a defining milestone — providing free training and upskilling to over 1,500 people in AI and Security.
            </p>
            <p className="text-muted-foreground">This achievement reflects our commitment to:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Expanding access to high-demand technical skills</li>
              <li>Supporting career transitions into AI and cyber security</li>
              <li>Empowering individuals with knowledge, confidence, and community</li>
              <li>Increasing representation where it matters most</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For many, this was a first step into AI. For others, it was the catalyst to move forward faster and with greater clarity.
            </p>
          </div>

          {/* Event Highlights */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Events That Educate, Connect, and Inspire
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our events bring together learning, networking, and lived experience. From technical deep-dives to workplace culture discussions, each session is designed to be accessible, relevant, and community-focused.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Event Highlights in 2025:</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {eventHighlights.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>

          {/* Christmas Event */}
          <div className="mt-16 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Celebrating Progress: Our Christmas AI Event
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              One of the standout moments of the year was the RepresentAI & BCS Christmas AI Event, co-hosted with Women Defining AI, OWL, and friends.
            </p>
            <p className="text-muted-foreground">With over 120 people attending, the evening was a celebration of:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Community and collaboration</li>
              <li>The impact of inclusive upskilling</li>
              <li>The success of helping 1,500+ people move into AI and Security</li>
              <li>Shared commitment to shaping a more representative tech future</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              It was a powerful reminder that when people feel seen, supported, and skilled — incredible things happen.
            </p>
          </div>

          {/* Looking Forward */}
          <div className="mt-16 space-y-6 pb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Looking Forward</h2>
            <p className="text-muted-foreground">RepresentAI will continue to:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Champion inclusive pathways into AI and security</li>
              <li>Partner with organisations that share our values</li>
              <li>Deliver high-impact learning and networking experiences</li>
              <li>Support Women, LGBTQIA+ individuals, and Allies to thrive in tech</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              In 2026 helping over 3000 plus people get training in AI and Security.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The future of AI should be built by all of us — and RepresentAI is proud to help make that future more inclusive, skilled, and human.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
