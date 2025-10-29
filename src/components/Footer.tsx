import { Mail, Phone, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#0B1220', color: 'white' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F59E0B' }}>
                <span>SW</span>
              </div>
              <span className="font-['Playfair_Display'] text-2xl">StudyWise</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Personalized online tuitions for international curriculum students. IB, IGCSE, A-Levels & MYP excellence.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: '#F59E0B' }} />
                <a href="mailto:info@thestudywise.com" className="hover:text-white transition-colors">
                  info@thestudywise.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: '#F59E0B' }} />
                <a href="tel:+919599505943" className="hover:text-white transition-colors">
                  +91 9599505943
                </a>
              </div>
              <p className="text-sm">📍 Online & In-Person (by appointment)</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/studywise_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:shadow-lg"
                style={{ backgroundColor: '#F59E0B' }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:shadow-lg"
                style={{ backgroundColor: '#F59E0B' }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:shadow-lg"
                style={{ backgroundColor: '#F59E0B' }}
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© 2025 StudyWise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
