
import { useState } from 'react';

interface UseFileUploadProps {
  onFileChange?: (files: File[]) => void;
}

export const useFileUpload = ({ onFileChange }: UseFileUploadProps = {}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (newFiles: File[]) => {
    const updatedFiles = [...uploadedFiles, ...newFiles];
    setUploadedFiles(updatedFiles);
    onFileChange?.(updatedFiles);
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
    onFileChange?.([]);
  };

  return {
    uploadedFiles,
    isUploading,
    uploadComplete,
    handleFileChange,
    handleUpload,
    clearFiles
  };
};
