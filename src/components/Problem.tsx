
import { TrendingDown, AlertTriangle, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Problem = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section className="py-20 bg-gray-50" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Are You Tired of This?
          </h2>
          <p className="text-xl text-gray-600">
            Every serious investor faces these frustrating scenarios daily...
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: TrendingDown,
              title: "Missing Major Moves",
              description: "You check your portfolio and see a stock is down 15%, but have no idea why. By the time you research it, the opportunity to react is gone.",
              color: "red"
            },
            {
              icon: Clock,
              title: "Endless Research Time", 
              description: "Spending hours every morning reading financial news, analyst reports, and trying to piece together market movements before work.",
              color: "orange"
            },
            {
              icon: AlertTriangle,
              title: "Information Overload",
              description: "Drowning in financial data but lacking the professional analysis to understand what actually matters for your investments.",
              color: "red"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`text-${item.color}-500 mb-4`}>
                <item.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
