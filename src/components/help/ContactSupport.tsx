
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactSupport = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Support</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">
          Need additional help? Reach out to our support team and we'll get back to you as soon as possible.
        </p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input type="email" placeholder="your.email@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <Input placeholder="How can we help you?" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              className="w-full p-3 border rounded-lg resize-y min-h-32"
              placeholder="Please describe your issue or question in detail..."
            ></textarea>
          </div>
          <div className="pt-4">
            <Button className="w-full md:w-auto">Send Message</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSupport;
