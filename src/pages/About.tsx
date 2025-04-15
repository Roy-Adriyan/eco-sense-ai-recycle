import React from 'react';
import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/utils/useDocumentTitle";
import { 
  Globe, 
  Clock, 
  Goal, 
  LineChart, 
  BarChart3, 
  Leaf,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const About = () => {
  useDocumentTitle('About Us');
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-eco-700 to-eco-900 text-white py-24">
        <SectionContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Mission
            </h1>
            <p className="text-xl mb-6">
              Revolutionizing e-waste management through AI and IoT to create a more sustainable future.
            </p>
            <div className="inline-block bg-white/20 py-2 px-4 rounded-lg">
              Aligned with Sustainable Development Goal 12: Responsible Consumption and Production
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Vision & Mission */}
      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-eco-100 text-eco-800 mb-4">
              <Globe className="h-4 w-4 mr-2" />
              Our Vision
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              A World Where E-Waste is Fully Optimized
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We envision a future where electronic waste is no longer a burden on our environment but an opportunity for sustainable resource recovery.
            </p>
            <div className="space-y-4">
              {[
                "Automated waste identification through AI",
                "Optimized recycling processes through machine learning",
                "Reduced landfill dependency through efficient material recovery",
                "Enhanced sustainability through predictive analytics"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-eco-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" 
              alt="E-waste recycling facility" 
              className="rounded-lg shadow-lg w-full object-cover h-80"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-40 border border-eco-100">
              <p className="text-4xl font-bold text-eco-600">95%</p>
              <p className="text-sm text-gray-600">Classification accuracy</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-40 border border-eco-100">
              <p className="text-4xl font-bold text-eco-600">35%</p>
              <p className="text-sm text-gray-600">Recycling efficiency improvement</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Timeline */}
      <SectionContainer className="py-20 bg-eco-50">
        <SectionHeader 
          title="Our Implementation Plan"
          subtitle="A strategic phased approach to revolutionize e-waste management"
        />
        <div className="max-w-4xl mx-auto mt-12">
          {[
            {
              phase: "Phase 1",
              title: "Research & Analysis",
              duration: "Weeks 1-2",
              description: "Conducting research on existing AI-based waste management solutions and defining project scope."
            },
            {
              phase: "Phase 2",
              title: "Data Collection & Processing",
              duration: "Weeks 3-4",
              description: "Collecting and preprocessing datasets of e-waste images for model training."
            },
            {
              phase: "Phase 3",
              title: "Model Development & Training",
              duration: "Weeks 5-8",
              description: "Developing CNN-based classification models and optimizing their performance."
            },
            {
              phase: "Phase 4",
              title: "Decision Framework Development",
              duration: "Weeks 9-10",
              description: "Designing AI-driven frameworks for disposal optimization and integrating ML models."
            },
            {
              phase: "Phase 5",
              title: "IoT Integration & Monitoring",
              duration: "Weeks 11-12",
              description: "Deploying IoT-enabled smart bins and implementing edge computing solutions."
            },
            {
              phase: "Phase 6",
              title: "Performance Evaluation",
              duration: "Weeks 13-16",
              description: "Conducting field tests to assess scalability and usability in real-world conditions."
            },
            {
              phase: "Phase 7",
              title: "Final Documentation",
              duration: "Weeks 17-18",
              description: "Publishing findings and providing recommendations for policy integration."
            }
          ].map((item, index, array) => (
            <div key={index} className="relative flex">
              {/* Timeline connector */}
              {index < array.length - 1 && (
                <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-eco-200"></div>
              )}
              
              {/* Timeline item */}
              <div className="flex flex-col items-center mr-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-eco-600 text-white">
                  {index + 1}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm mb-8 border border-eco-100 flex-grow">
                <div className="flex justify-between">
                  <div>
                    <div className="text-xs font-semibold text-eco-600 uppercase">{item.phase}</div>
                    <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                  </div>
                  <div className="flex items-center bg-eco-100 text-eco-800 px-3 py-1 rounded-full text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.duration}
                  </div>
                </div>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* SDG Alignment */}
      <SectionContainer className="py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-eco-100 text-eco-800 mb-4">
            <Goal className="h-4 w-4 mr-2" />
            SDG 12 Alignment
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Advancing Responsible Consumption and Production
          </h2>
          <p className="text-lg text-gray-600">
            Our project directly contributes to Sustainable Development Goal 12 through innovative e-waste management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              target: "Target 12.2",
              title: "Efficient Resource Recovery",
              description: "Our AI systems optimize the recovery of valuable materials like gold and copper through enhanced recycling processes.",
              icon: <LineChart className="h-6 w-6 text-white" />
            },
            {
              target: "Target 12.4",
              title: "Environmentally Sound Disposal",
              description: "Proper identification of hazardous components ensures safe and environmentally sound disposal methods.",
              icon: <Leaf className="h-6 w-6 text-white" />
            },
            {
              target: "Target 12.5",
              title: "Reduction of Landfill Waste",
              description: "Advanced sorting techniques significantly reduce e-waste sent to landfills by directing materials to appropriate recycling streams.",
              icon: <BarChart3 className="h-6 w-6 text-white" />
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-eco-600 w-fit">
                    {item.icon}
                  </div>
                </div>
                <div className="inline-block px-3 py-1 bg-eco-100 text-eco-800 rounded-full text-sm font-medium mb-3">
                  {item.target}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Team Section */}
      <SectionContainer className="py-20 bg-gray-50">
        <SectionHeader 
          title="Our Expert Team"
          subtitle="Passionate professionals dedicated to revolutionizing e-waste management"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 justify-center">
          {[
            {
              name: "Aryaman Chugh",
              role: "CSE AIML Student",
              bio: "Specializing in data-driven approaches to environmental sustainability and circular economy."
            },
            {
              name: "Adriyan Roy",
              role: "CSE AIML Student",
              image: "/lovable-uploads/0c52af70-b27a-42ee-a06d-bd350a372e60.png",
              bio: "Specializing in data-driven approaches to environmental sustainability and circular economy."
            }
          ].map((person, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 max-w-md w-full">
                <div className="text-center">
                  {person.image && (
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="text-eco-600 font-medium mb-3">{person.role}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="py-20">
        <div className="bg-gradient-to-r from-eco-700 to-tech-700 rounded-xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8">
              Experience our AI-powered e-waste management solution and be part of the sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-eco-700 hover:bg-gray-100">
                <Link to="/demo">
                  Try the AI Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default About;
