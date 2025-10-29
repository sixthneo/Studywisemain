import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#35979C' }}>
            <span className="text-white">SW</span>
          </div>
          <span className="font-['Playfair_Display'] text-2xl" style={{ color: '#35979C' }}>StudyWise</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-[#FFF500] transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-[#FFF500] transition-colors">About</button>
          <button onClick={() => scrollToSection('programs')} className="hover:text-[#FFF500] transition-colors">Programs</button>
          <button onClick={() => scrollToSection('why')} className="hover:text-[#FFF500] transition-colors">Why Us</button>
          <button onClick={() => scrollToSection('instagram')} className="hover:text-[#FFF500] transition-colors">Instagram</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#FFF500] transition-colors">Contact</button>
        </div>
        
        <Button 
          onClick={() => window.open('https://wa.me/919599505943', '_blank')}
          className="rounded-xl hover:shadow-lg transition-all"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat on WhatsApp
        </Button>
      </nav>
    </header>
  );
}
