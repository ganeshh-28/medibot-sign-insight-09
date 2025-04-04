
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-medical-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-medical-text mb-4">Contact Us</h1>
              <p className="text-xl text-gray-600">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-medical-text mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Type your message here..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-medical-text mb-6">Contact Information</h2>
                
                <div className="bg-medical-light rounded-xl p-8 mb-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-white p-3 rounded-full">
                      <Mail className="h-6 w-6 text-medical-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-text">Email Us</h3>
                      <p className="text-gray-600 mt-1">info@medibot.com</p>
                      <p className="text-gray-600">support@medibot.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-white p-3 rounded-full">
                      <Phone className="h-6 w-6 text-medical-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-text">Call Us</h3>
                      <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-medical-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-medical-text">Visit Us</h3>
                      <p className="text-gray-600 mt-1">123 Medical Plaza</p>
                      <p className="text-gray-600">Health City, MD 12345</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl text-medical-text mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-medical-primary">Is MediBot a replacement for real doctors?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        No, MediBot is designed to provide preliminary insights and guidance, but it is not a substitute for professional medical advice, diagnosis, or treatment.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-medical-primary">How accurate is the sign language recognition?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Our sign language recognition is continuously improving. It works best with clear gestures in good lighting conditions and currently recognizes common medical signs.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-medical-primary">How is my medical data protected?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        We employ end-to-end encryption and adhere to strict privacy policies to ensure your medical information remains confidential and secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
