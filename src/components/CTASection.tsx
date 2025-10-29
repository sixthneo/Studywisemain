import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    grade: '',
    subjects: '',
    whatsapp: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production, this would send to a backend or directly to WhatsApp
    const message = `New Consultation Request:\nName: ${formData.name}\nRole: ${formData.role}\nGrade & Board: ${formData.grade}\nSubjects: ${formData.subjects}\nWhatsApp: ${formData.whatsapp}\nNotes: ${formData.notes}`;
    
    // Redirect to WhatsApp with pre-filled message
    window.open(`https://wa.me/919599505943?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitted(true);
    toast.success('Thanks! Our mentor will reach out shortly.');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        role: '',
        grade: '',
        subjects: '',
        whatsapp: '',
        notes: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-4xl md:text-5xl" style={{ color: '#35979C' }}>
              Ready to Begin?
            </h2>
            <p className="text-gray-600 text-lg">
              Chat with our team on WhatsApp or book a free consultation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => window.open('https://wa.me/919599505943', '_blank')}
              className="rounded-xl hover:shadow-xl transition-all text-lg px-8 py-6"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
            <Button 
              variant="outline"
              className="rounded-xl hover:shadow-xl transition-all text-lg px-8 py-6 hover:bg-[#FFF500] hover:border-[#FFF500]"
              style={{ borderColor: '#35979C', color: '#35979C' }}
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Consultation Form */}
          <div className="bg-[#F8FAFC] p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="mb-6 text-center" style={{ color: '#35979C' }}>
              Schedule Your Free Consultation
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#35979C' }}>
                  <Send className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg" style={{ color: '#35979C' }}>Thanks! Our mentor will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role">Parent/Student *</Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })} required>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="grade">Grade & Board *</Label>
                    <Input
                      id="grade"
                      required
                      placeholder="e.g., Grade 10 IGCSE"
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      required
                      placeholder="+91 9599505943"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subjects">Subjects of Interest *</Label>
                  <Input
                    id="subjects"
                    required
                    placeholder="e.g., Math, Physics, Chemistry"
                    value={formData.subjects}
                    onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us about your learning goals..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="rounded-xl min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-xl hover:shadow-xl transition-all text-lg py-6"
                  style={{ backgroundColor: '#35979C', color: 'white' }}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
