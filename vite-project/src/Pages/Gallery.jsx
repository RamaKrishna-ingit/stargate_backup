import React from 'react'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const navigate = useNavigate();

  // Image paths
  const images = [
    'GreenBed2-min.JPG',       // 1 BHK
    'BedPainting-min.jpeg',    // 2 BHK
    'MainSingle-min.JPG',      // 3 BHK (grey)
    'DoubleBrown-min.JPG'      // 3 BHK (brown)
  ];

  // Navigation targets for each item
  const routes = ['/green', '/pink', '/grey', '/brown'];

  return (
    <div className="h-screen flex flex-col">

      {/* 🔹 Top Bar (Sticky Top) */}
      <div className="h-[10vh] bg-white px-4 flex items-center justify-between border-b z-10 sticky top-0">
        <button onClick={()=> navigate('/')}><img src="side.png" alt="Back" className="w-4" /></button>
        <h1 className="text-xl tracking-widest font-zendots mr-3">A STAR GATE</h1>
        <div className="p-2"><img src="astar.png" className='w-10' /></div>
      </div>

      {/* 🔄 Scrollable Content */}
      <div className="flex-grow overflow-y-auto">
        <h1 className='font-instrument text-center text-4xl mt-3 mb-3'>Our unique palette</h1>

        {images.map((src, index) => (
          <div key={index} className='mt-5 drop-shadow-lg/50'>
            <div className='w-full h-[25vh] bg-white border-2 overflow-hidden'>
              <img 
                src={src}
                alt={`${index + 1} BHK`}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full h-[5vh] bg-white flex border-2 border-t-0'>
              <div className='w-[12vh] h-[5vh] flex justify-center items-center border-b-2'>
                <button 
                  className='text-center w-[12vh] h-[12vh] text-sm' 
                  onClick={() => navigate(routes[index])}
                >
                  More Info
                </button>
              </div>
              <div className='w-[12vh] h-[5vh] flex justify-center items-center border-b-2'>
                <button 
                  className='text-center w-[12vh] h-[12vh] text-sm' 
                  onClick={() => navigate(routes[index])}
                >
                  More Images
                </button>
              </div>
              <div className='h-[5vh] w-[12vh] flex justify-center items-center'>
                <h1 className='text-center text-2xl font-instrument font-bold'>
                  {(index === 3 ? 3 : index + 1)} BHK
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔻 Bottom Bar (Sticky Bottom) */}
      <div className="h-[8vh] bg-white border-t flex items-center justify-center sticky bottom-0 z-10">
        <img src="color.png" />
      </div>
    </div>
  );
};

export default Gallery;


// import React from 'react'

// const Gallery = () => {
//   // Array of image paths based on your requirement
//   const images = [
//     'GreenBed2-min.JPG',   // 1 BHK
//     'BedPainting-min.jpeg',    // 2 BHK
//     'MainSingle-min.JPG',    // 3 BHK (div 3)
//     'DoubleBrown-min.JPG'    // 3 BHK (div 4)
//   ]

//   return (
//     <div className="h-screen flex flex-col">

//       {/* 🔹 Top Bar (Sticky Top) */}
//       <div className="h-[10vh] bg-white px-4 flex items-center justify-between border-b z-10 sticky top-0">
//         <button className="w-15 ml-4"><img src="side.png" /></button>
//         <h1 className="text-xl tracking-widest font-zendots mr-3">A STAR GATE</h1>
//         <div className="p-2"><img src="astar.png" className='w-10' /></div>
//       </div>

//       {/* 🔄 Scrollable Content */}
//       <div className="flex-grow overflow-y-auto">
//         <h1 className='font-instrument text-center text-4xl mt-3 mb-3 '>Our unique palette</h1>

//         {[1, 2, 3, 4].map((item, index) => (
//           <div key={index} className='mt-5 drop-shadow-lg/50'>
//             <div className='w-full h-[25vh] bg-white border-2 overflow-hidden'>
//               <img 
//                 src={images[index]}
//                 alt={`${index + 1} BHK`}
//                 className='w-full h-full object-cover'
//               />
//             </div>
//             <div className='w-full h-[5vh] bg-white flex border-2 border-t-0'>
//               <div className='w-[12vh] h-[5vh] flex justify-center items-center border-b-2'>
//                 <button className='text-center w-[12vh] h-[12vh]'>More Info</button>
//               </div>
//               <div className='w-[12vh] h-[5vh] flex justify-center items-center border-b-2'>
//                 <button className='text-center w-[12vh] h-[12vh]'>More Images</button>
//               </div>
//               <div className='h-[5vh] w-[12vh] flex justify-center items-center'>
//                 <h1 className='text-center text-2xl font-instrument font-bold '>
//                   {(index === 3 ? 3 : index + 1)} BHK
//                 </h1>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 🔻 Bottom Bar (Sticky Bottom) */}
//       <div className="h-[8vh] bg-white border-t flex items-center justify-center sticky bottom-0 z-10">
//         <img src="color.png" />
//       </div>
//     </div>
//   )
// }

// export default Gallery


// import React from 'react'

// const Gallery = () => {
//   return (
// <div className="h-screen flex flex-col overflow-scroll">

//   {/* 🔹 Top Bar (Always Visible) */}
//   <div className="h-[10vh] bg-white px-4 flex items-center justify-between border-b z-10">
//     <button className="w-15 ml-4"><img src="side.png"/></button>
//     <h1 className="text-xl  tracking-widest font-zendots mr-3">A STAR GATE</h1>
//     <div className="p-2"><img src="astar.png" className='w-10'/></div>
//   </div>

//   {/* Scrollable Content */}
//   <div className="overflow-none">
//     <h1 className='font-instrument text-center text-4xl mt-3 mb-3 '>Our unique palette</h1>
//     <div className='mt-5 drop-shadow-lg/50'>
//         <div className='w-full h-[25vh] bg-white border-2'>
//             <img />
//         </div>
//         <div className='w-full h-[5vh] bg-white flex border-2 border-t-0  '>
            
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Info</button></div>
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Images</button></div>
//             <div className='h-[5vh] w-[12vh] flex justify-center items-center left-10'><h1 className='text-center text-2xl font-instrument font-bold '>1 BHK</h1></div>
//         </div>
//     </div>

//     <div className='mt-5 drop-shadow-lg/50'>
//         <div className='w-full h-[25vh] bg-white border-2'> <img/></div>
//         <div className='w-full h-[5vh] bg-white flex border-2 border-t-0  '>
            
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Info</button></div>
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Images</button></div>
//             <div className='h-[5vh] w-[12vh] flex justify-center items-center left-10'><h1 className='text-center text-2xl font-instrument font-bold '>2 BHK</h1></div>
//         </div>
//     </div>

//     <div className='mt-5 drop-shadow-lg/50'>
//         <div className='w-full h-[25vh] bg-white border-2'></div>
//         <div className='w-full h-[5vh] bg-white flex border-2 border-t-0  '>
            
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Info</button></div>
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Images</button></div>
//             <div className='h-[5vh] w-[12vh] flex justify-center items-center left-10'><h1 className='text-center text-2xl font-instrument font-bold '>3 BHK</h1></div>
//         </div>
//     </div>

//     <div className='mt-5 drop-shadow-lg/50'>
//         <div className='w-full h-[25vh] bg-white border-2'><img/></div>
//         <div className='w-full h-[5vh] bg-white flex border-2 border-t-0  '>
            
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Info</button></div>
//             <div className='mr-0 w-[12vh] h-[5vh] white flex justify-center items-center border-b-2'><button className='text-center w-[12vh] h-[12vh]'>More Images</button></div>
//             <div className='h-[5vh] w-[12vh] flex justify-center items-center left-10'><h1 className='text-center text-2xl font-instrument font-bold '>3 BHK</h1></div>
//         </div>
//     </div>

//   </div>

//   {/* 🔻 Bottom Bar (Always Visible) */}
//   <div className="h-[8vh] bg-white border-t flex items-center justify-center z-50 sticky">
//     {/* Color Dots */}
//     <img src="color.png"/>
//   </div>
// </div>

//   )
// }

// export default Gallery