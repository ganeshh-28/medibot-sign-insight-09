
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Phone, PhoneOff } from 'lucide-react';
import VideoFeed from '@/components/consultation/VideoFeed';
import ConsultationChat from '@/components/consultation/ConsultationChat';
import ConsultationInput from '@/components/consultation/ConsultationInput';
import { useConsultation } from '@/context/ConsultationContext';
import { Link } from 'react-router-dom';

const PatientView = () => {
  const { state, connect, disconnect } = useConsultation();
  const { toast } = useToast();

  const handleStartConsultation = () => {
    connect();
    toast({
      title: "Consultation started",
      description: "You are now connected with the doctor",
    });
  };

  const handleEndConsultation = () => {
    disconnect();
    toast({
      title: "Consultation ended",
      description: "You have disconnected from the consultation",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto py-6 px-4">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-medical-primary">Patient Consultation View</h1>
            <p className="text-gray-600">Connected with: Dr. Smith</p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/video-consultation/doctor">Switch to Doctor View</Link>
            </Button>
            
            {state.isConnected ? (
              <Button variant="destructive" onClick={handleEndConsultation}>
                <PhoneOff size={16} className="mr-2" />
                End Consultation
              </Button>
            ) : (
              <Button onClick={handleStartConsultation}>
                <Phone size={16} className="mr-2" />
                Join Consultation
              </Button>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-220px)]">
          <div className="space-y-6 h-full flex flex-col">
            <div className="flex-1">
              <VideoFeed 
                label="Doctor" 
                isSelfFeed={false}
                isMicActive={true}
                isCameraActive={true}
              />
            </div>
            <div className="flex-1">
              <VideoFeed 
                label="Patient (You)" 
                isSelfFeed={true}
                isMicActive={state.isMicActive}
                isCameraActive={state.isCameraActive}
                onToggleMic={() => {}}
                onToggleCamera={() => {}}
              />
            </div>
          </div>
          
          <div className="h-full flex flex-col">
            <div className="flex-1 mb-4">
              <ConsultationChat userRole="patient" />
            </div>
            <ConsultationInput userRole="patient" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientView;
