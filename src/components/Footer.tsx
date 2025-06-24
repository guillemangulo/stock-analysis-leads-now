
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const navigate = useNavigate();
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <footer className="bg-slate-900 text-white py-20" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Never Miss Another Market Move?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors who start every trading day with confidence.
            </p>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8"
              onClick={() => navigate("/interest")}
            >
              Start Your Free 7-Day Trial
            </Button>
          </div>
          
          <div className={`flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-400 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              7-Day Free Trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Cancel Anytime
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              2,847+ Active Subscribers
            </div>
          </div>
          
          <div className={`border-t border-gray-700 pt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-2xl font-bold">AI Stock Analysis Agent</div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a>
              </div>
            </div>
            <div className="text-center mt-6 text-gray-500">
              © 2024 AI Stock Analysis Agent. All rights reserved. 
              <br />
              <span className="text-xs">Disclaimer: Not financial advice. Past performance does not guarantee future results.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
