
import React from "react";
import { Info } from "lucide-react";
import { DemoExample } from "@/types/demo";

interface DemoExamplesProps {
  examples: DemoExample[];
  onExampleClick: (example: DemoExample) => void;
}

const DemoExamples: React.FC<DemoExamplesProps> = ({ examples, onExampleClick }) => {
  return (
    <div className="bg-eco-50 rounded-lg shadow-sm p-6 border border-eco-100">
      <div className="flex items-center mb-4">
        <Info className="h-5 w-5 text-eco-700 mr-2" />
        <h2 className="text-xl font-semibold">Demo Examples</h2>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Click on any example to see how our AI classifies common e-waste items.
      </p>
      
      <div className="space-y-3">
        {examples.map((example, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-3 flex items-center cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
            onClick={() => onExampleClick(example)}
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
  );
};

export default DemoExamples;
