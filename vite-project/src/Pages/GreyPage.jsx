import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// ✅ Image list (must match `/public` folder files exactly)
const images = [
  '/Gray1.JPG',
  '/Gray2.jpeg',
  '/Gray3.jpeg',
  '/Gray4.jpeg',
  '/Gray5.JPG',
  '/Gray6.jpeg',
  '/Gray7.jpeg',
  '/Gray8.jpeg',
  '/Gray9.jpeg',
  '/Gray11.JPG',
  '/Gray12.jpeg',
  '/Gray13.jpeg',
  '/Gray14.jpeg',
  '/Gray15.jpeg',
  '/Gray16.jpeg'
];

const GreyPage = () => {
  const containerRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.2 });

    const boxes = containerRef.current.querySelectorAll('.fade-in');
    boxes.forEach(box => observer.observe(box));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Top Bar */}
      <div className="h-16 flex justify-between items-center px-4 border-b sticky top-0 bg-white z-10">
        <button onClick={()=> navigate('/gallery')}><img src="side.png" alt="Back" className="w-4" /></button>
        <h1 className="text-xl font-zendots">A STAR GATE</h1>
        <img src="astar.png" alt="Flag" className="w-8" />
      </div>

      {/* Image Grid */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="fade-in opacity-0 translate-y-4 transition-all duration-700 ease-in-out rounded-xl overflow-hidden shadow border"
            >
              <img
                src={src}
                alt={`Room ${idx + 1}`}
                className="w-full h-[236px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Dots */}
      <div className="h-16 flex justify-center items-center border-t sticky bottom-0 bg-white z-10">
        <img src="/color.png" alt="color dots" className="h-5" />
      </div>
    </div>
  );
};

export default GreyPage;
