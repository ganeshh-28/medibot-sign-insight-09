
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileImage, HelpCircle, Info, AlertCircle, Video } from 'lucide-react';

const HelpSupport = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleUpload = () => {
    if (uploadedFiles.length === 0) return;
    
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setUploadComplete(false);
      }, 3000);
    }, 2000);
    
    // In a real app, you would send the files to your backend:
    // const formData = new FormData();
    // uploadedFiles.forEach(file => {
    //   formData.append('files', file);
    // });
    // fetch('/api/upload-help-image', {
    //   method: 'POST',
    //   body: formData
    // }).then(response => response.json())
    //   .then(data => {
    //     setIsUploading(false);
    //     setUploadComplete(true);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     setIsUploading(false);
    //   });
  };

  const clearFiles = () => {
    setUploadedFiles([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-medical-primary">Help & Support</h1>
          <p className="text-gray-600">Find answers to your questions and learn how to use our platform.</p>
        </div>

        <Tabs defaultValue="faq" className="mb-8">
          <TabsList>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="sign-help">Sign Language Help</TabsTrigger>
            <TabsTrigger value="upload">Upload Images</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq" className="mt-4">
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
          </TabsContent>
          
          <TabsContent value="sign-help" className="mt-4">
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
          </TabsContent>
          
          <TabsContent value="upload" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-6 w-6" />
                  Upload Sign Language Images
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Help us improve our sign language recognition by uploading images. 
                  These images will be used to train our AI model to better understand different signing styles.
                </p>
                
                <div className="border-2 border-dashed rounded-lg p-6 text-center mb-6">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-lg font-medium mb-2">Drag and drop files here</p>
                  <p className="text-gray-500 mb-4">or</p>
                  <Button as="label" htmlFor="file-upload">
                    Browse Files
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </Button>
                </div>
                
                {uploadedFiles.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Selected Files ({uploadedFiles.length})</h3>
                    <div className="overflow-y-auto max-h-60 border rounded-lg">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center border-b p-3 last:border-b-0">
                          <FileImage className="h-5 w-5 text-medical-primary mr-3" />
                          <span className="flex-1 truncate">{file.name}</span>
                          <span className="text-sm text-gray-500 mr-3">
                            {(file.size / 1024).toFixed(1)} KB
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 mt-4">
                      <Button onClick={handleUpload} disabled={isUploading}>
                        {isUploading ? 'Uploading...' : 'Upload Files'}
                      </Button>
                      <Button variant="outline" onClick={clearFiles}>
                        Clear
                      </Button>
                    </div>
                    
                    {uploadComplete && (
                      <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>Files uploaded successfully! Thank you for your contribution.</span>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="bg-medical-light p-4 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Info className="h-5 w-5 text-medical-primary" />
                    Guidelines for Uploading
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm list-disc pl-5">
                    <li>Upload clear, well-lit images showing the complete sign</li>
                    <li>Ensure the sign is the main focus of the image</li>
                    <li>Please label the images with the corresponding word</li>
                    <li>Images should be at least 256x256 pixels in size</li>
                    <li>We recommend uploading multiple angles of the same sign</li>
                    <li>Please avoid uploading personal or sensitive images</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-4">
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
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default HelpSupport;
