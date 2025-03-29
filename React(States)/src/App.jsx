
// // import './App.css'
// // import LikeButton from './LikeButton';

// // function App(){
// //   return (
// //     <>
// //       <p>States in React</p>
// //       <LikeButton/>
// //     </>
// //   )
// // }
// // export default App;





// // import { useState, useEffect } from "react"
// // import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
// // import { FaBars, FaTimes } from "react-icons/fa" // ✅ Icons for hamburger menu
// // import CropForm from "./components/CropForm";
// // import CropRecommendations from "./components/CropRecommendations"
// // import Loader from "./components/Loader"
// // import Weather from "./components/Weather"
// // import MarketPrice from "./components/MarketPrice"
// // import CropList from "./components/CropList" // 🌿 Crops to Grow
// // import DiseasePredictor from "./components/DiseasePredictor" // 🦠 Disease Predictor
// // import Home from "./components/Home" // 🏠 New Home component

// // const App = () => {
// //   const [recommendations, setRecommendations] = useState("")
// //   const [loading, setLoading] = useState(false)
// //   const [menuOpen, setMenuOpen] = useState(false) // ✅ Mobile menu state

// //   // ✅ Close menu on route change
// //   useEffect(() => {
// //     setMenuOpen(false)
// //   }, [])

// //   const toggleMenu = () => {
// //     setMenuOpen(!menuOpen)
// //   }

// //   return (
// //     <Router>
// //       <div className="min-h-screen bg-gray-100 flex flex-col sticky">
// //         {/* 🔥 Navigation */}
// //         <header className="bg-white shadow-md z-10">
// //           <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
// //             {/* 🌿 Logo */}
// //             <div className="flex items-center gap-4">
// //               <h1 className="text-2xl font-bold text-green-700">🌾 Smart Farming</h1>
// //             </div>

// //             {/* 🌿 Hamburger Menu for Small Screens */}
// //             <button onClick={toggleMenu} className="text-green-700 text-2xl lg:hidden">
// //               {menuOpen ? <FaTimes /> : <FaBars />}
// //             </button>

// //             {/* ✅ Navigation Links */}
// //             <nav
// //               className={`lg:flex items-center gap-8 transition-all duration-300 ${
// //                 menuOpen ? "block" : "hidden"
// //               } lg:block absolute lg:static top-16 left-0 w-full bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10`}
// //             >
// //               <Link
// //                 to="/"
// //                 className="block lg:inline-block text-lg text-green-800 px-4 py-2 hover:bg-green-200 rounded-lg transition"
// //               >
// //                 🏠 Home
// //               </Link>

// //               <Link
// //                 to="/crop"
// //                 className="block lg:inline-block text-lg text-green-800 px-4 py-2 hover:bg-green-200 rounded-lg transition"
// //               >
// //                 🌾 Crop
// //               </Link>

// //               <Link
// //                 to="/weather"
// //                 className="block lg:inline-block text-lg text-blue-800 px-4 py-2 hover:bg-blue-200 rounded-lg transition"
// //               >
// //                 🌦️ Weather
// //               </Link>

// //               <Link
// //                 to="/marketprice"
// //                 className="block lg:inline-block text-lg text-yellow-800 px-4 py-2 hover:bg-yellow-200 rounded-lg transition"
// //               >
// //                 💰 Market Price
// //               </Link>

// //               <Link
// //                 to="/cropstogrow"
// //                 className="block lg:inline-block text-lg text-green-600 px-4 py-2 hover:bg-green-200 rounded-lg transition"
// //               >
// //                 🌿 Crops to Grow
// //               </Link>

// //               <Link
// //                 to="/cropsdisease"
// //                 className="block lg:inline-block text-lg text-red-800 px-4 py-2 hover:bg-red-200 rounded-lg transition"
// //               >
// //                 🦠 Disease Predictor
// //               </Link>
// //             </nav>
// //           </div>
// //         </header>

// //         {/* 🌿 Page Content */}
// //         <main className="flex-grow">
// //           <Routes>
// //             {/* 🏠 Home Route */}
// //             <Route path="/" element={<Home />} />

// //             {/* 🌾 Crop Route */}
// //             <Route
// //               path="/crop"
// //               element={
// //                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
// //                   <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
// //                     {/* 🌿 Wider Form Section */}
// //                     <div className="w-full bg-white p-12 rounded-lg shadow-lg">
// //                       <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">🌾 Smart Farming Assistant</h1>

// //                       <CropForm setRecommendations={setRecommendations} setLoading={setLoading} />
// //                     </div>

// //                     {/* 🌾 Recommendations Section */}
// //                     <div className="w-full lg:w-3/5">
// //                       {loading ? (
// //                         <Loader />
// //                       ) : (
// //                         recommendations && (
// //                           <div className="mt-6">
// //                             <CropRecommendations recommendations={recommendations} />
// //                           </div>
// //                         )
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               }
// //             />

// //             {/* 🌦️ Weather Route */}
// //             <Route
// //               path="/weather"
// //               element={
// //                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
// //                   <Weather />
// //                 </div>
// //               }
// //             />

// //             {/* 💰 Market Price Route */}
// //             <Route
// //               path="/marketprice"
// //               element={
// //                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
// //                   <MarketPrice />
// //                 </div>
// //               }
// //             />

// //             {/* 🌿 Crops to Grow Route */}
// //             <Route
// //               path="/cropstogrow"
// //               element={
// //                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
// //                   <CropList />
// //                 </div>
// //               }
// //             />

// //             {/* 🦠 Crop Disease Predictor Route */}
// //             <Route
// //               path="/cropsdisease"
// //               element={
// //                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
// //                   <DiseasePredictor />
// //                 </div>
// //               }
// //             />
// //           </Routes>
// //         </main>

// //         {/* ✅ Sticky Green Footer */}
// //         <footer className="bg-green-700 text-white p-6 text-center shadow-lg bottom-0">
// //           <p>© {new Date().getFullYear()} Smart Farming Assistant. All rights reserved.</p>
// //         </footer>
// //       </div>
// //     </Router>
// //   )
// // }

// // export default App


// "use client"

// import { useState, useEffect } from "react"
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
// import { FaBars, FaTimes } from "react-icons/fa"
// import CropForm from "./components/CropForm"
// import CropRecommendations from "./components/CropRecommendations"
// import Loader from "./components/Loader"
// import Weather from "./components/Weather"
// import MarketPrice from "./components/MarketPrice"
// import CropList from "./components/CropList"
// import DiseasePredictor from "./components/DiseasePredictor"
// import Home from "./components/Home"

// const App = () => {
//   const [recommendations, setRecommendations] = useState("")
//   const [loading, setLoading] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)

//   // Close menu on route change
//   useEffect(() => {
//     setMenuOpen(false)
//   }, [])

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen)
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-900 flex flex-col text-white">
//         {/* Navigation */}
//         <header className="bg-gray-900 shadow-md z-10 sticky top-0">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex justify-between items-center py-4">
//               {/* Logo */}
//               <div className="flex items-center gap-3">
//                 <img src="/placeholder.svg?height=40&width=40" alt="Smart Farming Logo" className="h-10 w-10" />
//                 <h1 className="text-3xl font-bold text-white">Smart Farming</h1>
//               </div>

//               {/* Hamburger Menu for Small Screens */}
//               <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//               </button>
//             </div>

//             {/* Navigation Links */}
//             <nav
//               className={`py-3 transition-all duration-300 ${
//                 menuOpen ? "block" : "hidden md:block"
//               } border-t border-gray-800 md:border-t-0`}
//             >
//               <div className="flex flex-col md:flex-row gap-4 md:gap-8">
//                 <Link to="/" className="text-lg hover:text-blue-400 transition flex items-center">
//                   🏠 Home
//                 </Link>

//                 <Link to="/crop" className="text-lg hover:text-green-400 transition flex items-center">
//                   🌾 Crop
//                 </Link>

//                 <Link to="/weather" className="text-lg hover:text-yellow-400 transition flex items-center">
//                   🌦️ Weather
//                 </Link>

//                 <Link to="/marketprice" className="text-lg hover:text-amber-400 transition flex items-center">
//                   💰 Market Price
//                 </Link>

//                 <Link to="/cropstogrow" className="text-lg hover:text-green-400 transition flex items-center">
//                   🌿 Crops to Grow
//                 </Link>

//                 <Link to="/cropsdisease" className="text-lg hover:text-red-400 transition flex items-center">
//                   🦠 Disease Predictor
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-grow">
//           <Routes>
//             {/* Home Route */}
//             <Route path="/" element={<Home />} />

//             {/* Crop Route */}
//             <Route
//               path="/crop"
//               element={
//                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
//                   <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
//                     {/* Wider Form Section */}
//                     <div className="w-full bg-gray-800 p-12 rounded-lg shadow-lg">
//                       <h1 className="text-4xl font-bold text-green-400 mb-8 text-center">🌾 Smart Farming Assistant</h1>

//                       <CropForm setRecommendations={setRecommendations} setLoading={setLoading} />
//                     </div>

//                     {/* Recommendations Section */}
//                     <div className="w-full lg:w-3/5">
//                       {loading ? (
//                         <Loader />
//                       ) : (
//                         recommendations && (
//                           <div className="mt-6">
//                             <CropRecommendations recommendations={recommendations} />
//                           </div>
//                         )
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               }
//             />

//             {/* Weather Route */}
//             <Route
//               path="/weather"
//               element={
//                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
//                   <Weather />
//                 </div>
//               }
//             />

//             {/* Market Price Route */}
//             <Route
//               path="/marketprice"
//               element={
//                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
//                   <MarketPrice />
//                 </div>
//               }
//             />

//             {/* Crops to Grow Route */}
//             <Route
//               path="/cropstogrow"
//               element={
//                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
//                   <CropList />
//                 </div>
//               }
//             />

//             {/* Crop Disease Predictor Route */}
//             <Route
//               path="/cropsdisease"
//               element={
//                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
//                   <DiseasePredictor />
//                 </div>
//               }
//             />
//           </Routes>
//         </main>

//         {/* Footer */}
//         <footer className="bg-green-800 text-white p-6 text-center shadow-lg">
//           <p>© {new Date().getFullYear()} Smart Farming Assistant. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   )
// }

// export default App





import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";  // ✅ Icons for hamburger menu
import CropForm from "./components/CropForm";
import CropRecommendations from "./components/CropRecommendations";
import Loader from "./components/Loader";
import Weather from "./components/Weather";
import MarketPrice from "./components/MarketPrice";
import CropList from "./components/CropList";   // 🌿 Crops to Grow
import DiseasePredictor from "./components/DiseasePredictor";  // 🦠 Disease Predictor

const App = () => {
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  // ✅ Mobile menu state

  // ✅ Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col sticky">

        {/* 🔥 Navigation */}
        <header className="bg-white shadow-md z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
            
            {/* 🌿 Logo */}
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-green-700">🌾 Smart Farming</h1>
            </div>

            {/* 🌿 Hamburger Menu for Small Screens */}
            <button
              onClick={toggleMenu}
              className="text-green-700 text-2xl lg:hidden"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* ✅ Navigation Links */}
            <nav
              className={`lg:flex items-center gap-8 transition-all duration-300 ${
                menuOpen ? "block" : "hidden"
              } lg:block absolute lg:static top-16 left-0 w-full bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10`}
            >
              <Link
                to="/"
                className="block lg:inline-block text-lg text-green-800 px-4 py-2 hover:bg-green-200 rounded-lg transition"
              >
                🌾 Crop
              </Link>

              <Link
                to="/weather"
                className="block lg:inline-block text-lg text-blue-800 px-4 py-2 hover:bg-blue-200 rounded-lg transition"
              >
                🌦️ Weather
              </Link>

              <Link
                to="/marketprice"
                className="block lg:inline-block text-lg text-yellow-800 px-4 py-2 hover:bg-yellow-200 rounded-lg transition"
              >
                💰 Market Price
              </Link>

              <Link
                to="/cropstogrow"
                className="block lg:inline-block text-lg text-green-600 px-4 py-2 hover:bg-green-200 rounded-lg transition"
              >
                🌿 Crops to Grow
              </Link>

              <Link
                to="/cropsdisease"
                className="block lg:inline-block text-lg text-red-800 px-4 py-2 hover:bg-red-200 rounded-lg transition"
              >
                🦠 Disease Predictor
              </Link>
            </nav>
          </div>
        </header>

        {/* 🌿 Page Content */}
        <main className="flex-grow p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
          <div className="container mx-auto">

            <Routes>

              {/* 🌾 Crop Route */}
              <Route
                path="/"
                element={
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-8">

                    {/* 🌿 Wider Form Section */}
                    <div className="w-full bg-white p-12 rounded-lg shadow-lg">
                      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
                        🌾 Smart Farming Assistant
                      </h1>

                      <CropForm
                        setRecommendations={setRecommendations}
                        setLoading={setLoading}
                      />
                    </div>

                    {/* 🌾 Recommendations Section */}
                    <div className="w-full lg:w-3/5">
                      {loading ? (
                        <Loader />
                      ) : (
                        recommendations && (
                          <div className="mt-6">
                            <CropRecommendations recommendations={recommendations} />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                }
              />

              {/* 🌦️ Weather Route */}
              <Route path="/weather" element={<Weather />} />

              {/* 💰 Market Price Route */}
              <Route path="/marketprice" element={<MarketPrice />} />

              {/* 🌿 Crops to Grow Route */}
              <Route path="/cropstogrow" element={<CropList />} />

              {/* 🦠 Crop Disease Predictor Route */}
              <Route path="/cropsdisease" element={<DiseasePredictor />} />

            </Routes>
          </div>
        </main>
        {/* ✅ Sticky Green Footer */}
        <footer className="bg-green-700 text-white p-6 text-center shadow-lg bottom-0">
          <p>© {new Date().getFullYear()} Smart Farming Assistant. All rights reserved.</p>
        </footer>

      </div>
    </Router>
  );
};

export default App;