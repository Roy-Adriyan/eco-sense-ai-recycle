
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  probability: number;
  recyclable: boolean;
}

interface AIResultsCardProps {
  isAnalyzing: boolean;
  results: Category[] | null;
  className?: string;
  error?: string | null;
}

const AIResultsCard = ({ isAnalyzing, results, className, error }: AIResultsCardProps) => {
  // Helper to format probability as percentage
  const formatProbability = (prob: number) => {
    return `${(prob * 100).toFixed(1)}%`;
  };

  if (error) {
    return (
      <div className={cn("bg-red-50 border border-red-100 rounded-lg p-6", className)}>
        <div className="flex">
          <AlertCircle className="h-6 w-6 text-red-500 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-medium text-red-800">Error</h3>
            <p className="mt-2 text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className={cn("bg-white border border-gray-200 rounded-lg p-6", className)}>
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-700">Analyzing e-waste image...</p>
          <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
        </div>
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className={cn("bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center", className)}>
        <p className="text-gray-500 text-center py-8">
          Upload an image to analyze its e-waste classification
        </p>
      </div>
    );
  }

  // Get the highest probability category
  const topCategory = [...results].sort((a, b) => b.probability - a.probability)[0];

  return (
    <div className={cn("bg-white border border-gray-200 rounded-lg p-6", className)}>
      <div className="space-y-6">
        <div className="bg-eco-50 rounded-lg p-4 border border-eco-100">
          <h3 className="font-medium text-gray-900 mb-1">Primary Classification</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold text-gray-900">{topCategory.name}</p>
              <div className="flex items-center mt-1">
                {topCategory.recyclable ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
                )}
                <span className="text-sm text-gray-700">
                  {topCategory.recyclable 
                    ? "Recyclable component" 
                    : "Special disposal required"}
                </span>
              </div>
            </div>
            <div className="text-2xl font-bold text-primary">
              {formatProbability(topCategory.probability)}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-3">All Detected Categories</h3>
          <div className="space-y-2">
            {results.map((category, index) => (
              <div 
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <div className="flex items-center">
                  {category.recyclable ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                  )}
                  <span className="text-gray-900">{category.name}</span>
                </div>
                <div className="text-gray-700 font-medium">
                  {formatProbability(category.probability)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-tech-50 rounded-lg p-4 border border-tech-100">
          <h3 className="font-medium text-gray-900 mb-2">Disposal Recommendation</h3>
          <p className="text-gray-700">
            {topCategory.recyclable 
              ? "This item contains valuable recyclable materials. Please take it to your nearest e-waste recycling center."
              : "This item requires special handling due to hazardous components. Do not dispose in regular trash. Take to a specialized e-waste facility."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIResultsCard;
