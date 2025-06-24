
import { TrendingDown, AlertTriangle, Clock } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Are You Tired of This?
          </h2>
          <p className="text-xl text-gray-600">
            Every serious investor faces these frustrating scenarios daily...
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-red-500 mb-4">
              <TrendingDown className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Missing Major Moves
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You check your portfolio and see a stock is down 15%, but have no idea why. 
              By the time you research it, the opportunity to react is gone.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-orange-500 mb-4">
              <Clock className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Endless Research Time
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Spending hours every morning reading financial news, analyst reports, 
              and trying to piece together market movements before work.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-red-600 mb-4">
              <AlertTriangle className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Information Overload
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Drowning in financial data but lacking the professional analysis 
              to understand what actually matters for your investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
