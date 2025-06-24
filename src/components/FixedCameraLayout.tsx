
import React from 'react';
import { useFixedCameraScroll } from '@/hooks/useFixedCameraScroll';
import Hero from './Hero';
import Problem from './Problem';
import Solution from './Solution';
import Features from './Features';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';

const FixedCameraLayout = () => {
  const { scrollProgress, currentSection } = useFixedCameraScroll();

  // Create enough scroll height for all sections
  const scrollHeight = '800vh'; // 8 sections * 100vh each

  const renderCurrentContent = () => {
    switch (currentSection) {
      case 0:
        return <Hero />;
      case 1:
        return (
          <div className="fixed inset-0 z-10">
            <Hero />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Problem />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="fixed inset-0 z-10">
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <Solution />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="fixed inset-0 z-10 bg-gray-50 flex items-center justify-center">
            <Features />
          </div>
        );
      case 4:
        return (
          <div className="fixed inset-0 z-10 bg-white flex items-center justify-center">
            <Testimonials />
          </div>
        );
      case 5:
        return (
          <div className="fixed inset-0 z-10 bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
            <Pricing />
          </div>
        );
      case 6:
        return (
          <div className="fixed inset-0 z-10 bg-gray-50 flex items-center justify-center">
            <FAQ />
          </div>
        );
      case 7:
      default:
        return (
          <div className="fixed inset-0 z-10 bg-gray-900 flex items-center justify-center">
            <Footer />
          </div>
        );
    }
  };

  return (
    <div className="relative">
      {/* Scroll height container */}
      <div style={{ height: scrollHeight }} className="relative">
        {/* Fixed camera viewport */}
        <div className="fixed inset-0 overflow-hidden">
          {renderCurrentContent()}
        </div>
        
        {/* Progress indicator */}
        <div className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
          Section {currentSection + 1} of 8
        </div>
        
        {/* Scroll progress bar */}
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/20 z-50">
          <div 
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FixedCameraLayout;
