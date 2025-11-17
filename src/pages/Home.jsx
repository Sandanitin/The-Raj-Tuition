import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to <span className="text-primary">The Raj Tuition</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
          Your journey to academic excellence starts here
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="px-8 py-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white font-semibold rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;