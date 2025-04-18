
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileImage, Info, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onFileChange: (files: File[]) => void;
  uploadedFiles: File[];
  isUploading: boolean;
  uploadComplete: boolean;
  onUpload: () => void;
  onClear: () => void;
}

const FileUpload = ({
  onFileChange,
  uploadedFiles,
  isUploading,
  uploadComplete,
  onUpload,
  onClear,
}: FileUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      onFileChange(newFiles);
    }
  };

  return (
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
          <div>
            <label htmlFor="file-upload">
              <Button asChild>
                <span>Browse Files</span>
              </Button>
            </label>
            <input
              id="file-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
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
              <Button onClick={onUpload} disabled={isUploading}>
                {isUploading ? 'Uploading...' : 'Upload Files'}
              </Button>
              <Button variant="outline" onClick={onClear}>
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
  );
};

export default FileUpload;
