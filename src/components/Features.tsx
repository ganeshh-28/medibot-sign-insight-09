
import React from 'react';
import { 
  Brain, 
  MessageSquare, 
  Mic, 
  Video, 
  Calendar, 
  Accessibility, 
  BarChart, 
  Shield 
} from 'lucide-react';

const features = [
  {
    title: "AI Symptom Recognition",
    description: "Our AI chatbot recognizes symptoms based on keywords and provides potential diagnoses for common medical conditions.",
    icon: Brain,
  },
  {
    title: "Text Communication",
    description: "Easily type your symptoms and receive instant feedback from our AI-powered medical assistant.",
    icon: MessageSquare,
  },
  {
    title: "Voice Communication",
    description: "Speak naturally and let our system convert your speech to text for analysis of your symptoms.",
    icon: Mic,
  },
  {
    title: "Sign Language Recognition",
    description: "Use sign language through your camera to communicate symptoms, making healthcare accessible for everyone.",
    icon: Video,
  },
  {
    title: "Doctor Appointment Booking",
    description: "Schedule appointments with real doctors based on your AI consultation results.",
    icon: Calendar,
  },
  {
    title: "Accessibility Focus",
    description: "Designed with accessibility in mind for people with various disabilities to access healthcare easily.",
    icon: Accessibility,
  },
  {
    title: "Health Analytics",
    description: "Track your symptoms over time and receive personalized health insights and recommendations.",
    icon: BarChart,
  },
  {
    title: "Privacy & Security",
    description: "Your health data is protected with enterprise-grade security and strict privacy measures.",
    icon: Shield,
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-medical-text mb-4">Comprehensive Healthcare Features</h2>
          <p className="text-gray-600">
            Our platform combines cutting-edge AI technology with accessibility features to provide quality healthcare consultation for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-medical-accent rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-medical-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-medical-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
