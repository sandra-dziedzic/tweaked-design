import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-hero-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">AI News</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with curated AI news that matters — emerging technologies, regulatory changes, product launches, and real-world business applications.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground">
          <p>News articles coming soon. Check back for the latest AI and technology updates.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
