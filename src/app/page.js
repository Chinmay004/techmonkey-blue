import HeroSection from "@/components/herosection.jsx";
import MobileNavbar from "@/components/mobile-navbar";
import Navbar from "@/components/navbar";
import LottieComponent from "@/components/lottie-component";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonial-section";

export default function Home() {
  return (
    <main>
      <div className="bg-primary min-h-screen">
        <HeroSection />
        <Navbar />
        <MobileNavbar />

        <section
          id="services"
          className="min-h-screen bg-primary text-white text-5xl"
        >
          <h2 className="m-14 font-syne">Our Services</h2>
          <div className="flex">
            <LottieComponent filename="Scene-1.json" />
            <div>
              <h2 className="font-syne text-4xl">Web Design & Development</h2>
              <div className="pt-6 text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
                <p className="">
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
          <div className="flex mt-40">
            <LottieComponent filename="Scene-2.json" />
            <div>
              <h2 className="font-syne text-4xl">CRM</h2>
              <p className="pt-6 text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
                We build CRMs that feel intelligent, not just functional.
              </p>
              <div className="pt-2 text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
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
          <div className="flex mt-40">
            <LottieComponent filename="Scene-3.json" />
            <div>
              <h2 className="font-syne text-4xl">Mobile & Product Design</h2>
              <p className="pt-6 text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
                The future lives in your hand. We build apps that feel crafted,
                not coded.
              </p>
              <div className="pt-2 text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
                <p className="">• &nbsp;Mobile Apps (iOS, Android)</p>
                <p>• &nbsp;UX Systems that Learn from You</p>
                <p>• &nbsp;Connected Devices & IoT</p>
                <p>• &nbsp;App Branding & Launch Ecosystems</p>
              </div>
            </div>
          </div>
          <div className="flex mt-40 mb-40">
            <LottieComponent filename="Scene-4.json" />
            <div>
              <h2 className="font-syne text-4xl">Brand Alchemy</h2>
              <div className="pt-6 text-2xl max-w-3xl text-[#CCCCCC] leading-relaxed">
                <p className="">
                  We craft identities that shape how the world remembers you.
                </p>
                <p>• &nbsp;Brand Strategy & Naming Architecture</p>
                <p>• &nbsp;Visual & Verbal Systems</p>
                <p>• &nbsp;Cultural Positioning</p>
                <p>• &nbsp;Rebranding for Scale & Legacy</p>
                <p>• &nbsp;“Logos fade. Symbols live forever.”</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="min-h-screen bg-background text-white text-5xl"
        >
          <div>
            <h2 className="font-syne pt-14 px-14">Our Projects</h2>
          </div>
          <div className="flex justify-center">
            <ProjectsSection />
          </div>
        </section>
        <section
          id="testimonials"
          className="h-screen bg-background text-white text-5xl min-w-full flex flex-col"
        >
          <h2 className="font-syne px-14 flex pb-12">Testimonials</h2>
          <div className="w-full flex justify-center">
            <div className="max-w-7xl w-full flex justify-center pt-8 overflow-hidden">
              <TestimonialsSection />
            </div>
          </div>
        </section>
        <section
          id="connect"
          className="min-h-screen bg-primary flex items-center justify-center text-white text-5xl"
        >
          <h2 className="font-syne">Do you have any questions?</h2>
        </section>
      </div>
    </main>
  );
}
