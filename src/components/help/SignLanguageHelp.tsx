
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SignLanguageHelp = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-6 w-6" />
          Sign Language Support
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-gray-600">
            Our platform supports sign language communication to help users with hearing impairments. 
            Here's how to use this feature effectively:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-medical-light">
              <h3 className="font-medium mb-2">Using Sign Language with MediBot</h3>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Enable camera access when prompted</li>
                <li>Position yourself where your hands are clearly visible</li>
                <li>Make sure you have good lighting</li>
                <li>Use standard ASL signs for best recognition</li>
                <li>Sign at a moderate pace for better accuracy</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4 bg-medical-light">
              <h3 className="font-medium mb-2">Supported Sign Vocabulary</h3>
              <p className="text-gray-600 mb-2">
                Our system currently recognizes 48 common medical terms in sign language, including:
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-600">
                <span>Pain</span>
                <span>Fever</span>
                <span>Headache</span>
                <span>Stomach</span>
                <span>Cough</span>
                <span>Dizzy</span>
                <span>Help</span>
                <span>Doctor</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium mb-2">Tips for Better Recognition:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <Info className="h-5 w-5 text-medical-primary" />
                </div>
                <p className="text-sm text-gray-600">
                  Use a plain, uncluttered background for better sign recognition.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <Info className="h-5 w-5 text-medical-primary" />
                </div>
                <p className="text-sm text-gray-600">
                  Ensure your hands are well-lit and clearly visible in the frame.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <Info className="h-5 w-5 text-medical-primary" />
                </div>
                <p className="text-sm text-gray-600">
                  Complete each sign fully before moving to the next one.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button asChild>
              <a href="/chat">Try Sign Language Chat Now</a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignLanguageHelp;
