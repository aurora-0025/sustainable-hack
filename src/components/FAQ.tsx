import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  
  const handleQuestionClick = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  }

  const faqs = [
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes that you can use to quickly style your web application.',
    },
    {
      question: 'How do I install Tailwind CSS?',
      answer: 'You can install Tailwind CSS using npm or yarn. For example, to install Tailwind CSS using npm, you can run the command "npm install tailwindcss".',
    },
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application.',
    },
    {
      question: 'How do I create a React component?',
      answer: 'To create a React component, you can use the "React.createClass" method or the "class extends React.Component" syntax. You can then define the "render" method to return the component\'s HTML markup.',
    },
  ];

  return (
    <div className="max-w-lg mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-3">
          <div 
            onClick={() => handleQuestionClick(index)} 
            className="flex items-center justify-between cursor-pointer"
          >
            <h4 className="text-base font-medium text-gray-900"><span className="text-lg pr-2 font-bold text-blue-500">0{index+1}</span>{faq.question}</h4>
            <svg className={`h-6 w-6 ${openIndex === index ? 'transform rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18 l6 6 6 -6" />
            </svg>
          </div>
          {openIndex === index && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;