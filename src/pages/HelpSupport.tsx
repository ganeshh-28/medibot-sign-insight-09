
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FAQSection from '@/components/help/FAQSection';
import SignLanguageHelp from '@/components/help/SignLanguageHelp';
import FileUpload from '@/components/help/FileUpload';
import ContactSupport from '@/components/help/ContactSupport';

const HelpSupport = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (newFiles: File[]) => {
    setUploadedFiles(prev => [...prev, ...newFiles]);
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
            <FAQSection />
          </TabsContent>
          
          <TabsContent value="sign-help" className="mt-4">
            <SignLanguageHelp />
          </TabsContent>
          
          <TabsContent value="upload" className="mt-4">
            <FileUpload
              onFileChange={handleFileChange}
              uploadedFiles={uploadedFiles}
              isUploading={isUploading}
              uploadComplete={uploadComplete}
              onUpload={handleUpload}
              onClear={clearFiles}
            />
          </TabsContent>
          
          <TabsContent value="contact" className="mt-4">
            <ContactSupport />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default HelpSupport;
