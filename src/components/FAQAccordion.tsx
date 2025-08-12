import React, { useState } from 'react';

interface FAQItem {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
  className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  items, 
  defaultOpenId = null,
  className = ""
}) => {
  const [openItem, setOpenItem] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Header */}
          <button
            onClick={() => toggleItem(item.id)}
            className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-200 rounded-lg outline-none cursor-pointer ${
              openItem === item.id 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                : 'hover:bg-gray-50'
            }`}
            aria-expanded={openItem === item.id}
            aria-controls={`faq-content-${item.id}`}
          >
            <div className="flex items-center space-x-3">
              {item.icon && (
                <span className="text-2xl" role="img" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <h3 className={`text-lg font-semibold pr-4 ${
                openItem === item.id ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
            </div>
            
            {/* Animated chevron icon */}
            <div className="flex-shrink-0">
              <svg
                className={`w-5 h-5 transition-all duration-300 ease-in-out ${
                  openItem === item.id 
                    ? 'rotate-180 text-white' 
                    : 'rotate-0 text-gray-500'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {/* Content with slide animation */}
          <div
            id={`faq-content-${item.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItem === item.id
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-4">
              <div className="pt-2 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed mt-3">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
