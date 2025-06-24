
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How is this different from free financial news?",
      answer: "Financial news tells you what happened. Our AI analysis tells you WHY it happened and what it means for your investments. We process thousands of data points to give you professional-grade insights in minutes, not hours."
    },
    {
      question: "What time do I receive the reports?",
      answer: "Reports are delivered every trading day by 6:00 AM EST, giving you time to review before market open at 9:30 AM. Weekend reports cover Friday's close and Monday's pre-market outlook."
    },
    {
      question: "Can I customize the analysis for my portfolio?",
      answer: "Yes! You can specify which stocks, sectors, or market caps you're most interested in. The AI will prioritize these in your daily reports while still covering major market movements."
    },
    {
      question: "Is this suitable for beginners?",
      answer: "Absolutely. Our reports explain market movements in clear, jargon-free language. We include definitions for technical terms and focus on actionable insights rather than complex trading strategies."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 7-day free trial and a 30-day money-back guarantee. If our reports don't help you make better investment decisions, we'll refund your subscription completely."
    },
    {
      question: "How accurate are the AI predictions?",
      answer: "We don't make predictions - we provide analysis. Our AI explains why markets moved based on actual data, news, and historical patterns. This helps you understand market dynamics rather than relying on forecasts."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our AI market analysis service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CollapsibleTrigger className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${openItems.includes(index) ? 'transform rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </CollapsibleContent>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
