import { GraduationCap, Globe, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const stats = [
    { icon: GraduationCap, value: '500+', label: 'Students Mentored' },
    { icon: Globe, value: '6+', label: 'Countries' },
    { icon: TrendingUp, value: '+2', label: 'Grade Improvement' }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXRvciUyMHRlYWNoaW5nJTIwc3R1ZGVudCUyMGxhcHRvcHxlbnwxfHx8fDE3NjE3MDQxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mentor teaching student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-4xl md:text-5xl" style={{ color: '#35979C' }}>
              Learn Smarter. Score Higher.
            </h2>
            <p className="mb-8 text-gray-700 text-lg leading-relaxed">
              StudyWise helps international-curriculum students master concepts and boost grades through personalized, examiner-aligned teaching. 
              We specialize in IBDP, MYP, IGCSE & A Levels, combining academic rigor with design-driven learning experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ backgroundColor: '#FFF500' }}>
                      <Icon className="h-6 w-6" style={{ color: '#35979C' }} />
                    </div>
                    <div className="mb-1" style={{ color: '#35979C' }}>{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
