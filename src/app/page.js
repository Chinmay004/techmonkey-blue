import HeroSection from "@/components/herosection.jsx";
import MobileNavbar from "@/components/mobile-navbar";
import Navbar from "@/components/navbar";
import LottieComponent from "@/components/lottie-component";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonial-section";
import FooterContent from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="bg-primary min-h-screen">
        <HeroSection />
        <Navbar />
        <MobileNavbar />

        <section
          id="services"
          className="min-h-screen bg-primary text-white py-12 md:py-20"
        >
          <h2 className="mx-4 sm:mx-8 md:mx-14 mb-8 md:mb-12 text-3xl sm:text-4xl md:text-5xl font-syne">
            Our Services
          </h2>
          
          {/* Service 1: Web Design & Development */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 mb-16 md:mb-24 lg:mb-40">
            <LottieComponent filename="Scene-1.json" />
            <div className="px-4 sm:px-8 md:px-14 lg:px-0">
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                Web Design & Development
              </h2>
              <div className="pt-2 md:pt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed space-y-2">
                <p>
                  • &nbsp;Responsive & Progressive Websites - Seamless across
                  devices and platforms.
                </p>
                <p>
                  • &nbsp;UX Systems that Learn from You - Interfaces that adapt
                  intelligently.
                </p>
                <p>
                  • &nbsp;Connected Platforms & APIs - Integrations that make
                  your web ecosystem smarter.
                </p>
                <p>
                  • &nbsp;Branding & Launch Strategies - From concept to
                  deployment, every detail counts.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2: CRM */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 mb-16 md:mb-24 lg:mb-40">
            <LottieComponent filename="Scene-2.json" />
            <div className="px-4 sm:px-8 md:px-14 lg:px-0">
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">CRM</h2>
              <p className="pt-2 md:pt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
                We build CRMs that feel intelligent, not just functional.
              </p>
              <div className="pt-2 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed space-y-2">
                <p>
                  • &nbsp;Smart Contact Management - Organize and track your
                  customers effortlessly.
                </p>
                <p>
                  • &nbsp;AI-Driven Insights - Systems that learn and suggest
                  the next best actions
                </p>
                <p>
                  • &nbsp;Automated Workflows - Streamline tasks, follow-ups,
                  and communications.
                </p>
                <p>
                  • &nbsp;Analytics & Reporting - Clear, actionable insights to
                  grow your business.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3: Mobile & Product Design */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 mb-16 md:mb-24 lg:mb-40">
            <LottieComponent filename="Scene-3.json" />
            <div className="px-4 sm:px-8 md:px-14 lg:px-0">
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                Mobile & Product Design
              </h2>
              <p className="pt-2 md:pt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
                The future lives in your hand. We build apps that feel crafted,
                not coded.
              </p>
              <div className="pt-2 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed space-y-2">
                <p>• &nbsp;Mobile Apps (iOS, Android)</p>
                <p>• &nbsp;UX Systems that Learn from You</p>
                <p>• &nbsp;Connected Devices & IoT</p>
                <p>• &nbsp;App Branding & Launch Ecosystems</p>
              </div>
            </div>
          </div>

          {/* Service 4: Brand Alchemy */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 mb-16 md:mb-24 lg:mb-40">
            <LottieComponent filename="Scene-4.json" />
            <div className="px-4 sm:px-8 md:px-14 lg:px-0">
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6">
                Brand Alchemy
              </h2>
              <div className="pt-2 md:pt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed space-y-2">
                <p>
                  We craft identities that shape how the world remembers you.
                </p>
                <p>• &nbsp;Brand Strategy & Naming Architecture</p>
                <p>• &nbsp;Visual & Verbal Systems</p>
                <p>• &nbsp;Cultural Positioning</p>
                <p>• &nbsp;Rebranding for Scale & Legacy</p>
                <p>• &nbsp;&quot;Logos fade. Symbols live forever.&quot;</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="min-h-screen bg-background text-white overflow-hidden"
        >
          <div className="py-8 md:py-14">
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl px-4 sm:px-8 md:px-14">
              Our Projects
            </h2>
          </div>
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
