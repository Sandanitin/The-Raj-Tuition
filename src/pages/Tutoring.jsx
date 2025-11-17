// src/pages/Tutoring.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

const Tutoring = () => {
  const tutoringData = [
    {
      year: 'Year 8',
      title: 'Gateway to Oxbridge courses',
      subjects: ['Mathematics', 'Science']
    },
    {
      year: 'Year 9',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics']
    },
    {
      year: 'Year 10',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics']
    },
    {
      year: 'GCSE',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics']
    },
    {
      year: 'A Level',
      subjects: ['Chemistry', 'Biology', 'Mathematics']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Tutoring Services</h1>
          <p className="text-xl text-blue-100">Group classes designed to help students excel in their academic journey</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutoringData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.year}</h2>
                  {item.title && (
                    <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                      {item.title}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {item.subjects.map((subject, i) => (
                      <li key={i} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-xl shadow-lg overflow-hidden p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6 text-blue-100">
                Join our tutoring program and take the first step towards academic excellence.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
              >
                Contact Us <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutoring;