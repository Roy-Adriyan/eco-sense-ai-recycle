
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface ImageUploadSectionProps {
  file: File | null;
  previewURL: string | null;
  onFileChange: (file: File) => void;
  onReset: () => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  file,
  previewURL,
  onFileChange,
  onReset,
  onAnalyze,
  isAnalyzing
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Upload E-Waste Image</h2>
      <p className="text-gray-600 mb-6">
        Upload an image of electronic waste for AI analysis. The system will identify components and provide recycling recommendations.
      </p>

      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center ${file ? 'border-tech-500 bg-tech-50' : 'border-gray-300 hover:border-tech-400'}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
          accept="image/*"
        />

        {previewURL ? (
          <div className="mb-4">
            <img 
              src={previewURL} 
              alt="Preview" 
              className="max-h-64 mx-auto rounded"
            />
            <p className="text-sm text-gray-500 mt-2">{file?.name}</p>
          </div>
        ) : (
          <div className="py-8">
            <div className="mx-auto mb-4 bg-tech-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
              <Upload className="h-8 w-8 text-tech-600" />
            </div>
            <p className="text-gray-700 mb-2">Drag and drop an image here or</p>
            <Button 
              type="button" 
              onClick={handleBrowseClick}
              variant="outline" 
              className="mt-2"
            >
              Browse Files
            </Button>
            <p className="text-xs text-gray-500 mt-3">Supported formats: JPG, PNG, GIF</p>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <Button 
          variant="outline" 
          onClick={onReset}
          disabled={!file}
        >
          Reset
        </Button>
        <Button 
          onClick={onAnalyze}
          disabled={!file || isAnalyzing}
          className="bg-primary"
        >
          {isAnalyzing ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Analyzing...
            </>
          ) : (
            <>
              <Camera className="mr-2 h-5 w-5" />
              Analyze Image
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ImageUploadSection;
