
import React from "react";
import SectionContainer from "@/components/SectionContainer";

const DemoHero = () => {
  return (
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
  );
};

export default DemoHero;
