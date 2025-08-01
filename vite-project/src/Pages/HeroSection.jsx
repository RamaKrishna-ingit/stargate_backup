import { useEffect, useState } from 'react';
import Offers from '../Components/Offers';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [showOffers, setShowOffers] = useState(false);
  const navigate = useNavigate();
  const [touchStartY, setTouchStartY] = useState(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 10) {
        setShowOffers(true); // scroll down
      } else if (e.deltaY < -10) {
        setShowOffers(false); // scroll up
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY !== null) {
        const deltaY = touchStartY - touchEndY;
        if (deltaY > 30) {
          // Swipe up
          setShowOffers(true);
        } else if (deltaY < -30) {
          // Swipe down
          setShowOffers(false);
        }
      }
    };

    window.addEventListener('wheel', handleWheel);           // desktop
    window.addEventListener('touchstart', handleTouchStart); // mobile start
    window.addEventListener('touchend', handleTouchEnd);     // mobile end

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartY]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="pine.jpg"
        alt="hill"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10" />

      {/* Hero Content */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center transition-opacity duration-700 ease-in-out"
        style={{ opacity: showOffers ? 0 : 1, pointerEvents: showOffers ? 'none' : 'auto' }}
      >
        <div className="w-[25vh] h-[25vh] m-5">
          <img src="Logo.png" className="w-full h-fit object-contain" />
        </div>

        <h1 className="text-5xl text-white font-instrument font-light text-center mt-[3vh]">
          Not Just a Stay <br /> A Hillside Story
        </h1>

        <button
          className="bg-white rounded-full w-[12vh] h-[4vh] m-[3vh] font-instrument italic"
          onClick={() => navigate('/gallery')}
        >
          Gallery
        </button>

        <h2 className="text-white font-instrument underline mt-2">
          Scroll up
        </h2>
        <div className="mt-3 animate-bounce">
          <img src="arrow.png" alt="Up Arrow" className="w-10 h-10" />
        </div>
      </div>

      {/* Offers Panel */}
      <div
        className={`absolute bottom-0 left-0 w-full z-30 transition-transform duration-700 ${
          showOffers ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Offers />
      </div>
    </div>
  );
};

export default HeroSection;



// import { useEffect, useState } from 'react';
// import Offers from '../Components/Offers';
// import { useNavigate } from 'react-router-dom';
// const HeroSection = () => {
//   const [showOffers, setShowOffers] = useState(false);
//     const navigate = useNavigate();

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (e.deltaY > 10) {
//         // Scroll down
//         setShowOffers(true);
//       } else if (e.deltaY < -10) {
//         // Scroll up
//         setShowOffers(false);
//       }
//     };

//     window.addEventListener('wheel', handleWheel);
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Background Image */}
//       <img
//         src="pine.jpg"
//         alt="hill"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Blur Overlay */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10" />

//       {/* Hero Content */}
//       <div className="absolute inset-0 z-20 flex flex-col items-center transition-opacity duration-700 ease-in-out"
//         style={{ opacity: showOffers ? 0 : 1, pointerEvents: showOffers ? 'none' : 'auto' }}
//       >
//         {/* Logo */}
//         <div className="w-[25vh] h-[25vh] m-5">
//           <img src="Logo.png" className="w-full h-fit object-contain" />
//         </div>

//         {/* Headline */}
//         <h1 className="text-5xl text-white font-instrument font-light text-center mt-[3vh]">
//           Not Just a Stay <br /> A Hillside Story
//         </h1>

//         {/* Button */}
//         <button className="bg-white rounded-full w-[12vh] h-[4vh] m-[3vh] font-instrument italic"onClick={() => navigate('/gallery')}>
//           Gallery
//         </button>

//         {/* Bottom query and arrow */}
//         <h2 className="text-white font-instrument underline mt-2">
//           Scroll up
//         </h2>
//         <div className="mt-3 animate-bounce">
//           <img src="arrow.png" alt="Up Arrow" className="w-10 h-10" />
//         </div>
//       </div>

//       {/* Offers Panel */}
//       <div
//         className={`absolute bottom-0 left-0 w-full z-30 transition-transform duration-700 ${
//           showOffers ? 'translate-y-0' : 'translate-y-full'
//         }`}
//       >
//         <Offers />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




// import { useEffect, useState } from 'react';
// import Offers from '../Components/Offers';

// const HeroSection = () => {
//   const [showOffers, setShowOffers] = useState(false);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (e.deltaY > 10 && !showOffers) {
//         setShowOffers(true);
//       }
//     };

//     window.addEventListener('wheel', handleWheel);
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [showOffers]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black">
//       {/* Background Image */}
//       <img
//         src="pine.jpg"
//         alt="hill"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Blur Overlay */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10" />

//       {/* Hero Content */}
//       <div className="absolute inset-0 z-20 flex flex-col items-center">
//         {/* Logo */}
//         <div className="w-[25vh] h-[25vh] m-5">
//           <img src="Logo.png" className="w-full h-fit object-contain" />
//         </div>

//         {/* Headline */}
//         <h1 className="text-5xl text-white font-instrument font-light text-center mt-[3vh]">
//           Not Just a Stay <br /> A Hillside Story
//         </h1>

//         {/* Button */}
//         <button className="bg-white rounded-full w-[12vh] h-[4vh] m-[3vh] font-instrument italic">
//           Gallery
//         </button>

//         {/* "What will I get?" and Arrow */}
//         {!showOffers && (
//           <>
//             <h2 className="text-white font-instrument underline mt-2">
//               What will I get?
//             </h2>
//             <div className="mt-3 animate-bounce">
//               <img src="arrow.png" alt="Up Arrow" className="w-10 h-10" />
//             </div>
//           </>
//         )}
//       </div>

//       {/* Offers Panel */}
//       <div
//         className={`absolute bottom-0 left-0 w-full z-30 transition-transform duration-700 ${
//           showOffers ? 'translate-y-0' : 'translate-y-full'
//         }`}
//       >
//         <Offers />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




// import { useState } from 'react';
// import Offers from '../Components/Offers';

// const HeroSection = () => {
//   const [showOffers, setShowOffers] = useState(false);

//   const handleRevealOffers = () => {
//     setShowOffers(true);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="pine.jpg"
//         alt="hill"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Blur Overlay */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10 transition-all duration-700" />

//       {/* Hero Content */}
//       <div
//         className={`absolute inset-0 z-20 flex flex-col items-center justify-start transition-all duration-700 ${
//           showOffers ? '-translate-y-1/2 opacity-0' : 'opacity-100'
//         }`}
//       >
//         {/* Logo */}
//         <div className="w-[25vh] h-[25vh] m-5">
//           <img src="Logo.png" className="w-full h-fit object-contain" />
//         </div>

//         {/* Headline */}
//         <h1 className="text-5xl text-white font-instrument font-light text-center mt-[3vh]">
//           Not Just a Stay <br /> A Hillside Story
//         </h1>

//         {/* Button */}
//         <button className="bg-white rounded-full w-[12vh] h-[4vh] m-[3vh] font-instrument italic">
//           Gallery
//         </button>

//         {/* Trigger Text */}
//         <h2
//           className="text-white font-instrument underline mt-8 cursor-pointer"
//           onClick={handleRevealOffers}
//         >
//           What will I get?
//         </h2>

//         {/* Arrow */}
//         <div
//           className="mt-6 animate-bounce cursor-pointer"
//           onClick={handleRevealOffers}
//         >
//           <img src="arrow.png" alt="Up Arrow" className="w-10 h-10" />
//         </div>
//       </div>

//       {/* Offers Slide-Up */}
//       <div
//         className={`absolute top-0 left-0 w-full h-full z-30 transition-transform duration-700 ${
//           showOffers ? 'translate-y-0' : 'translate-y-full'
//         }`}
//       >
//         <Offers />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;








// const HeroSection = () => {
// return (
//     <div className="relative w-full h-[100vh] overflow-hidden">
//     <img
//         src="pine.jpg"
//         alt="hill"
//         className="absolute inset-0 w-full h-full object-cover"/>
//         {/* blur */}
//         <div className="w-full h-[100vh] absolute bg-black/29 backdrop-blur-[2px]">
//         {/* logo */}
//             <div className="flex justify-center items-center">
//                 <div className="w-[25vh] h-[25vh] m-5" >
//                     <img src="Logo.png" className="w-full h-fit object-contain"/>
//                 </div>
//             </div>
//         {/* text  */}
//             <div className="flex justify-center items-center  mt-[12vh]">
//                 <div>
//                     <h1 className="flex justify-center items-center text-5xl text-white font-instrument font-light">Not Just a Stay <br></br>A Hillside Story</h1>
//                 </div>
//             </div>
//         {/* button */}
//             <div className="flex justify-center items-center font-instrument italic">
//                     <button className="bg-white rounded-full w-[12vh] h-[4vh] m-[3vh]">Gallery</button>
//             </div>
//         {/* Query */}
//             <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 mb-10">
//             <h2 className="text-white font-instrument">
//                 <u>What will I get?</u>
//             </h2>
//             </div>
//         {/* Up arrow */}
//             <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
//                 <img src="arrow.png" alt="Up Arrow" className="w-10 h-10" />
//             </div>

//         </div>
        
//     </div>
// );
// };

// export default HeroSection;
