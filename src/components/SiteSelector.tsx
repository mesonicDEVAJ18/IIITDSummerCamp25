import React from 'react';
import { Sun, BookOpen, ArrowRight } from 'lucide-react';

interface SiteSelectorProps {
  onSelect: (site: 'summer' | 'tlf') => void;
}

export const SiteSelector: React.FC<SiteSelectorProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 pattern-grid opacity-10" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/20 to-transparent" />
        
        {/* Decorative Shapes */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Large yellow square - top left */}
          <div className="absolute top-10 left-5 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-yellow-400 rounded-xl rotate-12 opacity-20 animate-float" />

          {/* Medium blue rectangle - top center */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-20 sm:h-24 bg-blue-600 rounded-lg -rotate-6 opacity-20 animate-float delay-100" />

          {/* Tall yellow rectangle - left middle */}
          <div className="absolute top-1/2 left-60 w-16 sm:w-20 h-40 sm:h-60 bg-yellow-400 rounded-md rotate-6 opacity-20 animate-float delay-200" />

          {/* Square blue - center right */}
          <div className="absolute top-1/3 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-blue-600 rounded-xl rotate-12 opacity-20 animate-float delay-300" />

          {/* Large blue rectangle - bottom right */}
          <div className="absolute bottom-10 right-5 sm:right-20 w-40 sm:w-64 h-24 sm:h-40 bg-blue-600 rounded-xl -rotate-12 opacity-20 animate-float delay-400" />

          {/* Yellow square - bottom center */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-yellow-400 rounded-lg rotate-12 opacity-20 animate-float delay-500" />

          {/* Small blue square - bottom left */}
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-600 rounded-md -rotate-6 opacity-20 animate-float delay-600" />
        </div>

      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block summer-card bg-white p-6 mb-8">
            <img 
              src="/IIITDLogo.png"
              alt="IIITD Logo"
              className="h-24 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 relative leading-tight text-center space-y-2">
            {/* Outline layer */}
            <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none text-center space-y-2">
              <div className="text-blue-600 drop-shadow-[4px_4px_0_#facc15]">IIITD</div>
              <div className="text-yellow-400 drop-shadow-[4px_4px_0_#2563eb]">SUMMER</div>
              <div className="text-yellow-400 drop-shadow-[4px_4px_0_#2563eb]">PROGRAMS</div>
            </div>

            {/* Main visible text */}
            <div className="relative text-blue-600">IIITD</div>
            <div className="relative text-yellow-400">SUMMER</div>
            <div className="relative text-yellow-400">PROGRAMS</div>
          </h1>

          <p className="text-2xl text-gray-600">Choose your program</p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Summer Camp Card */}
          <button
            onClick={() => onSelect('summer')}
            className="group text-left"
          >
            <div className="summer-card bg-white p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <Sun className="h-12 w-12 text-yellow-400" />
                <h2 className="text-3xl font-black">
                  <span className="text-yellow-400">SUMMER</span>
                  <br />
                  <span className="text-blue-600">CAMP 2025</span>
                </h2>
              </div>
              
              <div className="summer-outline mb-6 overflow-hidden">
                <img 
                  src="/SummerCampLogo.svg"
                  alt="Summer Camp"
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <p className="text-black mb-6">
                <strong>For All Students of Grade 6 to 8.</strong>
              </p>
              
              <div className="flex items-center text-yellow-400 font-bold group-hover:translate-x-2 transition-transform">
                Visit Summer Camp <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
          </button>

          {/* TLF Card */}
          <button
            onClick={() => onSelect('tlf')}
            className="group text-left"
          >
            <div className="tlf-card bg-white p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="h-12 w-12 text-blue-600" />
                <h2 className="text-3xl font-black">
                  <span className="text-blue-600">TEACH LIKE</span>
                  <br />
                  <span className="text-yellow-400">A FRIEND</span>
                </h2>
              </div>
              
             <div className="tlf-outline mb-6 overflow-hidden h-48 flex items-center justify-center">
                <img 
                  src="/TLFLogo.svg"
                  alt="TLF Program"
                  className="h-40 object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
                
              <p className="text-black mb-6">
                <strong>For Girl Students of Grade 9 to 12.</strong>
              </p>
              
              <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                Visit TLF Program <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 text-sm text-gray-500">
          <div className="flex justify-center items-center gap-4 mb-2">
            <a 
              href="www.linkedin.com/in/devajrathore" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 inline-block" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.99h5v14.01H0V8.99zm7.5 0H12v2.11h.07c.62-1.17 2.13-2.39 4.4-2.39 4.71 0 5.58 3.1 5.58 7.13v7.16h-5V16c0-1.43-.03-3.28-2-3.28s-2.31 1.56-2.31 3.17v7.11H7.5V8.99z"/>
              </svg>
            </a>
            <a 
              href="https://github.com/mesonicDEVAJ18" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-800 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 inline-block" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 
                1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 
                1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 
                0-1.31.468-2.38 1.236-3.22-.135-.303-.54-1.523.105-3.176 
                0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.005-.405c1.02.005 2.045.138 
                3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 
                3.176.765.84 1.23 1.91 1.23 3.22 
                0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21 
                0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 
                22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
          <p>Crafted with 💙 by Devaj Rathore &middot; <a href="mailto:devaj23190@iiitd.ac.in" className="hover:underline hover:text-blue-600">devaj23190@iiitd.ac.in</a></p>
        </footer>
      </div>
    </div>
  );
};