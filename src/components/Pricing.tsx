import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-gray-300">
            No risk, no commitment. See the difference professional analysis makes.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Professional Plan</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">
                Less than $2 per trading day for professional market intelligence
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {[
                "Daily market analysis reports",
                "Pre-market delivery by 6 AM",
                "Professional PDF format",
                "Sector and individual stock analysis",
                "Risk assessment and alerts",
                "Email and mobile notifications",
                "7-day free trial",
                "Cancel anytime"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/interest")}
            >
              Start Free 7-Day Trial
            </Button>
            
            <div className="text-center mt-4 text-sm text-gray-500">
              No credit card required • Cancel anytime • Full refund within 30 days
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-300 leading-relaxed">
            <strong>Money-Back Guarantee:</strong> If our reports don't help you make better investment decisions 
            within 30 days, we'll refund every penny. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
