
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Portfolio Manager",
      content: "This has completely changed how I start my trading day. Instead of spending 2 hours researching, I get everything I need in a 5-minute read.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Day Trader",
      content: "The AI catches patterns I would have missed. Last week it flagged a semiconductor rotation that saved me from a 12% loss on my NVDA position.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Jennifer Kim",
      role: "Investment Advisor",
      content: "My clients love that I can explain market movements clearly. The reports give me talking points that make me look like the expert they pay me to be.",
      rating: 5,
      avatar: "JK"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Join 2,847+ Investors Who Never Miss a Move
          </h2>
          <p className="text-xl text-gray-600">
            See what professional investors are saying about our daily reports
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {Array.from({length: testimonial.rating}).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
