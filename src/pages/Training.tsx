import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-hero-bg py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            AI & Security Training
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Free, accessible training resources to help you build practical AI and security skills for the real world.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground">
          <p>Training content coming soon. Check back for updates on our latest courses and resources.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
