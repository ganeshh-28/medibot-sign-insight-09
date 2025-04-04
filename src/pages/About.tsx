
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Users, Globe, HeartPulse } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-medical-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-medical-text mb-4">About MediBot SignInsight</h1>
              <p className="text-xl text-gray-600">
                Our mission is to make quality healthcare accessible to everyone through innovative AI technology.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-medical-text mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  MediBot SignInsight was born from a simple observation: healthcare communication remains a barrier for many people, especially those with disabilities, language barriers, or in remote areas.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of medical professionals, AI specialists, and accessibility experts came together with a shared vision: to create a platform that understands patients regardless of how they communicate.
                </p>
                <p className="text-gray-600">
                  Today, MediBot SignInsight is pioneering the use of AI in medical symptom recognition through multiple communication channels, including text, voice, and sign language. Our goal is to make preliminary medical consultation available to everyone, everywhere.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-medical-primary rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medical-secondary rounded-full opacity-20"></div>
                <div className="relative bg-white rounded-xl shadow-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-medical-light p-4 rounded-lg text-center">
                      <h3 className="font-bold text-3xl text-medical-primary">25+</h3>
                      <p className="text-sm text-gray-600">Recognized Conditions</p>
                    </div>
                    <div className="bg-medical-light p-4 rounded-lg text-center">
                      <h3 className="font-bold text-3xl text-medical-primary">3</h3>
                      <p className="text-sm text-gray-600">Input Methods</p>
                    </div>
                    <div className="bg-medical-light p-4 rounded-lg text-center">
                      <h3 className="font-bold text-3xl text-medical-primary">24/7</h3>
                      <p className="text-sm text-gray-600">Availability</p>
                    </div>
                    <div className="bg-medical-light p-4 rounded-lg text-center">
                      <h3 className="font-bold text-3xl text-medical-primary">100%</h3>
                      <p className="text-sm text-gray-600">Privacy-Focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-medical-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-medical-text mb-4">Our Values</h2>
              <p className="text-gray-600">
                The principles that guide everything we do at MediBot SignInsight.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-medical-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  We believe healthcare information should be accessible to everyone, regardless of ability or disability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-medical-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of AI technology to improve healthcare communication.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-medical-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We design for all users, languages, and communication methods to ensure no one is left out.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-medical-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  <HeartPulse className="h-6 w-6 text-medical-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Compassion</h3>
                <p className="text-gray-600">
                  We approach healthcare with empathy, understanding that each patient has unique needs and concerns.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-medical-text mb-4">Our Team</h2>
              <p className="text-gray-600">
                MediBot SignInsight is powered by a diverse team of experts committed to transforming healthcare communication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-24 h-24 bg-medical-primary bg-opacity-10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-medical-primary">DR</span>
                </div>
                <h3 className="font-semibold text-xl mb-1">Dr. Rebecca Chen</h3>
                <p className="text-medical-primary mb-2">Medical Director</p>
                <p className="text-sm text-gray-600">
                  Board-certified physician with over 15 years of experience in telemedicine and digital health solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-24 h-24 bg-medical-primary bg-opacity-10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-medical-primary">JT</span>
                </div>
                <h3 className="font-semibold text-xl mb-1">James Thompson</h3>
                <p className="text-medical-primary mb-2">AI Research Lead</p>
                <p className="text-sm text-gray-600">
                  AI specialist with expertise in natural language processing and machine learning for healthcare applications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-24 h-24 bg-medical-primary bg-opacity-10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-medical-primary">SL</span>
                </div>
                <h3 className="font-semibold text-xl mb-1">Sarah Lopez</h3>
                <p className="text-medical-primary mb-2">Accessibility Specialist</p>
                <p className="text-sm text-gray-600">
                  Dedicated to ensuring MediBot's features are accessible to users with different abilities and communication needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
