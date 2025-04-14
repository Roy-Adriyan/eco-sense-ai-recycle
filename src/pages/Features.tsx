
import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/utils/useDocumentTitle";
import { 
  Brain, 
  Cpu, 
  Smartphone, 
  Layers, 
  MoveUpRight, 
  BarChart3, 
  Recycle, 
  Leaf, 
  CircleDot, 
  Database, 
  Gauge,
  Zap
} from "lucide-react";

const Features = () => {
  useDocumentTitle('Features');
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-tech-700 to-tech-900 text-white py-24">
        <SectionContainer>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Innovative Features
            </h1>
            <p className="text-xl mb-8">
              Explore how our AI-powered technology is revolutionizing e-waste management
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* AI Identification Section */}
      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-tech-100 text-tech-800 mb-4">
              <Brain className="h-4 w-4 mr-2" />
              AI Technology
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              AI-Powered Waste Identification
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our system uses advanced deep learning models to accurately identify and classify different types of e-waste in real-time.
            </p>
            <ul className="space-y-4">
              {[
                { 
                  icon: <Layers className="h-5 w-5 text-primary" />,
                  title: "Convolutional Neural Networks",
                  description: "Specialized CNN models that can recognize e-waste categories with over 95% accuracy"
                },
                { 
                  icon: <MoveUpRight className="h-5 w-5 text-primary" />,
                  title: "Real-time Recognition",
                  description: "Instant classification of e-waste components including batteries, circuit boards, screens, and plastics"
                },
                { 
                  icon: <Database className="h-5 w-5 text-primary" />,
                  title: "Continuous Learning",
                  description: "Self-improving algorithms that get better over time by learning from new data inputs"
                }
              ].map((item, index) => (
                <li key={index} className="flex">
                  <div className="mr-3 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link to="/demo">Try AI Demo</Link>
              </Button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <img 
              src="https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?auto=format&fit=crop&q=80" 
              alt="AI vision analyzing electronic components" 
              className="rounded-lg w-full h-80 object-cover shadow-md"
            />
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Computer Vision in Action
              </h3>
              <p className="text-gray-600">
                Our AI models can identify multiple materials and components within a single e-waste item, enabling precise recycling.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Waste Segregation Section */}
      <SectionContainer className="py-20 bg-eco-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80" 
              alt="Automated waste segregation system" 
              className="rounded-lg w-full h-80 object-cover shadow-md"
            />
            <div className="grid grid-cols-3 gap-4 mt-6">
              {["Circuit Boards", "Batteries", "Displays", "Plastics", "Metals", "Cables"].map((item, index) => (
                <div key={index} className="bg-white px-4 py-3 rounded-lg shadow-sm text-center">
                  <p className="text-sm font-medium text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-eco-100 text-eco-800 mb-4">
              <Recycle className="h-4 w-4 mr-2" />
              Segregation Optimization
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Intelligent Waste Segregation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              ML algorithms optimize the segregation process, ensuring precise categorization of different e-waste materials.
            </p>
            <ul className="space-y-4">
              {[
                { 
                  icon: <CircleDot className="h-5 w-5 text-primary" />,
                  title: "Multi-level Classification",
                  description: "Hierarchical sorting that breaks down e-waste into specific material categories"
                },
                { 
                  icon: <Zap className="h-5 w-5 text-primary" />,
                  title: "Reinforcement Learning",
                  description: "Adaptive sorting algorithms that improve with each iteration through continuous feedback"
                },
                { 
                  icon: <Gauge className="h-5 w-5 text-primary" />,
                  title: "High-throughput Processing",
                  description: "Capable of processing large volumes of e-waste with minimal human intervention"
                }
              ].map((item, index) => (
                <li key={index} className="flex">
                  <div className="mr-3 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* IoT Integration */}
      <SectionContainer className="py-20">
        <SectionHeader 
          title="IoT Integration & Monitoring"
          subtitle="Smart devices working together to create an efficient e-waste management ecosystem"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Cpu className="h-10 w-10 text-tech-600" />,
              title: "Smart Bins & Sensors",
              description: "IoT-enabled collection points that automatically identify, sort, and track e-waste materials"
            },
            {
              icon: <Smartphone className="h-10 w-10 text-tech-600" />,
              title: "Mobile Applications",
              description: "User-friendly interfaces for consumers and businesses to locate drop-off points and track their recycling impact"
            },
            {
              icon: <Database className="h-10 w-10 text-tech-600" />,
              title: "Cloud-based System",
              description: "Centralized platform for real-time data collection, analysis, and reporting across the entire network"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-tech-50 rounded-lg">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Environmental Impact */}
      <SectionContainer className="py-20 bg-eco-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-eco-100 text-eco-800 mb-4">
              <Leaf className="h-4 w-4 mr-2" />
              Environmental Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Measurable Sustainability Improvements
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our system provides comprehensive analytics on environmental impact, allowing organizations to track their sustainability progress.
            </p>
            <div className="space-y-6">
              {[
                { 
                  title: "Life Cycle Assessment",
                  description: "Detailed analysis of environmental impacts throughout the product lifecycle",
                  metric: "35% reduction in carbon footprint"
                },
                { 
                  title: "Resource Recovery Tracking",
                  description: "Monitor reclaimed precious metals and materials from recycled e-waste",
                  metric: "12 tons of valuable materials recovered"
                },
                { 
                  title: "Landfill Diversion Metrics",
                  description: "Measure the amount of e-waste diverted from landfills",
                  metric: "42% reduction in landfill e-waste"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  <div className="mt-2 inline-block px-3 py-1 bg-eco-100 text-eco-800 rounded-full text-sm font-medium">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1503756234508-e32369269deb?auto=format&fit=crop&q=80" 
              alt="Environmental impact visualization" 
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Analytics Dashboard */}
      <SectionContainer className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-tech-100 text-tech-800 mb-4">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics Dashboard
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Comprehensive Data Insights
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our interactive dashboard provides real-time analytics and reporting on your e-waste management performance.
          </p>
          <Button asChild size="lg">
            <Link to="/dashboard">View Dashboard Demo</Link>
          </Button>
          <div className="mt-12">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
              alt="Analytics dashboard interface" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-gradient-to-r from-eco-700 to-tech-700 text-white py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize E-Waste Management?</h2>
          <p className="text-xl mb-8">
            Experience the power of AI in optimizing your e-waste processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-tech-700 hover:bg-gray-100">
              <Link to="/demo">Try AI Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Features;
