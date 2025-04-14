
import { useState } from "react";
import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import ImageUploader from "@/components/ImageUploader";
import AIResultsCard from "@/components/AIResultsCard";
import useDocumentTitle from "@/utils/useDocumentTitle";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Upload, 
  CircleCheck, 
  CircleAlert, 
  CircleX,
  Info
} from "lucide-react";

// Mock data for demo purposes
const mockCategories = [
  { name: "Circuit Board", probability: 0.87, recyclable: true },
  { name: "Battery", probability: 0.09, recyclable: false },
  { name: "Display Panel", probability: 0.03, recyclable: true },
  { name: "Plastic Casing", probability: 0.01, recyclable: true }
];

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
  
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    setFile(file);
    setResults(null);
    setError(null);
  };

  const handleAnalyze = () => {
    if (!file) {
      setError("Please upload an image first");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    // Simulate API call with timeout
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults(mockCategories);
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setResults(null);
    setError(null);
  };

  const handleExampleClick = (example: typeof demoExamples[0]) => {
    setIsAnalyzing(true);
    setResults(null);
    setError(null);

    // Simulate loading an example
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults(mockCategories);
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

              <ImageUploader onImageUpload={handleImageUpload} />

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
                    This is a demonstration using simulated results. In a production environment, the AI would connect to trained models.
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
