
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import AIResultsCard from "@/components/AIResultsCard";
import useDocumentTitle from "@/utils/useDocumentTitle";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { 
  Camera, 
  Upload, 
  CircleCheck, 
  CircleAlert, 
  CircleX,
  Info
} from "lucide-react";

// Recycling guidelines for common e-waste components
const recyclingGuidelines = {
  "circuit board": { recyclable: true },
  "battery": { recyclable: false },
  "display panel": { recyclable: true },
  "plastic casing": { recyclable: true },
  "cable": { recyclable: true },
  "metal": { recyclable: true },
  "glass": { recyclable: true },
  "computer": { recyclable: true },
  "phone": { recyclable: true },
  "monitor": { recyclable: true }
};

const demoExamples = [
  {
    name: "Circuit Board",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    description: "Electronic circuit boards contain valuable materials like gold, silver, and copper that can be recycled."
  },
  {
    name: "Smartphone",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80",
    description: "Smartphones contain multiple components including batteries, screens, and circuit boards that require specialized recycling."
  },
  {
    name: "Computer Monitor",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    description: "Monitors and displays may contain hazardous materials and require proper disposal methods."
  }
];

const Demo = () => {
  useDocumentTitle('AI Demo');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Convert file to base64 when a file is uploaded
  useEffect(() => {
    if (file) {
      // Create preview URL for display
      setPreviewURL(URL.createObjectURL(file));

      // Convert to base64 for API
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileDataURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL(null);
      setFileDataURL(null);
    }

    // Cleanup
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [file]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setResults(null);
      setError(null);
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
      setFile(e.dataTransfer.files[0]);
      setResults(null);
      setError(null);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!file || !fileDataURL) {
      setError("Please upload an image first");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      // Extract base64 data from the data URL (remove the prefix like "data:image/jpeg;base64,")
      const base64Image = fileDataURL.split(",")[1];
      
      const response = await axios({
        method: "POST",
        url: "https://serverless.roboflow.com/e-waste-dataset-r0ojc/43",
        params: {
          api_key: "BHeBrRmhkfOQDq0RPDaP"
        },
        data: base64Image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      // Process response into a format compatible with your AIResultsCard
      const processedResults = processApiResponse(response.data);
      setResults(processedResults);
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const processApiResponse = (data: any) => {
    // Check if predictions exist
    if (!data.predictions || data.predictions.length === 0) {
      return [];
    }

    // Map the API response to the format expected by AIResultsCard
    return data.predictions.map((prediction: any) => {
      const className = prediction.class.toLowerCase();
      return {
        name: prediction.class,
        probability: prediction.confidence,
        recyclable: recyclingGuidelines[className]?.recyclable ?? true // Default to true if unknown
      };
    });
  };

  const handleReset = () => {
    setFile(null);
    setFileDataURL(null);
    setPreviewURL(null);
    setResults(null);
    setError(null);
  };

  const handleExampleClick = (example: typeof demoExamples[0]) => {
    setIsAnalyzing(true);
    setResults(null);
    setError(null);

    // For demo examples, we can use mock data (for demonstration purposes)
    setTimeout(() => {
      const mockPredictions = [
        { name: example.name, probability: 0.92, recyclable: true },
        { name: "Electronic Component", probability: 0.65, recyclable: true },
        { name: "Plastic", probability: 0.43, recyclable: true }
      ];
      setIsAnalyzing(false);
      setResults(mockPredictions);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-tech-800 to-tech-900 text-white py-16">
        <SectionContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              AI E-Waste Identification Demo
            </h1>
            <p className="text-lg mb-0">
              Experience our AI technology in action. Upload an image of electronic waste to see how our system identifies and classifies components.
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* Demo Section */}
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Upload E-Waste Image</h2>
              <p className="text-gray-600 mb-6">
                Upload an image of electronic waste for AI analysis. The system will identify components and provide recycling recommendations.
              </p>

              {/* Custom Image Uploader */}
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
                  onClick={handleReset}
                  disabled={!file && !results}
                >
                  Reset
                </Button>
                <Button 
                  onClick={handleAnalyze}
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

            <AIResultsCard 
              isAnalyzing={isAnalyzing}
              results={results}
              error={error}
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-100 rounded-full p-2 mr-3">
                    <Upload className="h-5 w-5 text-tech-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Upload Image</h3>
                    <p className="text-sm text-gray-600">Upload or take a photo of e-waste</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-100 rounded-full p-2 mr-3">
                    <Camera className="h-5 w-5 text-tech-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">AI Analysis</h3>
                    <p className="text-sm text-gray-600">Our AI models analyze and classify components</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-tech-100 rounded-full p-2 mr-3">
                    <CircleCheck className="h-5 w-5 text-tech-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Get Results</h3>
                    <p className="text-sm text-gray-600">Receive detailed identification and recycling guidance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-eco-50 rounded-lg shadow-sm p-6 border border-eco-100">
              <div className="flex items-center mb-4">
                <Info className="h-5 w-5 text-eco-700 mr-2" />
                <h2 className="text-xl font-semibold">Demo Examples</h2>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Click on any example to see how our AI classifies common e-waste items.
              </p>
              
              <div className="space-y-3">
                {demoExamples.map((example, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-3 flex items-center cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
                    onClick={() => handleExampleClick(example)}
                  >
                    <img 
                      src={example.image} 
                      alt={example.name}
                      className="w-16 h-16 object-cover rounded mr-3" 
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{example.name}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{example.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CircleAlert className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    This demo connects to a real Roboflow model to analyze e-waste images. Results and accuracy may vary based on image quality.
                  </p>
                </div>
                <div className="flex items-start">
                  <CircleX className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    Never dispose of e-waste in regular trash. Always follow local regulations for proper disposal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Demo;
