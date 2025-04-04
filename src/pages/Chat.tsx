
import React from 'react';
import Navbar from '@/components/Navbar';
import ChatBot from '@/components/ChatBot';
import { Stethoscope, Shield, InfoIcon } from 'lucide-react';

const Chat = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Info Sidebar (hidden on mobile) */}
        <div className="hidden md:block w-80 bg-medical-light p-4 border-r overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-xl font-bold flex items-center gap-2 text-medical-text mb-4">
              <Stethoscope className="h-5 w-5 text-medical-primary" />
              About MediBot
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              MediBot is an AI-powered medical assistant that can help identify symptoms and provide 
              general medical guidance.
            </p>
            <p className="text-sm text-gray-600">
              While MediBot can provide useful information, it is not a replacement for professional 
              medical advice, diagnosis, or treatment.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-medical-text mb-3">
              <InfoIcon className="h-5 w-5 text-medical-primary" />
              How to Use
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-medical-primary font-bold">•</span>
                <span>Describe your symptoms clearly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-medical-primary font-bold">•</span>
                <span>Use text, voice, or sign language input</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-medical-primary font-bold">•</span>
                <span>Provide details about when symptoms started</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-medical-primary font-bold">•</span>
                <span>Mention any relevant medical history</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2 text-medical-text mb-3">
              <Shield className="h-5 w-5 text-medical-primary" />
              Privacy Notice
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Your privacy is important to us. Information shared during your chat is used only to 
              provide you with better service and is not shared with third parties.
            </p>
            <p className="text-sm text-gray-600">
              For demonstration purposes, no real medical data is stored in this version of MediBot.
            </p>
          </div>
        </div>
        
        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">
          <div className="p-4 bg-medical-accent border-b flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-medical-text">MediBot Chat</h1>
              <p className="text-sm text-gray-600">Your AI medical assistant</p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              Online
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
