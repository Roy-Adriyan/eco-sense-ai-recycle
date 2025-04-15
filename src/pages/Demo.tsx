
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import AIResultsCard from "@/components/AIResultsCard";
import useDocumentTitle from "@/utils/useDocumentTitle";
import axios from "axios";
import DemoHero from "@/components/demo/DemoHero";
import ImageUploadSection from "@/components/demo/ImageUploadSection";
import DemoExamples from "@/components/demo/DemoExamples";
import { demoExamples } from "@/data/demoExamples";
import { recyclingGuidelines } from "@/data/recyclingGuidelines";
import type { DemoExample, AIResult } from "@/types/demo";
import { CircleAlert, CircleX } from "lucide-react";

const Demo = () => {
  useDocumentTitle('AI Demo');
  
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AIResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      setPreviewURL(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onloadend = () => {
        setFileDataURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewURL(null);
      setFileDataURL(null);
    }

    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [file]);

  const handleFileChange = (newFile: File) => {
    setFile(newFile);
    setResults(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file || !fileDataURL) {
      setError("Please upload an image first");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
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

      const processedResults = processApiResponse(response.data);
      setResults(processedResults);
    } catch (err) {
      console.error("API Error:", err);
      setError("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const processApiResponse = (data: any): AIResult[] => {
    if (!data.predictions || data.predictions.length === 0) {
      return [];
    }

    return data.predictions.map((prediction: any) => {
      const className = prediction.class.toLowerCase();
      return {
        name: prediction.class,
        probability: prediction.confidence,
        recyclable: recyclingGuidelines[className]?.recyclable ?? true
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

  const handleExampleClick = (example: DemoExample) => {
    setIsAnalyzing(true);
    setResults(null);
    setError(null);

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
      <DemoHero />
      
      <SectionContainer className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ImageUploadSection
              file={file}
              previewURL={previewURL}
              onFileChange={handleFileChange}
              onReset={handleReset}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
            />

            <AIResultsCard 
              isAnalyzing={isAnalyzing}
              results={results}
              error={error}
            />
          </div>

          <div className="space-y-8">
            <DemoExamples
              examples={demoExamples}
              onExampleClick={handleExampleClick}
            />

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
