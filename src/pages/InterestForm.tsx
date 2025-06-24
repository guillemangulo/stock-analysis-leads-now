// src/pages/InterestForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
// ① Importa el cliente
import { supabase } from "@/lib/supabase";

const InterestForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  // ② Convierte en async y envía a Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(""); // resetea errores

    // inserta en la tabla 'subscribers'
    const { error } = await supabase
      .from("subscribers")
      .insert({ email });

    if (error) {
      console.error("Error guardando email:", error.message);
      setErrorMsg("No se pudo guardar tu email. Intenta de nuevo.");
    } else {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            We've received your interest and will notify you as soon as our AI Stock Analysis Agent is ready for launch.
          </p>
          <Button 
            onClick={() => navigate("/")} 
            variant="outline" 
            className="w-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            We're Almost Ready!
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our AI Stock Analysis Agent is currently in development. We're working hard to bring you professional-grade market intelligence.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Get notified when we launch
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          
          {/* Si hay error, muestra mensaje bajo el formulario */}
          {errorMsg && (
            <p className="text-red-600 text-sm">{errorMsg}</p>
          )}

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Notify Me When Ready
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost" 
            className="text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>We respect your privacy. No spam, just updates about our launch.</p>
        </div>
      </div>
    </div>
  );
};

export default InterestForm;
