
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  Mic, 
  Video, 
  Calendar, 
  Shield, 
  Clock, 
  Sparkles,
  Languages,
  BrainCircuit,
  HeartPulse,
  Bot,
  FileText,
  ChevronRight
} from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-medical-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-medical-text mb-4">Comprehensive Features</h1>
              <p className="text-xl text-gray-600">
                Discover how MediBot SignInsight is revolutionizing healthcare communication with these powerful features.
              </p>
            </div>
          </div>
        </section>
        
        {/* Communication Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-medical-text mb-8 text-center">Multi-Modal Communication</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-3 bg-medical-primary"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-medical-accent rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-medical-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Text Communication</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Natural language processing to understand symptoms described in text</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Keyword recognition for common medical terms and symptoms</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Conversational interface that asks clarifying questions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-3 bg-medical-primary"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-medical-accent rounded-lg flex items-center justify-center mb-4">
                    <Mic className="h-6 w-6 text-medical-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Voice Communication</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Advanced speech-to-text conversion for symptom description</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Voice recognition that works with various accents and speech patterns</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Hands-free operation for those with mobility limitations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-3 bg-medical-primary"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-medical-accent rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-medical-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">Sign Language Recognition</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Real-time sign language interpretation through computer vision</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Support for common medical signs and gestures</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-medical-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 ml-2">Makes healthcare accessible for deaf and hard of hearing patients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI and Medical Features */}
        <section className="py-16 bg-medical-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-medical-text mb-8 text-center">AI-Powered Healthcare</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="h-6 w-6 text-medical-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Symptom Recognition</h3>
                    <p className="text-gray-600 mb-4">
                      Our AI system recognizes and interprets symptoms across 25+ common medical conditions, mapping keywords to appropriate medical terminology.
                    </p>
                    <div className="bg-medical-accent p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Example:</span> When you say "I have a headache," MediBot will identify this as a potential symptom of various conditions and ask relevant follow-up questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="h-6 w-6 text-medical-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">AI Chatbot Consultation</h3>
                    <p className="text-gray-600 mb-4">
                      Engage in natural conversations with our AI chatbot that mimics a doctor's consultation, asking relevant questions and providing medical insights.
                    </p>
                    <div className="bg-medical-accent p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Benefit:</span> Get preliminary medical advice anytime, anywhere, without appointment scheduling or waiting rooms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-medical-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Appointment Scheduling</h3>
                    <p className="text-gray-600 mb-4">
                      Based on your symptoms, MediBot can recommend specialist appointments and help you schedule them with real healthcare providers.
                    </p>
                    <div className="bg-medical-accent p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Coming soon:</span> Integration with major healthcare provider scheduling systems for seamless appointment booking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-medical-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Medical Records</h3>
                    <p className="text-gray-600 mb-4">
                      Keep track of your symptoms and consultations over time, building a comprehensive record of your health concerns.
                    </p>
                    <div className="bg-medical-accent p-3 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Feature:</span> Export reports to share with your healthcare provider during in-person visits for more informed care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-medical-text mb-4">Additional Features</h2>
              <p className="text-gray-600">
                MediBot SignInsight includes these additional features designed to enhance your healthcare experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-medical-accent p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Languages className="h-6 w-6 text-medical-primary mr-2" />
                  <h3 className="font-semibold text-lg">Multiple Language Support</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Communicate in various languages, making healthcare accessible regardless of your native tongue.
                </p>
              </div>
              
              <div className="bg-medical-accent p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-medical-primary mr-2" />
                  <h3 className="font-semibold text-lg">Data Privacy & Security</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Your health information is encrypted and protected with enterprise-grade security measures.
                </p>
              </div>
              
              <div className="bg-medical-accent p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-medical-primary mr-2" />
                  <h3 className="font-semibold text-lg">24/7 Availability</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Access medical consultation anytime, day or night, without appointment scheduling.
                </p>
              </div>
              
              <div className="bg-medical-accent p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-medical-primary mr-2" />
                  <h3 className="font-semibold text-lg">Personalized Recommendations</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Receive tailored health advice based on your symptoms, medical history, and specific health needs.
                </p>
              </div>
              
              <div className="bg-medical-accent p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <HeartPulse className="h-6 w-6 text-medical-primary mr-2" />
                  <h3 className="font-semibold text-lg">Wellness Tracking</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Monitor your symptoms and health metrics over time to track improvement or changes in your condition.
                </p>
              </div>
              
              <div className="bg-medical-accent p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Bot className="h-6 w-6 text-medical-primary mr-2" />
                  <h3 className="font-semibold text-lg">Continuous Learning</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Our AI system continuously improves its accuracy and capabilities through machine learning.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/chat">Try MediBot Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
