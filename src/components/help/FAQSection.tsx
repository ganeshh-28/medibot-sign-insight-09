
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-6 w-6" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">How does the sign language feature work?</h3>
            <p className="text-gray-600">
              Our platform uses advanced AI technology to recognize sign language gestures through your device's camera. 
              The system matches your signs against our trained dataset of 48 common words to understand your symptoms and respond accordingly.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Is my medical data secure?</h3>
            <p className="text-gray-600">
              Yes, we take your privacy seriously. All your conversations and health information are encrypted and stored securely. 
              We comply with HIPAA regulations and industry-standard security protocols.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">How accurate is the symptom recognition?</h3>
            <p className="text-gray-600">
              Our AI system has been trained on extensive medical datasets to recognize symptoms accurately. 
              However, it's important to note that the AI provides potential diagnoses and should not replace professional medical advice.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Can I speak with a real doctor?</h3>
            <p className="text-gray-600">
              Yes, after your AI consultation, you can schedule an appointment with a real doctor through our platform. 
              Simply use the booking feature to select an available doctor and time slot that works for you.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
