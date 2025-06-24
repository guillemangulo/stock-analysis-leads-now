import { Clock, Shield, TrendingUp, BarChart, FileText, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Features = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const features = [
    {
      icon: Clock,
      title: "Delivered by 6 AM",
      description: "Get your market analysis before the opening bell, every trading day."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analysis",
      description: "AI processes overnight market data, news, and global events instantly."
    },
    {
      icon: FileText,
      title: "Professional PDFs",
      description: "Beautifully formatted reports you can save, share, or print."
    },
    {
      icon: BarChart,
      title: "Sector Breakdown",
      description: "Understand which sectors are moving and why it matters."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Get clear risk levels for major market movements and your holdings."
    },
    {
      icon: Zap,
      title: "Actionable Insights",
      description: "Not just data - get specific recommendations you can act on."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Everything You Need to Stay Ahead
          </h2>
          <p className="text-xl text-gray-600">
            Professional-grade market intelligence designed for serious investors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
