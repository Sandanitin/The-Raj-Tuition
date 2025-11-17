import React, { useState } from 'react';
import { MessageSquare, Star, Filter } from 'react-feather';

const testimonialsByYear = {
  'Year 8': [
    {
      id: 1,
      text: "The Gateway to Oxbridge program has been transformative. The advanced problem-solving techniques and critical thinking exercises have really challenged and engaged my child.",
      author: "Parent of Year 8 Student",
      rating: 5,
      subject: "Gateway to Oxbridge"
    },
    {
      id: 2,
      text: "Mathematics has become my favorite subject thanks to the clear explanations and engaging teaching style. I love the challenging problems we get to solve!",
      author: "Year 8 Student",
      rating: 5,
      subject: "Mathematics"
    },
    {
      id: 3,
      text: "The science curriculum is fantastic! The practical experiments and real-world applications make learning so much more interesting and relevant.",
      author: "Year 8 Student",
      rating: 5,
      subject: "Science"
    }
  ],
  'Year 9': [
    {
      id: 4,
      text: "The physics curriculum is challenging but so rewarding. The way we connect theory with practical experiments has deepened my understanding of the subject.",
      author: "Year 9 Student",
      rating: 5,
      subject: "Physics"
    },
    {
      id: 5,
      text: "Chemistry has become so much clearer with the structured approach. The step-by-step explanations of chemical reactions are excellent.",
      author: "Year 9 Student",
      rating: 5,
      subject: "Chemistry"
    },
    {
      id: 6,
      text: "Biology is fascinating! The way we break down complex biological systems into understandable parts has made learning much more manageable.",
      author: "Year 9 Student",
      rating: 5,
      subject: "Biology"
    },
    {
      id: 7,
      text: "The mathematics program is excellent. The problem-solving techniques I've learned have improved my analytical skills across all subjects.",
      author: "Year 9 Student",
      rating: 5,
      subject: "Mathematics"
    },
    {
      id: 8,
      text: "The Gateway to Oxbridge preparation in Year 9 has been outstanding. The advanced materials and challenging discussions have really pushed my thinking.",
      author: "Year 9 Student",
      rating: 5,
      subject: "Gateway to Oxbridge"
    }
  ],
  'Year 10': [
    {
      id: 9,
      text: "The physics GCSE preparation has been excellent. The way we tackle exam questions has significantly improved my problem-solving speed and accuracy.",
      author: "Year 10 Student",
      rating: 5,
      subject: "Physics"
    },
    {
      id: 10,
      text: "Chemistry is challenging but the structured approach makes it manageable. The way we break down complex reactions is particularly helpful.",
      author: "Year 10 Student",
      rating: 5,
      subject: "Chemistry"
    },
    {
      id: 11,
      text: "Biology is fascinating! The way we connect cellular processes to larger biological systems has really helped with my understanding.",
      author: "Year 10 Student",
      rating: 5,
      subject: "Biology"
    },
    {
      id: 12,
      text: "The mathematics curriculum is well-structured and builds perfectly on previous knowledge. The problem-solving techniques are invaluable.",
      author: "Year 10 Student",
      rating: 5,
      subject: "Mathematics"
    },
    {
      id: 13,
      text: "The Gateway to Oxbridge program in Year 10 is preparing me so well for future studies. The advanced materials and discussions are exactly what I needed.",
      author: "Year 10 Student",
      rating: 5,
      subject: "Gateway to Oxbridge"
    },
    {
      id: 14,
      text: "The practical science skills we're developing are excellent preparation for the required practicals. I feel much more confident in the lab now.",
      author: "Year 10 Student",
      rating: 5,
      subject: "Science"
    }
  ],
  'GCSE': [
    {
      id: 15,
      text: "The physics GCSE course is comprehensive and well-structured. The past paper practice and mark scheme analysis have been particularly helpful.",
      author: "GCSE Student",
      rating: 5,
      subject: "Physics"
    },
    {
      id: 16,
      text: "Chemistry GCSE is challenging but the way the course breaks down topics makes it much more manageable. The revision resources are excellent.",
      author: "GCSE Student",
      rating: 5,
      subject: "Chemistry"
    },
    {
      id: 17,
      text: "Biology GCSE is fascinating! The way complex processes are explained makes them so much easier to understand and remember.",
      author: "GCSE Student",
      rating: 5,
      subject: "Biology"
    },
    {
      id: 18,
      text: "The mathematics GCSE preparation has been outstanding. The focus on problem-solving and exam technique has really boosted my confidence.",
      author: "GCSE Student",
      rating: 5,
      subject: "Mathematics"
    },
    {
      id: 19,
      text: "The Gateway to Oxbridge preparation alongside GCSEs has been invaluable. It's given me a real edge in my studies and future planning.",
      author: "GCSE Student",
      rating: 5,
      subject: "Gateway to Oxbridge"
    },
    {
      id: 20,
      text: "The science practical endorsement preparation has been excellent. I feel fully prepared for the required practicals and the written exam questions about them.",
      author: "GCSE Student",
      rating: 5,
      subject: "Science"
    }
  ],
  'A Level': [
    {
      id: 21,
      text: "The A Level chemistry course is challenging but incredibly rewarding. The depth of understanding we achieve is preparing me perfectly for university.",
      author: "A Level Student",
      rating: 5,
      subject: "Chemistry"
    },
    {
      id: 22,
      text: "Biology at A Level is fascinating. The way we explore topics in such depth has completely changed how I think about biological systems.",
      author: "A Level Student",
      rating: 5,
      subject: "Biology"
    },
    {
      id: 23,
      text: "The mathematics A Level is excellent preparation for STEM degrees. The problem-solving skills we're developing are invaluable.",
      author: "A Level Student",
      rating: 5,
      subject: "Mathematics"
    },
    {
      id: 24,
      text: "The Oxbridge preparation program has been instrumental in helping me secure my university offers. The interview practice and personal statement guidance were exceptional.",
      author: "A Level Student",
      rating: 5,
      subject: "Gateway to Oxbridge"
    },
    {
      id: 25,
      text: "The transition from GCSE to A Level was challenging, but the support and structured approach made it much more manageable. I'm achieving grades I never thought possible.",
      author: "A Level Student",
      rating: 5,
      subject: "Science"
    }
  ]
};

const allYears = Object.keys(testimonialsByYear);
const allTestimonials = [].concat(...Object.values(testimonialsByYear));

const Feedback = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  
  const subjects = ['All', ...new Set(allTestimonials.map(t => t.subject))];
  
  const filteredTestimonials = allTestimonials.filter(testimonial => {
    const yearMatch = selectedYear === 'All' || 
      (testimonial.id <= 3 && selectedYear === 'Year 8') ||
      (testimonial.id > 3 && testimonial.id <= 8 && selectedYear === 'Year 9') ||
      (testimonial.id > 8 && testimonial.id <= 14 && selectedYear === 'Year 10') ||
      (testimonial.id >= 15 && testimonial.id <= 20 && selectedYear === 'GCSE') ||
      (testimonial.id >= 21 && testimonial.id <= 25 && selectedYear === 'A Level');
    
    const subjectMatch = selectedSubject === 'All' || testimonial.subject === selectedSubject;
    
    return yearMatch && subjectMatch;
  });
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

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="w-full sm:w-auto">
              <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Filter className="inline h-4 w-4 mr-1" /> Filter by Year
              </label>
              <select
                id="year-filter"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="All">All Years</option>
                {allYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="w-full sm:w-auto">
              <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Filter className="inline h-4 w-4 mr-1" /> Filter by Subject
              </label>
              <select
                id="subject-filter"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
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
                    <div className="flex items-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mr-2">Verified Student</p>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    {testimonial.subject}
                  </span>
                </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">No testimonials found matching your filters.</p>
            <button 
              onClick={() => {
                setSelectedYear('All');
                setSelectedSubject('All');
              }}
              className="mt-4 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
