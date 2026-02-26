import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Home, Phone, MapPin, ArrowRight } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const [countdown, setCountdown] = useState(8);

  // Auto-redirect to homepage after 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLocation("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [setLocation]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#1a1a1a] px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Large 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-[#c8a45a] mb-4 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-2 leading-relaxed">
          Sorry, this page doesn't exist on our new website.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Redirecting you to our homepage in {countdown} seconds...
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center justify-center gap-2 bg-[#c8a45a] hover:bg-[#b8944a] text-[#1a1a1a] font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Homepage
          </button>
          <button
            onClick={() => setLocation("/carpets")}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 border border-white/20"
          >
            Our Flooring
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setLocation("/contact")}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 border border-white/20"
          >
            <Phone className="w-4 h-4" />
            Contact Us
          </button>
        </div>

        {/* Helpful info */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-gray-400 text-sm mb-3">
            Looking for Usher Flooring? We've moved!
          </p>
          <div className="flex items-center justify-center gap-2 text-[#c8a45a]">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">
              Now based in Wickford, Essex — serving London, Essex &amp;
              surrounding areas
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400 mt-2">
            <Phone className="w-4 h-4" />
            <a
              href="tel:01277711629"
              className="text-sm hover:text-[#c8a45a] transition-colors"
            >
              01277 711 629
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
