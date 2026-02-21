import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WorkCarousel } from "@/components/WorkCarousel";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Services />
        <WorkCarousel />
        <Testimonials />
        <Stats />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
