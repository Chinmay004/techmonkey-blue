import HeroSection from "@/components/herosection.jsx";
import MobileNavbar from "@/components/mobile-navbar";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonial-section";
import FooterContent from "@/components/footer";
import ServicesSection from "@/components/services-section";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="bg-primary min-h-screen">
        <HeroSection />
        <Navbar />
        <MobileNavbar />

        <ServicesSection />
        
        <section
          id="projects"
          className="min-h-screen bg-background text-white overflow-hidden"
        >
          <div className="flex justify-center w-full">
            <ProjectsSection />
          </div>
        </section>
        <section
          id="testimonials"
          className="bg-black text-white py-12 sm:py-16 md:py-20 overflow-hidden"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne px-4 sm:px-8 md:px-14 mb-8 md:mb-12">
            Testimonials
          </h2>
          <div className="w-full">
            <TestimonialsSection />
          </div>
        </section>
        <section
          id="connect"
          className="min-h-screen bg-primary text-white overflow-hidden"
        >
          <FooterContent></FooterContent>
        </section>
      </div>
    </main>
  );
}
