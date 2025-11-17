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
          className="relative bg-black text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-syne mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Tech Monkeys.
              </p>
            </div>
          </div>
          <div className="w-full">
            <TestimonialsSection />
          </div>
        </section>
        <section
          id="connect"
          className=" bg-primary text-white overflow-hidden"
        >
          <FooterContent></FooterContent>
        </section>
      </div>
    </main>
  );
}
