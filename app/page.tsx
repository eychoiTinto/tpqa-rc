import AboutSection from "./_components/homepage/AboutSection";
import ClientStories from "./_components/homepage/ClientReviewSection";
import ContactForm from "./_components/homepage/ContactSection";
import Hero from "./_components/homepage/HeroSection";
import PerfomanceAnalysis from "./_components/homepage/PerfomanceAnalysis";
import WorkingPrinciples from "./_components/homepage/WorkingPrinciples";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <WorkingPrinciples />
      <PerfomanceAnalysis />
      <ClientStories />
      <ContactForm />
    </div>
  );
}
