// src/pages/About.jsx
import React from 'react';
import { BookOpen, Users, Target, Clock, ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';

const About = () => {
  // Placeholder images from Pexels
  const images = {
    hero: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    mission: 'https://images.pexels.com/photos/4145154/pexels-photo-4145154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    team1: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    team2: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    team3: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    team4: 'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  };

  const teamMembers = [
    { id: 1, name: 'Dr. Sarah Johnson', role: 'Mathematics Expert', image: images.team1 },
    { id: 2, name: 'Michael Chen', role: 'Science Specialist', image: images.team2 },
    { id: 3, name: 'Emily Rodriguez', role: 'Language Arts Tutor', image: images.team3 },
    { id: 4, name: 'David Kim', role: 'Test Prep Coach', image: images.team4 }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Students learning together"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-blue-600/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Students Through Exceptional Education
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Personalized learning experiences that help students achieve their full potential.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={images.mission}
                  alt="Tutor helping student"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg">
                  <span className="text-sm font-semibold">Since 2015</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Transforming Education, One Student at a Time
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <p>
                  At The Raj Tuition, we believe that every student deserves access to high-quality, personalized education. 
                  Our mission is to unlock each student's full potential through tailored learning experiences that inspire 
                  confidence and foster academic success.
                </p>
                <p>
                  Our team of certified educators combines years of experience with innovative teaching methods to create 
                  engaging and effective learning environments. We understand that every student learns differently, which 
                  is why we customize our approach to meet individual needs and learning styles.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { value: '98%', label: 'Success Rate' },
                    { value: '3+', label: 'Expert Tutors' },
                    { value: '500+', label: 'Students Helped' },
                    { value: '5', label: 'Subjects Covered' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                      <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful students who have achieved their academic goals with our
              expert tutoring services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book a Free Session <ArrowRight className="ml-2" />
              </Link>
              <Link
                to="/tutoring"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;