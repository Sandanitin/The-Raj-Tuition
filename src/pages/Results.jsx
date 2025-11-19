// src/pages/Results.jsx
import React, { useState } from 'react';
import { ArrowRight, BarChart2, Award } from 'react-feather';

const Results = () => {
  const [activeYear, setActiveYear] = useState('2024');
  const [activeLevel, setActiveLevel] = useState('GCSE');

  const resultsData = {
    'GCSE': {
      '2024': [
        { name: 'Student K', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student L', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student M', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student N', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student O', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student P', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student Q', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student S', physics: '9', chemistry: '9', biology: '9' },
        { name: 'Student T', physics: '9', chemistry: '9', biology: '9' }
      ],
      '2023': [
        { name: 'AJ', chemistry: '9', biology: '9', physics: '9'},
        { name: 'BJ', chemistry: '8', biology: '9', physics: '8' },
        { name: 'AL', chemistry: '9', biology: '9', physics: '9' },
        { name: 'AM', chemistry: '9', biology: '8', physics: '9' },
        { name: 'AN', chemistry: '8', biology: '8', physics: '8' },
        { name: 'AO', chemistry: '9', biology: '9', physics: '8' },
        { name: 'AP', chemistry: '8', biology: '9', physics: '9' },
        { name: 'AQ', chemistry: '9', biology: '7', physics: '8' },
        { name: 'AR', chemistry: '8', biology: '8', physics: '7' },
        { name: 'AS', chemistry: '7', biology: '8', physics: '8' }
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
      '2021': [
        { name: 'MJ', chemistry: '9', biology: '9', physics: '9' },
        { name: 'NJ', chemistry: '9', biology: '9', physics: '9' },
        { name: '0J', chemistry: '9', biology: '9', physics: '9' },
        { name: 'SJ', chemistry: '9', biology: '9', physics: '8' },
        { name: 'PJ', chemistry: '9', biology: '9', physics: '8' },
        { name: 'QJ', chemistry: '8', biology: '8', physics: '8', notes: 'COMBINED SCIENCE - 8,8' },
        { name: 'AT', chemistry: '9', biology: '8', physics: '9' },
        { name: 'AU', chemistry: '8', biology: '9', physics: '8' },
        { name: 'AV', chemistry: '9', biology: '9', physics: '9' },
        { name: 'AW', chemistry: '8', biology: '8', physics: '8' },
        { name: 'AX', chemistry: '9', biology: '8', physics: '8' },
        { name: 'AY', chemistry: '8', biology: '9', physics: '9' }
      ],
      '2020': [
        { name: 'FJ', chemistry: '9', biology: '8', physics: '9' },
        { name: 'GJ', chemistry: '9', biology: '9', physics: '9' },
        { name: 'HJ', chemistry: '9', biology: '8', physics: '9' },
        { name: 'IJ', chemistry: '9', biology: '9', physics: '9' },
        { name: 'JJ', chemistry: '7', biology: '7', physics: '7' },
        { name: 'KJ', chemistry: '8', biology: '8', physics: '7' },
        { name: 'LJ', chemistry: '8', biology: '9', physics: '8' },
        { name: 'AZ', chemistry: '9', biology: '9', physics: '9' },
        { name: 'BA', chemistry: '8', biology: '8', physics: '8' },
        { name: 'BB', chemistry: '9', biology: '8', physics: '9' },
        { name: 'BC', chemistry: '8', biology: '9', physics: '8' },
        { name: 'BD', chemistry: '7', biology: '8', physics: '7' }
      ],
      '2019': [
        { name: 'AJ', chemistry: '9', biology: '9', physics: '9' },
        { name: 'BJ', chemistry: '8', biology: '9', physics: '8' },
        { name: 'CJ', chemistry: '8', biology: '8', physics: '7' },
        { name: 'DJ', chemistry: '7', biology: '6', physics: '6' },
        { name: 'EJ', chemistry: '9', biology: '9', physics: '9' },
        { name: 'BE', chemistry: '9', biology: '8', physics: '9' },
        { name: 'BF', chemistry: '8', biology: '9', physics: '8' },
        { name: 'BG', chemistry: '9', biology: '9', physics: '8' },
        { name: 'BH', chemistry: '8', biology: '8', physics: '8' },
        { name: 'BI', chemistry: '9', biology: '7', physics: '8' },
        { name: 'BJ', chemistry: '7', biology: '8', physics: '7' }
      ]
    },
    'A Level': {
      '2024': [
        { name: 'Student A', chemistry: 'A*', biology: 'A*' },
        { name: 'Student B', chemistry: 'A*', biology: 'A' },
        { name: 'Student C', chemistry: 'A', biology: 'A*' },
        { name: 'Student D', chemistry: 'A*', biology: 'A*' },
        { name: 'Student E', chemistry: 'A', biology: 'A' },
        { name: 'Student F', chemistry: 'B', biology: 'A' },
        { name: 'Student G', chemistry: 'A*', biology: 'A' },
        { name: 'Student H', chemistry: 'A', biology: 'B' },
        { name: 'Student I', chemistry: 'A*', biology: 'A*' },
        { name: 'Student J', chemistry: 'B', biology: 'B' }
      ],
      '2023': [
        { name: 'Student K', chemistry: 'A*', biology: 'A*' },
        { name: 'Student L', chemistry: 'A', biology: 'A*' },
        { name: 'Student M', chemistry: 'A*', biology: 'A' },
        { name: 'Student N', chemistry: 'A', biology: 'A' },
        { name: 'Student O', chemistry: 'B', biology: 'A' },
        { name: 'Student P', chemistry: 'A*', biology: 'A' },
        { name: 'Student Q', chemistry: 'A', biology: 'B' },
        { name: 'Student R', chemistry: 'A*', biology: 'A*' },
        { name: 'Student S', chemistry: 'B', biology: 'B' },
        { name: 'Student T', chemistry: 'A', biology: 'A' }
      ],
      '2022': [
        { name: 'Student U', chemistry: 'A*', biology: 'A*' },
        { name: 'Student V', chemistry: 'A', biology: 'A*' },
        { name: 'Student W', chemistry: 'A*', biology: 'A' },
        { name: 'Student X', chemistry: 'A', biology: 'A' },
        { name: 'Student Y', chemistry: 'B', biology: 'A' },
        { name: 'Student Z', chemistry: 'A*', biology: 'A' },
        { name: 'Student AA', chemistry: 'A', biology: 'B' },
        { name: 'Student AB', chemistry: 'A*', biology: 'A*' },
        { name: 'Student AC', chemistry: 'B', biology: 'B' },
        { name: 'Student AD', chemistry: 'A', biology: 'A' }
      ],
      '2021': [
        { name: 'Student AE', chemistry: 'A*', biology: 'A*' },
        { name: 'Student AF', chemistry: 'A', biology: 'A*' },
        { name: 'Student AG', chemistry: 'A*', biology: 'A' },
        { name: 'Student AH', chemistry: 'A', biology: 'A' },
        { name: 'Student AI', chemistry: 'B', biology: 'A' },
        { name: 'Student AJ', chemistry: 'A*', biology: 'A' },
        { name: 'Student AK', chemistry: 'A', biology: 'B' },
        { name: 'Student AL', chemistry: 'A*', biology: 'A*' },
        { name: 'Student AM', chemistry: 'B', biology: 'B' },
        { name: 'Student AN', chemistry: 'A', biology: 'A' }
      ],
      '2020': [
        { name: 'Student AO', chemistry: 'A*', biology: 'A*' },
        { name: 'Student AP', chemistry: 'A', biology: 'A*' },
        { name: 'Student AQ', chemistry: 'A*', biology: 'A' },
        { name: 'Student AR', chemistry: 'A', biology: 'A' },
        { name: 'Student AS', chemistry: 'B', biology: 'A' },
        { name: 'Student AT', chemistry: 'A*', biology: 'A' },
        { name: 'Student AU', chemistry: 'A', biology: 'B' },
        { name: 'Student AV', chemistry: 'A*', biology: 'A*' },
        { name: 'Student AW', chemistry: 'B', biology: 'B' },
        { name: 'Student AX', chemistry: 'A', biology: 'A' }
      ],
      '2019': [
        { name: 'Student AY', chemistry: 'A*', biology: 'A*' },
        { name: 'Student AZ', chemistry: 'A', biology: 'A*' },
        { name: 'Student BA', chemistry: 'A*', biology: 'A' },
        { name: 'Student BB', chemistry: 'A', biology: 'A' },
        { name: 'Student BC', chemistry: 'B', biology: 'A' },
        { name: 'Student BD', chemistry: 'A*', biology: 'A' },
        { name: 'Student BE', chemistry: 'A', biology: 'B' },
        { name: 'Student BF', chemistry: 'A*', biology: 'A*' },
        { name: 'Student BG', chemistry: 'B', biology: 'B' },
        { name: 'Student BH', chemistry: 'A', biology: 'A' }
      ]
    }
  };

  const years = activeLevel === 'GCSE' 
    ? Object.keys(resultsData['GCSE'] || {}).sort((a, b) => b - a)
    : Object.keys(resultsData[activeLevel] || {}).sort((a, b) => b - a);

  const getGradeColor = (grade) => {
    if (!grade) return 'bg-gray-100 text-gray-800';
    
    // Handle numeric grades (9-1)
    const numericGrade = parseFloat(grade);
    if (!isNaN(numericGrade)) {
      if (numericGrade >= 9) return 'bg-green-100 text-green-800';
      if (numericGrade >= 7) return 'bg-blue-100 text-blue-800';
      if (numericGrade >= 5) return 'bg-yellow-100 text-yellow-800';
      return 'bg-red-100 text-red-800';
    }
    
    // Handle letter grades (A*, A, B, etc.)
    const letterGrade = grade.toString().toUpperCase();
    if (letterGrade === 'A*') return 'bg-purple-100 text-purple-800';
    if (letterGrade === 'A') return 'bg-green-100 text-green-800';
    if (letterGrade === 'B') return 'bg-blue-100 text-blue-800';
    if (letterGrade === 'C') return 'bg-yellow-100 text-yellow-800';
    if (letterGrade === 'D' || letterGrade === 'E') return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 dark:from-indigo-800 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">GCSE Results</h1>
              <p className="text-blue-100 text-lg">Student achievements in Chemistry, Biology, and Physics</p>
            </div>
            <div className="hidden md:flex items-center space-x-4 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
              <BarChart2 className="h-8 w-8 text-blue-100" />
              <div>
                <p className="text-sm text-blue-100">Total Students</p>
                <p className="text-2xl font-bold text-white">45+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level and Year Selector */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Level Selector */}
          <div className="flex overflow-x-auto py-4 space-x-2 border-b border-gray-200 dark:border-gray-700">
            {['GCSE', 'A Level'].map((level) => (
              <button
                key={level}
                onClick={() => {
                  setActiveLevel(level);
                  const levelYears = Object.keys(resultsData[level] || {});
                  setActiveYear(levelYears[0] || '');
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeLevel === level
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
          
          {/* Year Selector */}
          {years.length > 0 && (
            <div className="flex overflow-x-auto py-4 space-x-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    activeYear === year
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {year} {activeLevel} Results
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50 dark:bg-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              {activeLevel} Results - {activeYear}
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
                  {activeLevel === 'Year 8' ? (
                    <>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Mathematics
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Science
                      </th>
                    </>
                  ) : activeLevel === 'A Level' ? (
                    <>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Chemistry
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Biology
                      </th>
                      {/* <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Mathematics
                      </th> */}
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Physics
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Chemistry
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Biology
                      </th>
                      {/* <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Mathematics
                      </th> */}
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {resultsData[activeLevel] && resultsData[activeLevel][activeYear] && resultsData[activeLevel][activeYear].map((student, index) => (
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
                    {activeLevel === 'Year 8' ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.mathematics
                            )}`}
                          >
                            {student.mathematics}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.science
                            )}`}
                          >
                            {student.science}
                          </span>
                        </td>
                      </>
                    ) : activeLevel === 'A Level' ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.chemistry
                            )}`}
                          >
                            {student.chemistry}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.biology
                            )}`}
                          >
                            {student.biology}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.mathematics
                            )}`}
                          >
                            {student.mathematics}
                          </span>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.physics
                            )}`}
                          >
                            {student.physics}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.chemistry
                            )}`}
                          >
                            {student.chemistry}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.biology
                            )}`}
                          >
                            {student.biology}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span
                            className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(
                              student.mathematics
                            )}`}
                          >
                            {student.mathematics}
                          </span>
                        </td>
                      </>
                    )}
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