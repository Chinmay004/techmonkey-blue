import HeroSection from "@/components/herosection.jsx";
import MobileNavbar from "@/components/mobile-navbar";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="bg-primary min-h-screen">
        <HeroSection />
        <Navbar />
        <MobileNavbar />

        <section
          id="services"
          className="min-h-screen bg-primary flex items-center justify-center text-white text-4xl"
        >
          <h2>Our Services</h2>
        </section>
        <section
          id="projects"
          className="min-h-screen bg-background flex items-center justify-center text-white text-4xl"
        >
          <h2>Our Projects</h2>
        </section>
        <section
          id="testimonials"
          className="min-h-screen bg-background flex items-center justify-center text-white text-4xl"
        >
          <h2>Testimonials</h2>
        </section>
        <section
          id="connect"
          className="min-h-screen bg-background flex items-center justify-center text-white text-4xl"
        >
          <h2>Do you have any questions?</h2>
        </section>
      </div>
    </main>
  );
}
