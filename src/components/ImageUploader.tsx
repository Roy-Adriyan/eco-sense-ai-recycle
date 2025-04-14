
import { useState, ChangeEvent } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  className?: string;
}

const ImageUploader = ({ onImageUpload, className }: ImageUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      onImageUpload(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className={cn(
        "w-full border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center",
        dragActive ? "border-primary bg-eco-50" : "border-gray-300",
        previewUrl ? "pt-4 pb-6" : "py-10",
        className
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {previewUrl ? (
        <div className="w-full flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              src={previewUrl} 
              alt="Uploaded preview" 
              className="max-h-64 rounded-lg object-contain"
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-700 font-medium mb-1">
            Drag & drop an image here
          </p>
          <p className="text-sm text-gray-500 mb-4">or click to browse files</p>
        </div>
      )}
      
      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
      />
      <label htmlFor="file-upload">
        <Button 
          variant="outline" 
          size="sm" 
          className="cursor-pointer"
          type="button"
        >
          {previewUrl ? "Replace image" : "Select image"}
        </Button>
      </label>
    </div>
  );
};

export default ImageUploader;
