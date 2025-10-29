import { Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InstagramSection() {
  // Mock Instagram posts - in production, these would be fetched from Instagram API
  const instagramPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400', alt: 'Study tip 1' },
    { id: 2, image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400', alt: 'Success story 1' },
    { id: 3, image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400', alt: 'Learning moment 1' },
    { id: 4, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400', alt: 'Study tip 2' },
    { id: 5, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', alt: 'Success story 2' },
    { id: 6, image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400', alt: 'Learning moment 2' }
  ];

  return (
    <section id="instagram" className="py-20 bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl" style={{ color: '#35979C' }}>
            Inside the StudyWise Classroom
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Follow our journey on Instagram — tips, success stories, and learning moments.
          </p>
          <a 
            href="https://instagram.com/studywise_official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            style={{ backgroundColor: '#35979C', color: 'white' }}
          >
            <Instagram className="h-5 w-5" />
            Follow @studywise_official
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/studywise_official"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Instagram className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
