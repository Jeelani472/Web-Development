// import { Link } from "react-router-dom"
// import { ArrowRight, Leaf, BarChart3, CloudRain, Microscope, DollarSign } from "lucide-react"

// const Home = () => {
//   return (
//     <div className="flex flex-col w-full">
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80')",
//         }}
//       >
//         <div className="text-center z-10 px-4">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome to Smart Farming</h1>
//           <p className="text-xl md:text-2xl text-white mb-8">We are Here to Help You Grow Better</p>
//           <Link
//             to="/cropstogrow"
//             className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all inline-flex items-center"
//           >
//             Get Started
//             <ArrowRight className="ml-2 h-5 w-5" />
//           </Link>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="py-16 bg-green-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Smart Farming Services</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Crop Recommendation */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <Leaf className="h-8 w-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-center mb-4">Crop Recommendation</h3>
//               <p className="text-gray-600 text-center">
//                 Get personalized crop recommendations based on your soil type, climate, and other factors.
//               </p>
//               <div className="mt-6 text-center">
//                 <Link to="/" className="text-green-600 hover:text-green-800 font-medium">
//                   Learn More →
//                 </Link>
//               </div>
//             </div>

//             {/* Weather Forecast */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <CloudRain className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-center mb-4">Weather Forecast</h3>
//               <p className="text-gray-600 text-center">
//                 Access accurate weather forecasts to plan your farming activities effectively.
//               </p>
//               <div className="mt-6 text-center">
//                 <Link to="/weather" className="text-blue-600 hover:text-blue-800 font-medium">
//                   Learn More →
//                 </Link>
//               </div>
//             </div>

//             {/* Market Price */}
//             <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
//               <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <DollarSign className="h-8 w-8 text-yellow-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-center mb-4">Market Price</h3>
//               <p className="text-gray-600 text-center">
//                 Stay updated with the latest market prices for your crops and make informed decisions.
//               </p>
//               <div className="mt-6 text-center">
//                 <Link to="/marketprice" className="text-yellow-600 hover:text-yellow-800 font-medium">
//                   Learn More →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16 bg-gradient-to-r from-green-500 to-yellow-400 text-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div>
//               <h3 className="text-5xl font-bold mb-4">2000+</h3>
//               <p className="text-lg">Farmers Using Our Platform</p>
//             </div>
//             <div>
//               <h3 className="text-5xl font-bold mb-4">50+</h3>
//               <p className="text-lg">Crop Varieties Supported</p>
//             </div>
//             <div>
//               <h3 className="text-5xl font-bold mb-4">95%</h3>
//               <p className="text-lg">Accuracy in Predictions</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Objectives Section */}
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Objectives of Smart Farming</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-6 border border-gray-200 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <Leaf className="h-6 w-6 text-green-600 mr-3" />
//                 <h3 className="text-xl font-semibold">Sustainable Farming</h3>
//               </div>
//               <p className="text-gray-600">
//                 Promote sustainable farming practices to ensure long-term productivity and environmental health.
//               </p>
//             </div>

//             <div className="p-6 border border-gray-200 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <BarChart3 className="h-6 w-6 text-green-600 mr-3" />
//                 <h3 className="text-xl font-semibold">Increased Yield</h3>
//               </div>
//               <p className="text-gray-600">
//                 Help farmers increase their crop yield through data-driven recommendations and best practices.
//               </p>
//             </div>

//             <div className="p-6 border border-gray-200 rounded-lg">
//               <div className="flex items-center mb-4">
//                 <Microscope className="h-6 w-6 text-green-600 mr-3" />
//                 <h3 className="text-xl font-semibold">Disease Prevention</h3>
//               </div>
//               <p className="text-gray-600">
//                 Early detection and prevention of crop diseases to minimize losses and improve crop health.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home












import { Link } from "react-router-dom"
import { ArrowRight, Leaf, CloudRain, DollarSign, TreesIcon as Plant, Microscope } from "lucide-react"

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Blue Gradient */}
      <div className="w-full py-16 px-4 bg-gradient-to-r from-blue-900 to-cyan-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome to Smart Farming</h1>
          <p className="text-xl md:text-2xl text-white mb-8">We are Here to Help You Grow Better</p>
          <Link
            to="/crop"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-all inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Our Smart Farming Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Crop Recommendation */}
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start mb-4">
                <Leaf className="h-6 w-6 text-green-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Crop Recommendation</h3>
                  <p className="text-gray-300">
                    Get personalized crop recommendations based on your soil type, climate, and other factors.
                  </p>
                </div>
              </div>
              <Link to="/crop" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Weather Forecast */}
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start mb-4">
                <CloudRain className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Weather Forecast</h3>
                  <p className="text-gray-300">
                    Access accurate weather forecasts to plan your farming activities effectively.
                  </p>
                </div>
              </div>
              <Link
                to="/weather"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Market Price */}
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-start mb-4">
                <DollarSign className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Market Price</h3>
                  <p className="text-gray-300">
                    Stay updated with the latest market prices for your crops and make informed decisions.
                  </p>
                </div>
              </div>
              <Link
                to="/marketprice"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Crops to Grow */}
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-400">
              <div className="flex items-start mb-4">
                <Plant className="h-6 w-6 text-green-400 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Crops to Grow</h3>
                  <p className="text-gray-300">
                    Discover which crops are best suited for your region and current season.
                  </p>
                </div>
              </div>
              <Link
                to="/cropstogrow"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Disease Predictor */}
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-start mb-4">
                <Microscope className="h-6 w-6 text-red-500 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Disease Predictor</h3>
                  <p className="text-gray-300">
                    Identify and prevent crop diseases with our advanced prediction tools.
                  </p>
                </div>
              </div>
              <Link
                to="/cropsdisease"
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold mb-4">2000+</h3>
              <p className="text-lg">Farmers Using Our Platform</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4">50+</h3>
              <p className="text-lg">Crop Varieties Supported</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4">95%</h3>
              <p className="text-lg">Accuracy in Predictions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

