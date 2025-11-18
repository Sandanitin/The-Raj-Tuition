import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Target, FileText, Award, CheckCircle, ChevronDown } from 'react-feather';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ServiceCard';

// Placeholder images from Pexels
const heroImage = 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg';
const heroImage2 = 'https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg';
const featureImage = 'https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg';
const serviceImages = {
  oneOnOne: 'https://images.pexels.com/photos/4144229/pexels-photo-4144229.jpeg',
  groupClass: 'https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg',
  revision: 'https://images.pexels.com/photos/4144227/pexels-photo-4144227.jpeg',
  resources: 'https://images.pexels.com/photos/4145154/pexels-photo-4145154.jpeg'
};

// Testimonials Component
const Testimonials = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Our Students Say</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Success stories from our students
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote: "Way2Med helped me achieve an A* in A-Level Chemistry!",
            author: "Sarah K.",
            role: "A-Level Student"
          },
          {
            quote: "The one-to-one tuition made all the difference in my understanding.",
            author: "James L.",
            role: "GCSE Student"
          },
          {
            quote: "Excellent resources and dedicated tutors. Highly recommended!",
            author: "Priya M.",
            role: "Parent"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Subjects Component
const Subjects = () => (
  <section className="py-16 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Subjects We Cover</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Comprehensive coverage of all major science subjects
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['Biology', 'Chemistry', 'Physics', 'Mathematics'].map((subject) => (
          <div key={subject} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{subject}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a session?",
      answer: "You can book a session through our online portal or by contacting us directly. We'll match you with the perfect tutor for your needs."
    },
    {
      question: "What qualifications do your tutors have?",
      answer: "All our tutors are highly qualified with degrees in their respective fields and have undergone thorough background checks."
    },
    {
      question: "Can I change my tutor if needed?",
      answer: "Yes, we understand that the right match is important. You can request a change of tutor at any time."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer special rates for group sessions. Please contact us for more information on group pricing."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our tutoring services
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="font-medium text-gray-900 dark:text-white text-left">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                id={`faq-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "One-to-One Tuition",
      description: "Intensive, bespoke sessions focused entirely on individual progress and exam technique.",
      image: serviceImages.oneOnOne
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Small-Group Classes",
      description: "Dynamic, interactive lessons that combine peer learning with expert guidance.",
      image: serviceImages.groupClass
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Specialised Revision Programmes",
      description: "Targeted courses for GCSE and A-Level Biology, Chemistry, and Physics.",
      image: serviceImages.revision
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Exam-Ready Resources",
      description: "Past-paper walkthroughs, model answers, and digital study packs included with every package.",
      image: serviceImages.resources
    }
  ];

  const features = [
    "Expert tutors with proven track records",
    "Personalized learning plans",
    "Regular progress tracking",
    "Flexible scheduling options",
    "Comprehensive study materials",
    "Mock exams and feedback"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: 'center 30%',
              backgroundSize: 'cover',
              opacity: 0.8
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
                Excellence in Science Education
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Excel in Science with <span className="text-yellow-300">Way2Med</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto lg:mx-0">
                Your dedicated partner in achieving excellence in Science GCSE and A-Level examinations through personalized learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  onClick={() => handleNavigation('/tutoring')}
                  className="bg-blue-600 hover:bg-blue-500 text-white transform hover:scale-105 transition-transform"
                >
                  Start Learning Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => handleNavigation('/tutoring#programs')}
                  className="text-white border-white hover:bg-white/10"
                >
                  Explore Programs
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-1 shadow-2xl transform rotate-1">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={heroImage2} 
                    alt="Students learning"
                    className="w-full h-auto rounded-lg"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center">
                      <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                        <Award className="h-8 w-8 text-blue-900" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Proven Success</h3>
                        <p className="text-blue-100 text-sm">98% pass rate in 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide a full spectrum of personalized tutoring solutions designed to meet every student's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Way2Med?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We deliver tailored tuition, comprehensive resources, and unwavering academic support to empower students to reach their full potential.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button 
                  size="lg" 
                  onClick={() => handleNavigation('/contact?consultation=true')}
                  className="mt-4"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-1">
                <div 
                  className="aspect-w-16 aspect-h-9 bg-cover bg-center flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${featureImage})`,
                    minHeight: '300px'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="relative z-10 text-center p-6">
                    <Award className="h-16 w-16 text-yellow-300 mx-auto mb-4" />
                    <h3 className="text-white text-2xl font-bold mb-2">Start Your Journey to Success</h3>
                    <p className="text-blue-100 text-lg">Begin your path to academic excellence today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Added Sections */}
      <Testimonials />
      <Subjects />
      
      <FAQ />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Excel in Your Science Exams?</h2>
          <p className="text-xl text-blue-100 mb-8">Join Way2Med today and take the first step towards academic success</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={() => handleNavigation('/tutoring')}
              className="bg-white text-indigo-700 hover:bg-gray-100"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => handleNavigation('/contact')}
              className="text-white border-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;