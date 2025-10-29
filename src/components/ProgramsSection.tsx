import { Book, BarChart3, Clock, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function ProgramsSection() {
  const programs = [
    {
      icon: Book,
      title: 'Tuitions (All Subjects)',
      description: 'One-on-one & small-group sessions for Math, Sciences, English, Economics & Humanities.',
      cta: 'Find Your Tutor',
      emoji: '📘'
    },
    {
      icon: BarChart3,
      title: 'Test Series',
      description: 'Practise past papers, receive in-depth analysis & personalized feedback.',
      cta: 'Join Test Series',
      emoji: '📊'
    },
    {
      icon: Clock,
      title: 'Crash Courses',
      description: '4–6 week revision sprints before exams: concept recap + timed practice.',
      cta: 'Enroll Now',
      emoji: '⏱'
    },
    {
      icon: Trophy,
      title: 'SAT Preparation',
      description: 'Adaptive SAT coaching with diagnostics, strategy & analytics.',
      cta: 'Start SAT Prep',
      emoji: '🏆'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl" style={{ color: '#35979C' }}>
            Programs Offered
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive learning solutions tailored to your academic goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 border-2 hover:border-[#FFF500] rounded-xl"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: '#FFF500' }}>
                    {program.emoji}
                  </div>
                  <CardTitle className="mb-2" style={{ color: '#35979C' }}>
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => window.open('https://wa.me/919599505943', '_blank')}
                    variant="outline" 
                    className="w-full rounded-xl hover:bg-[#35979C] hover:text-white hover:border-[#35979C] transition-all"
                    style={{ borderColor: '#35979C', color: '#35979C' }}
                  >
                    {program.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
