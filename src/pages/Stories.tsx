import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Stories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-hero-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Stories</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from our community — experiences, journeys, and insights from people navigating AI and technology.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground">
          <p>Community stories coming soon. Check back for inspiring journeys and experiences.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
