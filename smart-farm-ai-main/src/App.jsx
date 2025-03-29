



// import { useState, useEffect } from "react"
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
// import { FaBars, FaTimes } from "react-icons/fa"
// import CropForm from "./components/CropForm"
// import CropRecommendations from "./components/CropRecommendations"
// import Loader from "./components/Loader"
// import Weather from "./components/Weather"
// import MarketPrice from "./components/MarketPrice"
// import CropList from "./components/CropList"
// // import DiseasePredictor from "./components/DiseasePredictor"
// import Home from "./components/Home"
// import Logo from "./assets/logo.png"
// // import './app.css'

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
//         <header className="bg-green-900 shadow-md z-10 sticky top-0">
//           <div className="max-w-7xl mx-auto px-4">
//             <div className="flex justify-between items-center py-4">
//               {/* Logo */}
//               <div className="flex items-center gap-3">
//                 <img src={Logo} alt="Smart Farming Logo" className="h-16 w-16 object-contain" />
//                 <h1 className="text-3xl font-bold text-white">Smart Farming</h1>
//               </div>

//               {/* Hamburger Menu for Small Screens */}
//               <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//               </button>
//               <nav
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

//                 {/* <Link to="/cropsdisease" className="text-lg hover:text-red-400 transition flex items-center">
//                   🦠 Disease Predictor
//                 </Link> */}
//               </div>
//             </nav>
//             </div>

//             {/* Navigation Links */}
            
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
//             {/* <Route
//               path="/cropsdisease"
//               element={
//                 <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
//                   <DiseasePredictor />
//                 </div>
//               }
//             /> */}
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





import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import CropForm from "./components/CropForm"
import CropRecommendations from "./components/CropRecommendations"
import Loader from "./components/Loader"
import Weather from "./components/Weather"
import MarketPrice from "./components/MarketPrice"
import CropList from "./components/CropList"
// import DiseasePredictor from "./components/DiseasePredictor"
import Home from "./components/Home"
import Logo from "./assets/logo.png"

const App = () => {
  const [recommendations, setRecommendations] = useState("")
  const [loading, setLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col text-white">
        
        {/* Navigation */}
        <header className="bg-green-900 shadow-md z-10 sticky top-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img src={Logo} alt="Smart Farming Logo" className="h-16 w-16 object-contain" />
                <h1 className="text-3xl font-bold text-white">Smart Farming</h1>
              </div>

              {/* Hamburger Menu for Small Screens */}
              <button onClick={toggleMenu} className="text-white text-2xl md:hidden">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* Desktop Nav */}
              <nav className="hidden md:block">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    className="text-lg text-white [text-decoration:none] hover:[text-decoration:none] transition flex items-center hover:text-blue-400"
                  >
                    🏠 Home
                  </Link>
                  <Link
                    to="/crop"
                    style={{ textDecoration: "none", color: "white" }}
                    className="text-lg text-white [text-decoration:none] hover:[text-decoration:none] transition flex items-center hover:text-green-400"
                  >
                    🌾 Crop
                  </Link>
                  <Link
                    to="/weather"
                    style={{ textDecoration: "none", color: "white" }}
                    className="text-lg text-white [text-decoration:none] hover:[text-decoration:none] transition flex items-center hover:text-yellow-400"
                  >
                    🌦️ Weather
                  </Link>
                  <Link
                    to="/marketprice"
                    style={{ textDecoration: "none", color: "white" }}
                    className="text-lg text-white [text-decoration:none] hover:[text-decoration:none] transition flex items-center hover:text-amber-400"
                  >
                    💰 Market Price
                  </Link>
                  <Link
                    to="/cropstogrow"
                    style={{ textDecoration: "none", color: "white" }}
                    className="text-lg text-white [text-decoration:none] hover:[text-decoration:none] transition flex items-center hover:text-green-400"
                  >
                    🌿 Crops to Grow
                  </Link>
                  {/*
                  <Link
                    to="/cropsdisease"
                    className="text-lg text-white [text-decoration:none] hover:[text-decoration:none] transition flex items-center hover:text-red-400"
                  >
                    🦠 Disease Predictor
                  </Link>
                  */}
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div className="fixed inset-0 bg-white z-20 md:hidden">
              <div className="p-4">
                <button onClick={toggleMenu} className="text-black text-2xl mb-4">
                  <FaTimes />
                </button>
                <nav className="flex flex-col space-y-4">
                  <Link
                    onClick={toggleMenu}
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                    className="[text-decoration:none] hover:[text-decoration:none] text-lg text-black"
                  >
                    🏠 Home
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/crop"
                    style={{ textDecoration: "none", color: "white" }}
                    className="[text-decoration:none] hover:[text-decoration:none] text-lg text-black"
                  >
                    🌾 Crop
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/weather"
                    style={{ textDecoration: "none", color: "white" }}
                    className="[text-decoration:none] hover:[text-decoration:none] text-lg text-black"
                  >
                    🌦️ Weather
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/marketprice"
                    style={{ textDecoration: "none", color: "white" }}
                    className="[text-decoration:none] hover:[text-decoration:none] text-lg text-black"
                  >
                    💰 Market Price
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/cropstogrow"
                    style={{ textDecoration: "none", color: "white" }}
                    className="[text-decoration:none] hover:[text-decoration:none] text-lg text-black"
                  >
                    🌿 Crops to Grow
                  </Link>
                  {/*
                  <Link
                    onClick={toggleMenu}
                    to="/cropsdisease"
                    className="[text-decoration:none] hover:[text-decoration:none] text-lg text-black"
                  >
                    🦠 Disease Predictor
                  </Link>
                  */}
                </nav>
              </div>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Crop Route */}
            <Route
              path="/crop"
              element={
                <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
                  {/* Form */}
                  <CropForm
                    setRecommendations={setRecommendations}
                    setLoading={setLoading}
                  />
                  {/* Recommendations or Loader */}
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
              }
            />

            {/* Weather Route */}
            <Route
              path="/weather"
              element={
                <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
                  <Weather />
                </div>
              }
            />

            {/* Market Price Route */}
            <Route
              path="/marketprice"
              element={
                <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
                  <MarketPrice />
                </div>
              }
            />

            {/* Crops to Grow Route */}
            <Route
              path="/cropstogrow"
              element={
                <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
                  <CropList />
                </div>
              }
            />

            {/* Crop Disease Predictor Route */}
            {/* 
            <Route
              path="/cropsdisease"
              element={
                <div className="p-6 mx-auto max-w-[95%] md:max-w-[85%] lg:max-w-[70%]">
                  <DiseasePredictor />
                </div>
              }
            />
            */}
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-green-800 text-white p-6 text-center shadow-lg">
          <p>© {new Date().getFullYear()} Smart Farming Assistant. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
