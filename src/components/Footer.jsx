import React from 'react';
import { Mail, Phone, MapPin } from 'react-feather';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="The Raj Tuition Logo" 
                className="h-16 w-auto mr-3"
              />
              <h3 className="text-xl font-bold text-white">The Raj Tuition</h3>
            </div>
            <p className="text-gray-400">
              Dedicated to providing quality education and helping students excel in their Science GCSE exams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/tutoring" className="text-gray-400 hover:text-white transition-colors">Tutoring Services</a></li>
              <li><a href="/results" className="text-gray-400 hover:text-white transition-colors">Our Results</a></li>
              <li><a href="/feedback" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:drpradeepraja@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  drpradeepraja@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+447401389590" className="text-gray-400 hover:text-white transition-colors">07401 389590 (Raj)</a>
                  <a href="tel:+447903810347" className="text-gray-400 hover:text-white transition-colors">07903 810347 (Thusha)</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">170-172 Drews Lane<br />Birmingham<br />B8 2SL</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} The Raj Tuition. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
