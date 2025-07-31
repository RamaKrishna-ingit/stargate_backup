import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Import your components
import HeroSection from './Pages/HeroSection';
import Gallery from './Pages/Gallery';
import GreenPage from './Pages/GreenPage';
import PinkPage from './Pages/PinkPage';
import BrownPage from './Pages/BrownPage';
import GreyPage from './Pages/GreyPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/green" element={<GreenPage />} />
        <Route path="/pink" element={<PinkPage />} />
        <Route path="/brown" element={<BrownPage />} />
        <Route path="/grey" element={<GreyPage />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React from 'react'
// import HeroSection from './Pages/HeroSection'
// import Offers from './Components/Offers'
// import Gallery from './Pages/Gallery'
// import GreenPage from './Pages/GreenPage'
// import PinkPage from './Pages/PinkPage'
// import BrownPage from './Pages/BrownPage'
// import GreyPage from './Pages/GreyPage'

// const App = () => {
//   return (
//     <>
//     {/* <HeroSection/> */}
//     {/* <Gallery/> */}
//     {/* <GreenPage/> */}
//     {/* <PinkPage/> */}
//     {/* <BrownPage/> */}
//     {/* <GreyPage/> */}
//     </>
//   )
// }

// export default App