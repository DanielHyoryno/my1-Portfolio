import { useState } from 'react';

function PortoGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    { id: 1, title: "Project 1", gradient: "from-blue-700 to-blue-600" },
    { id: 2, title: "Project 2", gradient: "from-blue-800 to-blue-400" },
    { id: 3, title: "Project 3", gradient: "from-blue-300 to-blue-900" },
    { id: 4, title: "Project 4", gradient: "from-blue-700 to-blue-600" },
    { id: 5, title: "Project 5", gradient: "from-blue-300 to-blue-900" },
    { id: 6, title: "Project 6", gradient: "from-blue-800 to-blue-400" },
  ];

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900 relative">
        {/* Portfolio title */}
        {/* <div className="flex items-center justify-center h-1/5">
          <h1 className="text-white text-4xl font-bold">PORTFOLIO</h1>
        </div> */}

        {/* Responsive grid */}
        <div className="grid w-full h-3/5 md:h-2/5 lg:h-3/5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-2 sm:p-4 md:p-8 lg:p-12 relative">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`col-span-1 rounded-xl transition duration-300 ease-in-out h-20 sm:h-24 md:h-32 lg:h-40 relative group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} transition-transform duration-300 ease-in-out ${hoveredIndex === index ? 'scale-100' : 'scale-100'} group-hover:scale-100`}></div>
              <div className={`relative z-20 text-white text-center ${hoveredIndex !== index ? 'opacity-100' : 'opacity-0'}`}>{project.title}</div>
              {/* Hide other projects */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-0' : 'opacity-100'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PortoGrid;