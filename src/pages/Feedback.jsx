import React from 'react';
import { MessageSquare, Star } from 'react-feather';

const testimonials = [
  {
    id: 1,
    text: "My daughter's confidence in Science has improved significantly. The targeted approach and practice questions really helped her understand difficult concepts.",
    author: "Parent of GCSE Student",
    rating: 5
  },
  {
    id: 2,
    text: "My daughter's confidence in Science has improved significantly. The targeted approach and practice questions really helped her understand difficult concepts.",
    author: "Parent of GCSE Student",
    rating: 5
  },
  {
    id: 3,
    text: "The structured revision materials and one-to-one support made a huge difference to my exam preparation. I achieved an 8 in my Science GCSE!",
    author: "Year 11 Student",
    rating: 5
  },
  {
    id: 4,
    text: "The structured revision materials and one-to-one support made a huge difference to my exam preparation. I achieved an 8 in my Science GCSE!",
    author: "Year 11 Student",
    rating: 5
  }
];

const Feedback = () => {
  const renderStars = (count) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${i < count ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">What Our Students & Parents Say</h1>
          <p className="text-blue-100 text-lg">Hear from those who&apos;ve experienced our tutoring firsthand</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <div className="flex items-center mb-4 text-yellow-400">
                  {renderStars(testimonial.rating)}
                </div>
                <MessageSquare className="h-8 w-8 text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified Student</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Feedback;
