
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare, Mic, Video, Calendar, Clock, User, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <Features />
        
        {/* How It Works Section */}
        <section className="py-16 bg-medical-accent">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-medical-text mb-4">How MediBot Works</h2>
              <p className="text-gray-600">
                Our AI-powered platform makes it easy to communicate your symptoms and get instant medical insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Describe Symptoms</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Share your symptoms via text, voice, or sign language through our intuitive interface.
                </p>
                <div className="flex gap-2 mt-auto">
                  <MessageSquare className="h-5 w-5 text-medical-primary" />
                  <Mic className="h-5 w-5 text-medical-primary" />
                  <Video className="h-5 w-5 text-medical-primary" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">AI Analysis</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our AI processes your symptoms, matching them with our medical database to identify potential conditions.
                </p>
                <div className="w-16 h-16 animate-pulse-slow">
                  <div className="w-full h-full border-4 border-medical-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-medical-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Get Insights</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Receive potential diagnoses, medical advice, and recommendations for next steps, including when to see a real doctor.
                </p>
                <div className="mt-auto">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86571" stroke="#3EBDC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#3EBDC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/chat">Try MediBot Now</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Connect with Doctor Section */}
        <section id="connect-doctor" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-medical-text mb-4">Connect with a Doctor</h2>
              <p className="text-gray-600 mb-6">
                After your AI consultation, speak directly with a healthcare professional for personalized care.
              </p>
              <div className="flex justify-center mb-8">
                <Shield className="h-6 w-6 text-medical-primary mr-2" />
                <span className="text-sm text-gray-600">All your conversations are confidential and secure with our platform.</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-medical-light p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-medical-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Schedule an Appointment</h3>
                      <p className="text-sm text-gray-600">Book a consultation at your convenience</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-medical-primary flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">Choose from available time slots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-medical-primary flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">Receive appointment confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-medical-primary flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">Get reminders before your appointment</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>30-60 min consultation</span>
                    </div>
                    <div>Available 24/7</div>
                  </div>
                  <Button className="w-full">Book Appointment</Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-medical-light p-3 rounded-full">
                      <Video className="h-6 w-6 text-medical-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Connect Now</h3>
                      <p className="text-sm text-gray-600">Speak with an available doctor immediately</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-medical-primary flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">No appointment needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-medical-primary flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">Connect via video or voice call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 rounded-full bg-medical-primary flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-sm">Share your AI consultation results</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>15-30 min typical wait time</span>
                    </div>
                    <div>8 AM - 10 PM</div>
                  </div>
                  <Button className="w-full">Connect Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-medical-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-medical-text mb-4">Trusted by Patients</h2>
              <p className="text-gray-600">
                Here's what people are saying about their experience with MediBot SignInsight.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"The sign language feature is incredible! As someone with hearing impairment, I finally feel understood by a medical service."</p>
                <p className="font-semibold">- Sarah L.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"MediBot helped me identify my symptoms quickly and recommended I see a specialist. Turns out, it was right about my condition!"</p>
                <p className="font-semibold">- Michael T.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"The voice recognition feature is so convenient. I could explain my symptoms while resting in bed, and got helpful advice right away."</p>
                <p className="font-semibold">- Jennifer K.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/chat">Experience MediBot Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
