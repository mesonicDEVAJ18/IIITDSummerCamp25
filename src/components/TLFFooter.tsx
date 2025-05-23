import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const TLFFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-blue-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-2 rounded-full inline-flex items-center justify-center">
                <img 
                  src="/TLFLogo.svg" 
                  alt="Summer Camp Logo"
                  className="h-10 w-10"
                />
              </div>
              <div className="ml-2 text-2xl font-black">
                <span className="text-white">TEACH LIKE A</span>
                <span className="text-yellow-400">FRIEND</span>
              </div>
            </div>
            <p className="mb-6 text-blue-100">
              An innovative mentorship program fostering STEM education and holistic development
              for girl students.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/summercampiiitd?igsh=cnJlbnpucHBpYTI2&utm_source=qr" className="tlf-button p-2">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/summer-camp-iiitd/" className="tlf-button p-2">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-blue-100 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#subjects" className="text-blue-100 hover:text-yellow-400 transition-colors">Subjects</a></li>
              <li><a href="#Schedule" className="text-blue-100 hover:text-yellow-400 transition-colors">Schedule</a></li>
              {/* <li><a href="#gallery" className="text-blue-100 hover:text-yellow-400 transition-colors">Gallery</a></li> */}
              <li><a href="#goals" className="text-blue-100 hover:text-yellow-400 transition-colors">Goals</a></li>
              <li><a href="#team" className="text-blue-100 hover:text-yellow-400 transition-colors">The Team</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={40} className="mr-3 text-yellow-400 mt-1" />
                <span className="text-blue-100">
                  Indraprastha Institute of Information Technology Delhi,
                  Okhla Industrial Estate, Phase III, New Delhi - 110020
                </span>
              </li>
              <li className="flex items-center space-x-3 flex-wrap">
                <Phone size={20} className="text-yellow-400 flex-shrink-0" />
                  <span className="break-words text-blue-100">
                    +91 7428832206 / 8800933024 / 8826295844
                  </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-yellow-400" />
                <span className="text-blue-100">summercamp@iiitd.ac.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-yellow-900/20 pt-8 mt-8 flex flex-col md:flex-row items-center">
          <p className="text-sm mb-4 md:mb-0 md:flex-1 text-left">
            © 2025 Summer Camp IIITD. All rights reserved. IIIT Delhi.
          </p>
        
          <p className="text-lg md:text-xl mb-4 md:mb-0 md:flex-1 text-center text-blue-900 font-semibold tracking-wide drop-shadow-sm">
            Crafted with <span className="text-red-500">♥</span> by Devaj Rathore
          </p>
        
        
          <button
            onClick={scrollToTop}
            className="tlf-button p-2 md:flex-1 flex justify-center items-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};