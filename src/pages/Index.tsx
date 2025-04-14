
import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Brain, Recycle, BarChart3, Leaf, Cpu, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/utils/useDocumentTitle";

const Index = () => {
  useDocumentTitle('Home');
  
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-eco-700 to-tech-700 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528323273322-d81458248d40?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI-Powered E-Waste Management for a Sustainable Future
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Our innovative system uses artificial intelligence to revolutionize e-waste identification, segregation, and disposal optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-eco-500 hover:bg-eco-600">
                  <Link to="/demo">Try AI Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/features">Explore Features</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="bg-white/20 py-1 px-3 rounded-lg text-sm font-medium">
                  Supporting SDG 12: Responsible Consumption & Production
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9bbe10cc3919?auto=format&fit=crop&q=80" 
                alt="E-waste recycling visualization" 
                className="rounded-lg shadow-2xl w-full object-cover h-96 z-10 relative"
              />
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Features Overview */}
      <SectionContainer className="py-20">
        <SectionHeader 
          title="Our Innovative Technology"
          subtitle="Leveraging cutting-edge AI and IoT to transform e-waste management"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="AI-Powered Identification"
            description="Advanced deep learning models accurately identify and classify e-waste materials in real-time."
            icon={<Brain className="h-6 w-6 text-primary" />}
          />
          <FeatureCard 
            title="Waste Segregation Optimization"
            description="ML algorithms enhance precision in categorizing different types of electronic waste materials."
            icon={<Recycle className="h-6 w-6 text-primary" />}
          />
          <FeatureCard 
            title="Predictive Analytics"
            description="Data-driven insights for optimal recycling and disposal pathways for different e-waste types."
            icon={<BarChart3 className="h-6 w-6 text-primary" />}
          />
          <FeatureCard 
            title="Environmental Impact Analysis"
            description="Track sustainability metrics and measure reductions in carbon footprint and landfill waste."
            icon={<Leaf className="h-6 w-6 text-primary" />}
          />
          <FeatureCard 
            title="IoT Integration"
            description="Smart bins with sensors for automatic waste identification and real-time monitoring."
            icon={<Cpu className="h-6 w-6 text-primary" />}
          />
          <FeatureCard 
            title="Mobile Applications"
            description="User-friendly interfaces to track waste collection, recycling progress, and environmental impact."
            icon={<Smartphone className="h-6 w-6 text-primary" />}
          />
        </div>
      </SectionContainer>

      {/* Call to Action */}
      <SectionContainer className="bg-tech-50 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <SectionHeader 
            title="Join Our Mission for Responsible E-Waste Management"
            subtitle="Together, we can reduce electronic waste and build a more sustainable future"
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg" className="bg-tech-600 hover:bg-tech-700">
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/demo">Try AI Demo</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Stats Section */}
      <SectionContainer className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Making a Measurable Impact
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our AI-powered system has already made significant strides in optimizing e-waste management processes worldwide.
            </p>
            <div className="space-y-4">
              {[
                { label: "Increase in recycling efficiency", value: "35%" },
                { label: "Reduction in misclassified waste", value: "42%" },
                { label: "Decrease in processing time", value: "68%" },
                { label: "Valuable materials recovered", value: "12 tons" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mr-4">
                    <span className="text-eco-700 font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-8">
            <img 
              src="https://images.unsplash.com/photo-1587613864521-9ef8dfe617cc?auto=format&fit=crop&q=80" 
              alt="E-waste recycling facility with AI integration" 
              className="rounded-lg w-full object-cover h-80 shadow-md"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smarter Recycling Centers
              </h3>
              <p className="text-gray-600">
                Our AI solutions are deployed in recycling facilities globally, enhancing efficiency and recovery rates.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Index;
