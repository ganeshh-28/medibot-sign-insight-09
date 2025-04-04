
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mic, MessageSquare, Video, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-medical-accent to-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-medical-text mb-6">
              AI-Powered Medical Consultation at Your Fingertips
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              MediBot SignInsight helps you communicate your symptoms through text, voice, or sign language, 
              providing instant medical insights and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/chat">Start Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">Learn More</Link>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white shadow-sm">
                <MessageSquare className="h-6 w-6 text-medical-primary mb-2" />
                <span className="text-sm font-medium">Text Chat</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white shadow-sm">
                <Mic className="h-6 w-6 text-medical-primary mb-2" />
                <span className="text-sm font-medium">Voice Input</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white shadow-sm">
                <Video className="h-6 w-6 text-medical-primary mb-2" />
                <span className="text-sm font-medium">Sign Language</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-lg bg-white shadow-sm">
                <Sparkles className="h-6 w-6 text-medical-primary mb-2" />
                <span className="text-sm font-medium">AI Insights</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-medical-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-medical-secondary rounded-full opacity-20"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg animate-pulse-slow">
                <img
                  src="/lovable-uploads/1dfc3be4-f3e5-4a33-8d5f-c044a8079dee.png"
                  alt="Input keywords table for patient gestures"
                  className="w-full rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-medical-text">Symptom Recognition Table</h3>
                  <p className="text-sm text-gray-500">Our AI understands your symptoms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-16 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
