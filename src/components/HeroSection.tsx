import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import heroVideo from '../assets/Student_Studying_Late_Evening_Macro_Video.mp4';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(53, 151, 156, 0.85) 0%, rgba(53, 151, 156, 0.6) 50%, rgba(255, 245, 0, 0.3) 100%)' 
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl">
            IB, IGCSE & A-Level Tutoring That Drives Results
          </h1>
          <p className="text-white/90 mb-8 text-xl md:text-2xl">
            Personalized online tuitions for Grades 5–12.<br />
            Test Series, Crash Courses & SAT Prep — designed for measurable improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => window.open('https://wa.me/919599505943', '_blank')}
              className="rounded-xl hover:shadow-xl transition-all text-lg px-8 py-6"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="rounded-xl hover:shadow-xl transition-all text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}
