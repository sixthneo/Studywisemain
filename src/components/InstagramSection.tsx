import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// INSTRUCTIONS TO CONNECT REAL INSTAGRAM FEED:
// 1. Go to https://developers.facebook.com/apps
// 2. Create a new app (Business type)
// 3. Add Instagram Basic Display product
// 4. Configure Instagram Basic Display:
//    - Add your website URL
//    - Add redirect URI: https://localhost
//    - Add deauthorize and data deletion URLs
// 5. Add Instagram Test Users (your Instagram account)
// 6. Generate an access token:
//    - Go to Basic Display > User Token Generator
//    - Click "Generate Token" for your test user
//    - Authorize the app
// 7. Copy the access token and replace INSTAGRAM_ACCESS_TOKEN below
//
// Note: Access tokens expire. For production, implement token refresh logic.
// Learn more: https://developers.facebook.com/docs/instagram-basic-display-api

const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN_HERE'; // Replace with your actual token
const INSTAGRAM_USER_ID = 'YOUR_USER_ID_HERE'; // Replace with your Instagram user ID

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      // Check if access token is configured
      if (!INSTAGRAM_ACCESS_TOKEN || INSTAGRAM_ACCESS_TOKEN === 'YOUR_ACCESS_TOKEN_HERE') {
        console.warn('Instagram access token not configured. Using fallback posts.');
        setError(true);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=6`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  // Fallback posts when Instagram API is not configured or fails
  const fallbackPosts = [
    { 
      id: '1', 
      media_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400', 
      permalink: 'https://instagram.com/studywise_official',
      caption: 'Study tips and strategies'
    },
    { 
      id: '2', 
      media_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400', 
      permalink: 'https://instagram.com/studywise_official',
      caption: 'Success stories from our students'
    },
    { 
      id: '3', 
      media_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400', 
      permalink: 'https://instagram.com/studywise_official',
      caption: 'Learning moments'
    },
    { 
      id: '4', 
      media_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400', 
      permalink: 'https://instagram.com/studywise_official',
      caption: 'Effective study techniques'
    },
    { 
      id: '5', 
      media_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', 
      permalink: 'https://instagram.com/studywise_official',
      caption: 'Student achievements'
    },
    { 
      id: '6', 
      media_url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400', 
      permalink: 'https://instagram.com/studywise_official',
      caption: 'Educational insights'
    }
  ];

  const displayPosts = error ? fallbackPosts : posts;
  const showPosts = displayPosts.length > 0 ? displayPosts : fallbackPosts;

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

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="aspect-square rounded-xl bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {showPosts.slice(0, 6).map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <ImageWithFallback
                  src={post.media_url || post.thumbnail_url || ''}
                  alt={post.caption?.substring(0, 100) || 'Instagram post'}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        )}

        {error && (
          <p className="text-center text-gray-500 text-sm mt-6">
            📸 Configure Instagram API to display live feed
          </p>
        )}
      </div>
    </section>
  );
}
