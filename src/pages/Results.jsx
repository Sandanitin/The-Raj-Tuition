// src/pages/Results.jsx
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BarChart2, Award } from 'react-feather';

const Results = () => {
  const [activeYear, setActiveYear] = useState('2024');

  const resultsData = {
    '2019': [
      { name: 'AJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'BJ', chemistry: '8', biology: '9', physics: '8' },
      { name: 'CJ', chemistry: '8', biology: '8', physics: '7' },
      { name: 'DJ', chemistry: '7', biology: '6', physics: '6' },
      { name: 'Yashwanth', chemistry: '10', biology: '10', physics: '10' },
      { name: 'EJ', chemistry: '9', biology: '9', physics: '9' }
    ],
    '2020': [
      { name: 'FJ', chemistry: '9', biology: '8', physics: '9' },
      { name: 'GJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'HJ', chemistry: '9', biology: '8', physics: '9' },
      { name: 'IJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'JJ', chemistry: '7', biology: '7', physics: '7' },
      { name: 'KJ', chemistry: '8', biology: '8', physics: '7' },
      { name: 'LJ', chemistry: '8', biology: '9', physics: '8' }
    ],
    '2021': [
      { name: 'MJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'NJ', chemistry: '9', biology: '9', physics: '9' },
      { name: '0J', chemistry: '9', biology: '9', physics: '9' },
      { name: 'SJ', chemistry: '9', biology: '9', physics: '8' },
      { name: 'PJ', chemistry: '9', biology: '9', physics: '8' },
      { name: 'QJ', chemistry: '8', biology: '8', physics: '8', notes: 'COMBINED SCIENCE - 8,8' }
    ],
    '2022': [
      { name: 'RJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'SJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'TJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'UJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'VJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'WJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'XJ', chemistry: '9', biology: '9', physics: '8' },
      { name: 'YJ', chemistry: '9', biology: '8', physics: '9' },
      { name: 'ZJ', chemistry: '9', biology: '8', physics: '8' },
      { name: 'AAJ', chemistry: '9', biology: '8', physics: '8' },
      { name: 'ABJ', chemistry: '9', biology: '8', physics: '7' },
      { name: 'ACJ', chemistry: '8', biology: '8', physics: '8' },
      { name: 'ADJ', chemistry: '8', biology: '7', physics: '7' },
      { name: 'AEJ', chemistry: '7', biology: '7', physics: '6' },
      { name: 'AFJ', chemistry: '7', biology: '6', physics: '6' },
      { name: 'AGJ', chemistry: '6', biology: '7', physics: '6' },
      { name: 'AHJ', chemistry: '9', biology: '8', physics: '8', notes: 'COMBINED SCIENCE 9,8' },
      { name: 'AIJ', chemistry: '8', biology: '7', physics: '7', notes: 'COMBINED SCIENCE 8,7' },
      { name: 'AJJ', chemistry: '6.5', biology: '6.5', physics: '6.5', notes: 'COMBINED SCIENCE 6.5' }
    ],
    '2023': [
      { name: 'AKJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'ALJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'AMJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'ANJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'AOJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'APJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'AQJ', chemistry: '9', biology: '9', physics: '8' },
      { name: 'ARJ', chemistry: '9', biology: '8', physics: '9' },
      { name: 'ASJ', chemistry: '8', biology: '9', physics: '8' },
      { name: 'ATJ', chemistry: '8', biology: '8', physics: '8' },
      { name: 'AUJ', chemistry: '8', biology: '8', physics: '8' },
      { name: 'AVJ', chemistry: '8', biology: '7', physics: '8' },
      { name: 'AWJ', chemistry: '7', biology: '7', physics: '7' },
      { name: 'AXJ', chemistry: '7', biology: '6', physics: '6' },
      { name: 'AYJ', chemistry: '7', biology: '6', physics: '7' },
      { name: 'AZJ', chemistry: '9', biology: '8', physics: '8', notes: 'COMBINED SCIENCE 9,8' },
      { name: 'BAJ', chemistry: '8', biology: '7', physics: '7', notes: 'COMBINED SCIENCE 8,7' },
      { name: 'CAJ', chemistry: '5', biology: '5', physics: '5', notes: 'COMBINED SCIENCE 5,5' }
    ],
    '2024': [
      { name: 'DAJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'EAJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'FAJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'GAJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'HAJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'IAJ', chemistry: '9', biology: '9', physics: '9' },
      { name: 'JAJ', chemistry: '9', biology: '8', physics: '9' },
      { name: 'KAJ', chemistry: '9', biology: '8', physics: '8' },
      { name: 'LAJ', chemistry: '9', biology: '9', physics: '8' },
      { name: 'MAJ', chemistry: '7', biology: '8', physics: '8' },
      { name: 'NAJ', chemistry: '8', biology: '7', physics: '8' },
      { name: 'OAJ', chemistry: '7', biology: '7', physics: '8' },
      { name: 'PAJ', chemistry: '7', biology: '6', physics: '6' },
      { name: 'QAJ', chemistry: '6', biology: '6', physics: '7' },
      { name: 'RAJ', chemistry: '9', biology: '9', physics: '9', notes: 'COMBINED SCIENCE 9,9' },
      { name: 'SAJ', chemistry: '9', biology: '8', physics: '8', notes: 'COMBINED SCIENCE 9,8' }
    ]
  };

  const years = Object.keys(resultsData).sort((a, b) => b - a);

  const getGradeColor = (grade) => {
    const numericGrade = parseFloat(grade);
    if (isNaN(numericGrade)) return 'bg-gray-100 text-gray-800';
    if (numericGrade >= 9) return 'bg-green-100 text-green-800';
    if (numericGrade >= 7) return 'bg-blue-100 text-blue-800';
    if (numericGrade >= 5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">GCSE Results</h1>
              <p className="text-blue-100 text-lg">Student achievements in Chemistry, Biology, and Physics</p>
            </div>
            <div className="hidden md:flex items-center space-x-4 bg-white/10 p-3 rounded-lg">
              <BarChart2 className="h-8 w-8 text-blue-200" />
              <div>
                <p className="text-sm text-blue-200">Total Students</p>
                <p className="text-2xl font-bold">45+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Year Selector */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeYear === year
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {year} Results
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              GCSE Results - {activeYear}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Student
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Chemistry
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Biology
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Physics
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {resultsData[activeYear]?.map((student, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                          <span className="text-indigo-600 dark:text-indigo-300 font-medium">
                            {student.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {student.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    {['chemistry', 'biology', 'physics'].map((subject) => (
                      <td key={subject} className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                            student[subject]
                          )}`}
                        >
                          {student[subject]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Grade 9-7 (A*-A)', value: '85%', change: '+5%' },
            { title: 'Grade 9-5 (A*-B)', value: '95%', change: '+3%' },
            { title: 'Pass Rate (9-1)', value: '100%', change: '0%' },
            { title: 'Top Grades (9-8)', value: '65%', change: '+8%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                        {stat.title}
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900 dark:text-white">
                          {stat.value}
                          <span className="text-green-500 text-sm ml-2">
                            {stat.change}
                          </span>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Interested in Our Tutoring?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our proven teaching methods help students achieve outstanding results. 
            Join our tutoring program to secure your academic success.
          </p>
          <button className="bg-white text-indigo-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300 transform hover:scale-105">
            Book a Free Assessment
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;