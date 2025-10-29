import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { InstagramSection } from './components/InstagramSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags - in production these would be in the HTML head */}
      <title>StudyWise | IB, IGCSE & A-Level Tutoring | Crash Courses & SAT Prep</title>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyChooseSection />
        <InstagramSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Toast Notifications */}
      <Toaster position="top-center" />
    </div>
  );
}
