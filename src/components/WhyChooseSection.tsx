import { Target, Compass, TrendingUp, Globe2 } from 'lucide-react';

export function WhyChooseSection() {
  const features = [
    {
      icon: Target,
      emoji: '🎯',
      title: 'Personalized Plans',
      description: 'Tailored learning pace & goals for each student'
    },
    {
      icon: Compass,
      emoji: '🧭',
      title: 'Examiner-Aligned Teaching',
      description: 'Learn how to think & write for the mark scheme'
    },
    {
      icon: TrendingUp,
      emoji: '📈',
      title: 'Progress Tracking',
      description: 'Regular analytics-based feedback'
    },
    {
      icon: Globe2,
      emoji: '🌐',
      title: 'Global Access',
      description: 'Online sessions across time zones'
    }
  ];

  return (
    <section id="why" className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl" style={{ color: '#0B1220' }}>
            Why Parents & Students Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Excellence through personalized, data-driven education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-3xl" style={{ backgroundColor: '#F59E0B' }}>
                  {feature.emoji}
                </div>
                <h3 className="mb-3" style={{ color: '#0B1220' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
