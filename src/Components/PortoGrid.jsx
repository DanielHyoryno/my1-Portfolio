import React, { useState } from 'react';

function PortoGrid() {
  // State to track which grid item is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle the expanded state for a specific index
  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if the item is already expanded
    } else {
      setExpandedIndex(index); // Expand the selected item
    }
  };

  return (
    <>
      <div className={`h-screen w-full flex flex-col items-center justify-center bg-slate-900 ${expandedIndex !== null ? 'hidden' : ''}`}>
        {/* Responsive grid */}
        <div className="grid w-full h-3/5 md:h-2/5 lg:h-3/5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-2 sm:p-4 md:p-8 lg:p-12">
          {/* Create grid items */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`col-span-1 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:brightness-125 transition duration-300 ease-in-out ${
                expandedIndex === index ? 'h-screen w-full flex items-center justify-center' : 'h-20 sm:h-24 md:h-32 lg:h-40'
              } relative`}
            >
              {/* Button only visible in normal state */}
              {expandedIndex !== index ? (
                <button
                  className="text-white bg-gray-800 p-1 rounded-md hover:bg-gray-700 transition duration-300"
                  onClick={() => toggleExpand(index)}
                >
                  View More
                </button>
              ) : (
                <button
                  className="text-white bg-gray-800 p-1 rounded-md hover:bg-gray-700 transition duration-300"
                  onClick={() => toggleExpand(index)}
                >
                  Back
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expanded state covering the full screen */}
      {expandedIndex !== null && (
        <div className="fixed top-0 left-0 h-screen w-full bg-slate-900 flex items-center justify-center z-50">
          <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-600">
            <h1 className="text-white text-5xl font-bold">Expanded View</h1>
            <button
              className="absolute top-5 right-5 text-white bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-300"
              onClick={() => setExpandedIndex(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PortoGrid;
