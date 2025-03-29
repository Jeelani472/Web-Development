// import { Link } from "react-router-dom"
// import { ArrowRight, Leaf, CloudRain, DollarSign, TreesIcon as Plant, Microscope } from "lucide-react"
// import fieldVideo from "../assets/field.mp4"
// const Home = () => {
//   return (
//     <div className="flex flex-col w-full">
//       {/* Hero Section with Video Background */}
//       <div className="relative w-full  h-[500px] py-16 px-4">
//         {/* Video Background */}
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           src={fieldVideo}  // Replace with your video source path
//         />
//         {/* Overlay to improve text readability */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
//     <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//       Welcome to Smart Farming
//     </h1>
//     <p className="text-xl md:text-2xl text-white mb-8">
//       We are Here to Help You Grow Better
//     </p>
//     <Link
//       to="/crop"
//       style={{ textDecoration: "none", color: "white" }}
//       className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-all inline-flex items-center"
//     >
//       Get Started
//       <ArrowRight className="ml-2 h-5 w-5" />
//     </Link>
//   </div>
//       </div>

//       {/* Services Section */}
//       <div className="py-12 px-4 bg-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-white mb-12">Our Smart Farming Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Crop Recommendation */}
//             <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-500">
//               <div className="flex items-start mb-4">
//                 <Leaf className="h-6 w-6 text-green-500 mr-3 mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">Crop Recommendation</h3>
//                   <p className="text-gray-300">
//                     Get personalized crop recommendations based on your soil type, climate, and other factors.
//                   </p>
//                 </div>
//               </div>
//               <Link to="/crop" style={{ textDecoration: "none", color: "white" }} className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2">
//                 Learn More <ArrowRight className="ml-1 h-4 w-4" />
//               </Link>
//             </div>

//             {/* Weather Forecast */}
//             <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500">
//               <div className="flex items-start mb-4">
//                 <CloudRain className="h-6 w-6 text-blue-500 mr-3 mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">Weather Forecast</h3>
//                   <p className="text-gray-300">
//                     Access accurate weather forecasts to plan your farming activities effectively.
//                   </p>
//                 </div>
//               </div>
//               <Link
//                 to="/weather"
//                 style={{ textDecoration: "none", color: "white" }}
//                 className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
//               >
//                 Learn More <ArrowRight className="ml-1 h-4 w-4" />
//               </Link>
//             </div>

//             {/* Market Price */}
//             <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-yellow-500">
//               <div className="flex items-start mb-4">
//                 <DollarSign className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">Market Price</h3>
//                   <p className="text-gray-300">
//                     Stay updated with the latest market prices for your crops and make informed decisions.
//                   </p>
//                 </div>
//               </div>
//               <Link
//                 to="/marketprice"
//                 style={{ textDecoration: "none", color: "white" }}
//                 className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
//               >
//                 Learn More <ArrowRight className="ml-1 h-4 w-4" />
//               </Link>
//             </div>

//             {/* Crops to Grow */}
//             <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-400">
//               <div className="flex items-start mb-4">
//                 <Plant className="h-6 w-6 text-green-400 mr-3 mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">Crops to Grow</h3>
//                   <p className="text-gray-300">
//                     Discover which crops are best suited for your region and current season.
//                   </p>
//                 </div>
//               </div>
//               <Link
//                 to="/cropstogrow"
//                 style={{ textDecoration: "none", color: "white" }}
//                 className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
//               >
//                 Learn More <ArrowRight className="ml-1 h-4 w-4" />
//               </Link>
//             </div>

//             {/* Disease Predictor */}
//             <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-red-500">
//               <div className="flex items-start mb-4">
//                 <Microscope className="h-6 w-6 text-red-500 mr-3 mt-1" />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white mb-2">Disease Predictor</h3>
//                   <p className="text-gray-300">
//                     Identify and prevent crop diseases with our advanced prediction tools.
//                   </p>
//                 </div>
//               </div>
//               <Link
//                 to="/cropsdisease"
//                 style={{ textDecoration: "none", color: "white" }}
//                 className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
//               >
//                 Learn More <ArrowRight className="ml-1 h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="py-16 bg-gradient-to-r from-green-800 to-green-600 text-white">
//         <div className="max-w-7xl mx-auto px-4">
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
//     </div>
//   )
// }

// export default Home










import { Link } from "react-router-dom"
import {
  ArrowRight,
  Leaf,
  CloudRain,
  DollarSign,
  TreesIcon as Plant,
  Microscope,
  HandCoins,
  UserCheck,
  BarChart3,
  Key,
  Clock,
} from "lucide-react"
import fieldVideo from "../assets/field.mp4"

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[500px] py-16 px-4 mb-8">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={fieldVideo} // Replace with your video source path
        />
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome to Smart Farming</h1>
          <p className="text-xl md:text-2xl text-white mb-8">We are Here to Help You Grow Better</p>
          <Link
            to="/crop"
            style={{ textDecoration: "none", color: "white" }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-all inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Objectives Section - Inspired by first image */}
      {/* Objectives Section - Updated */}
      <div className="py-12 px-4 bg-gradient-to-r from-green-400 to-yellow-300 mb-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-10">
            Objectives of Smart Farming
          </h2>

          {/* Horizontal scrollable container for objectives */}
          <div className="flex flex-nowrap justify-between min-w-max lg:min-w-0 px-4">
            <div className="flex flex-col items-center text-center px-4 w-48">
              <div className="mb-4">
                <HandCoins className="h-16 w-16 text-black" />
              </div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Improve Farming Benefits
              </h3>
              <p className="text-lg text-black max-w-[150px]">
                Deliver farming benefits faster to reach all farmers
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 w-48">
              <div className="mb-4">
                <UserCheck className="h-16 w-16 text-black" />
              </div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Quick Identification
              </h3>
              <p className="text-lg text-black max-w-[150px]">
                Create a seamless layer for authentication of farmers
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 w-48">
              <div className="mb-4">
                <BarChart3 className="h-16 w-16 text-black" />
              </div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Lower Costs and Risks
              </h3>
              <p className="text-lg text-black max-w-[150px]">
                Reduce costs of agricultural services for farmers
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 w-48">
              <div className="mb-4">
                <Key className="h-16 w-16 text-black" />
              </div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Enable Scheme Convergence
              </h3>
              <p className="text-lg text-black max-w-[150px]">
                Facilitate convergence between departments
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 w-48">
              <div className="mb-4">
                <Clock className="h-16 w-16 text-black" />
              </div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Accelerate Innovation
              </h3>
              <p className="text-lg text-black max-w-[150px]">
                Speed up innovation with access to high-quality data
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Components Section - Inspired by second image */}
      <div className="py-16 px-4 bg-amber-400 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            The Central Core of Smart Farming
          </h2>
          <p className="text-lg text-center text-black mb-12 max-w-3xl mx-auto">
            While our platform will evolve over time, the following initial building blocks have been planned:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3">
                  <Leaf className="w-full h-full text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-black">Farmer and Plot Registry</h3>
              </div>
              <div className="w-16 h-1 bg-amber-500 mb-4"></div>
              <p className="text-black">
                A centralized registry of all farmers and their farmland plots, compiled according to common standards.
                Each farmer is assigned a unique ID and digitally verifiable credential, dynamically linked to their
                farmland records.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3">
                  <Leaf className="w-full h-full text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-black">Unified Service Interface</h3>
              </div>
              <div className="w-16 h-1 bg-amber-500 mb-4"></div>
              <p className="text-black">
                The building block that enables interoperability across stakeholders. It comprises standardized schema
                and API definitions with their associated specifications, used by government and authorized private
                users.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-3">
                  <Leaf className="w-full h-full text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-black">Crop Sown Registry</h3>
              </div>
              <div className="w-16 h-1 bg-amber-500 mb-4"></div>
              <p className="text-black">
                A federated registry of crops being sown and grown across the country every season, on every farm by
                each farmer. It streamlines crop surveying methods by introducing smartphone and image-based techniques
                for more fool-proof crop surveys.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <div className="py-12 px-4 bg-gray-900 mb-8">
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
              <Link
                to="/crop"
                style={{ textDecoration: "none", color: "white" }}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
              >
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
                style={{ textDecoration: "none", color: "white" }}
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
                style={{ textDecoration: "none", color: "white" }}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
              >
                 <ArrowRight className="ml-1 h-4 w-4" />
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
                style={{ textDecoration: "none", color: "white" }}
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
                style={{ textDecoration: "none", color: "white" }}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center mt-2"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-green-800 to-green-600 text-white mb-10">
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


