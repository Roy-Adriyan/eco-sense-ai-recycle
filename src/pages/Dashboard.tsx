import Layout from "@/components/Layout";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import StatsCard from "@/components/StatsCard";
import ChartComponent from "@/components/ChartComponent";
import useDocumentTitle from "@/utils/useDocumentTitle";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  TrendingUp, 
  PackageCheck, 
  Recycle, 
  Leaf, 
  BarChart3, 
  FileSpreadsheet, 
  Download,
  Filter,
  Calendar
} from "lucide-react";

// Updated mock data for charts with 2025 dates
const monthlyRecyclingData = [
  { name: 'Mar', Batteries: 40, 'Circuit Boards': 65, Plastics: 30, Displays: 25 },
  { name: 'Apr', Batteries: 45, 'Circuit Boards': 70, Plastics: 35, Displays: 20 },
  { name: 'May', Batteries: 60, 'Circuit Boards': 85, Plastics: 50, Displays: 40 },
  { name: 'Jun', Batteries: 75, 'Circuit Boards': 90, Plastics: 55, Displays: 45 },
];

const materialDistributionData = [
  { name: 'Circuit Boards', value: 35 },
  { name: 'Batteries', value: 25 },
  { name: 'Plastics', value: 20 },
  { name: 'Metals', value: 15 },
  { name: 'Displays', value: 5 },
];

const processingEfficiencyData = [
  { name: 'Week 1', 'Manual Process': 45, 'AI-Assisted': 70 },
  { name: 'Week 2', 'Manual Process': 48, 'AI-Assisted': 75 },
  { name: 'Week 3', 'Manual Process': 43, 'AI-Assisted': 80 },
  { name: 'Week 4', 'Manual Process': 47, 'AI-Assisted': 85 },
  { name: 'Week 5', 'Manual Process': 50, 'AI-Assisted': 90 },
  { name: 'Week 6', 'Manual Process': 49, 'AI-Assisted': 95 },
];

const recyclingGoalData = [
  { name: 'Mar', Goal: 100, Actual: 80 },
  { name: 'Apr', Goal: 100, Actual: 85 },
  { name: 'May', Goal: 100, Actual: 110 },
  { name: 'Jun', Goal: 100, Actual: 120 },
];

const Dashboard = () => {
  useDocumentTitle('Analytics Dashboard');
  
  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-br from-tech-700 to-tech-900 text-white py-14">
        <SectionContainer>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              E-Waste Analytics Dashboard
            </h1>
            <p className="text-lg mb-6">
              Monitor your organization's e-waste management performance with real-time analytics and insights.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4" />
                Last 6 Months
              </Button>
              <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/10">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm" className="bg-white text-tech-700 hover:bg-gray-100">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Stats Cards */}
      <SectionContainer className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="Total E-Waste Processed" 
            value="1,248 kg" 
            change={{ value: "12%", positive: true }}
            icon={<PackageCheck className="h-6 w-6 text-primary" />}
          />
          <StatsCard 
            title="Recycling Rate" 
            value="87.3%" 
            change={{ value: "5.2%", positive: true }}
            icon={<Recycle className="h-6 w-6 text-primary" />}
          />
          <StatsCard 
            title="Materials Recovered" 
            value="532 kg" 
            change={{ value: "8.7%", positive: true }}
            icon={<Leaf className="h-6 w-6 text-primary" />}
          />
          <StatsCard 
            title="Carbon Offset" 
            value="2.5 tons" 
            change={{ value: "15%", positive: true }}
            icon={<TrendingUp className="h-6 w-6 text-primary" />}
          />
        </div>
      </SectionContainer>

      {/* Charts Section */}
      <SectionContainer className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartComponent 
            type="area" 
            data={monthlyRecyclingData} 
            title="Monthly E-Waste Collection by Category"
            subtitle="Tracking collection volumes across different e-waste types"
          />
          <ChartComponent 
            type="pie" 
            data={materialDistributionData} 
            title="Material Distribution"
            subtitle="Breakdown of e-waste by material composition"
          />
        </div>
      </SectionContainer>

      <SectionContainer className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartComponent 
            type="line" 
            data={processingEfficiencyData} 
            title="Processing Efficiency Comparison"
            subtitle="AI-assisted vs. manual processing efficiency rates"
          />
          <ChartComponent 
            type="bar" 
            data={recyclingGoalData} 
            title="Recycling Goals vs. Actual"
            subtitle="Monthly comparison of recycling targets and achievements"
          />
        </div>
      </SectionContainer>

      {/* Detailed Insights */}
      <SectionContainer className="py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Key Insights & Recommendations</h2>
            <Button variant="outline" size="sm">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Download Full Report
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Increasing Recycling Efficiency</h3>
                <p className="text-gray-600 mt-1">
                  Your AI-assisted processing is showing a 42% higher efficiency rate compared to manual methods. Consider expanding AI implementation to other processing stages.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <div className="p-2 bg-amber-100 rounded-full">
                  <BarChart className="h-5 w-5 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Battery Collection Opportunity</h3>
                <p className="text-gray-600 mt-1">
                  Battery collection rates are lower than other categories. Consider implementing a targeted battery collection campaign to improve recycling rates in this category.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <PieChart className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Material Recovery Success</h3>
                <p className="text-gray-600 mt-1">
                  Your precious metal recovery from circuit boards has increased by 15% this quarter. This improvement has contributed significantly to your overall recycling value.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <LineChart className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Exceeding Recycling Goals</h3>
                <p className="text-gray-600 mt-1">
                  You've exceeded recycling goals for the past two months by an average of 15%. Consider setting more ambitious targets for the upcoming quarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Recent Activity Table */}
      <SectionContainer className="py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Processing Activity</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Processing Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recovery Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { date: "2025-03-15", batchId: "B-1234", type: "Mixed Electronics", weight: "78 kg", status: "Completed", recoveryRate: "92%" },
                  { date: "2025-03-14", batchId: "B-1233", type: "Computers", weight: "125 kg", status: "Completed", recoveryRate: "88%" },
                  { date: "2025-04-12", batchId: "B-1232", type: "Mobile Devices", weight: "45 kg", status: "Completed", recoveryRate: "95%" },
                  { date: "2025-04-10", batchId: "B-1231", type: "Printers", weight: "112 kg", status: "Completed", recoveryRate: "82%" },
                  { date: "2025-04-08", batchId: "B-1230", type: "Circuit Boards", weight: "56 kg", status: "Completed", recoveryRate: "97%" },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.batchId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.recoveryRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-right">
            <Button variant="outline" size="sm">
              <BarChart3 className="mr-2 h-4 w-4" />
              View All Activity
            </Button>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Dashboard;
