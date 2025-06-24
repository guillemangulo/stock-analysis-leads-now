
import { CheckCircle, FileText, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What If You Could Get Professional Analysis Every Morning?
          </h2>
          <p className="text-xl text-gray-600">
            Imagine waking up to a comprehensive, AI-powered market analysis 
            that explains exactly what's happening and why it matters to you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  AI-Powered Market Analysis
                </h3>
                <p className="text-gray-600">
                  Our advanced AI scans thousands of data points overnight and delivers 
                  professional-grade analysis of the most important market movements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Daily PDF Reports
                </h3>
                <p className="text-gray-600">
                  Receive a beautifully formatted PDF report every morning with 
                  key insights, sector analysis, and specific stock movements explained.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Instant Understanding
                </h3>
                <p className="text-gray-600">
                  No more wondering why your stocks moved. Get clear explanations 
                  in plain English that help you make informed decisions.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Get Your First Report Free
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
            <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-auto">Daily Market Report - March 15, 2024</span>
              </div>
              <h4 className="font-bold text-lg mb-3">Today's Key Market Movements</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span>NVIDIA (NVDA)</span>
                  <span className="text-red-600 font-bold">-8.5%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span>Microsoft (MSFT)</span>
                  <span className="text-green-600 font-bold">+3.2%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                  <span>S&P 500</span>
                  <span className="text-blue-600 font-bold">+0.8%</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded">
                <p className="text-xs text-gray-600">
                  <strong>Why NVDA dropped:</strong> Semiconductor sector rotation due to new AI regulations announced by the EU...
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Sample report preview</p>
              <div className="flex justify-center space-x-1">
                {Array.from({length: 5}).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
