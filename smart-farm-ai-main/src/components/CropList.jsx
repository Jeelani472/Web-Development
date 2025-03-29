import React, { useState } from "react";
import { fetchGeminiCropDetails } from "./api";
import { FaRupeeSign, FaMapMarkerAlt, FaSeedling, FaLightbulb, FaLeaf } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const COLORS = ["#4CAF50", "#FF9800", "#2196F3", "#FFC107"];

const CropList = () => {
  const [cropName, setCropName] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchDetails = async () => {
    if (!cropName) {
      setError("Please enter a crop name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await fetchGeminiCropDetails(cropName);
      setDetails(result);
    } catch (error) {
      setError("Failed to fetch crop details.");
    } finally {
      setLoading(false);
    }
  };

  // Parse the fetched crop details into structured data
  const parseDetails = () => {
    if (!details) return null;
    const lines = details.split("\n").filter((line) => line.trim() !== "");

    const crop = {
      name: lines[0]?.split(": ")[1]?.trim(),
      price: lines[1]?.split(": ")[1]?.trim(),
      region: lines[2]?.split(": ")[1]?.trim(),
      season: lines[3]?.split(": ")[1]?.trim(),
      tips: lines[4]?.split(": ")[1]?.trim(),
    };

    return crop;
  };

  const cropData = parseDetails();

  // Chart Data
  const chartData = cropData
    ? [
        { name: "Price", value: Math.floor(Math.random() * 1000) + 500 },
        { name: "Region Popularity", value: Math.floor(Math.random() * 100) + 10 },
        { name: "Season Suitability", value: Math.floor(Math.random() * 100) + 20 },
        { name: "Yield Tips Efficiency", value: Math.floor(Math.random() * 50) + 30 },
      ]
    : [];

  const barChartData = cropData
    ? [
        { region: "North", value: Math.floor(Math.random() * 100) + 20 },
        { region: "South", value: Math.floor(Math.random() * 100) + 20 },
        { region: "East", value: Math.floor(Math.random() * 100) + 20 },
        { region: "West", value: Math.floor(Math.random() * 100) + 20 },
      ]
    : [];

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-black">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
          🌾 Crop Details with Analytics
        </h1>

        <div className="flex gap-4 mb-6 justify-center">
          <input
            type="text"
            placeholder="Enter crop name (e.g., Wheat)"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            className="border border-black p-3 rounded-lg w-full max-w-md text-black"
          />
          <button
            onClick={handleFetchDetails}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading ? "Fetching..." : "Get Details"}
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {cropData && (
          <>
            {/* Centered Cards */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 w-full max-w-2xl">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center text-black">
                  <FaLeaf className="mr-3 text-green-500" /> {cropData.name}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center text-lg text-black">
                    <FaRupeeSign className="text-green-600 mr-3" />
                    <span className="font-bold">Price:</span>&nbsp;{cropData.price}
                  </div>

                  <div className="flex items-center text-lg text-black">
                    <FaMapMarkerAlt className="text-green-600 mr-3" />
                    <span className="font-bold">Region:</span>&nbsp;{cropData.region}
                  </div>

                  <div className="flex items-center text-lg text-black">
                    <FaSeedling className="text-green-600 mr-3" />
                    <span className="font-bold">Season:</span>&nbsp;{cropData.season}
                  </div>

                  <div className="flex items-center text-lg text-black">
                    <FaLightbulb className="text-green-600 mr-3" />
                    <span className="font-bold">Tips:</span>&nbsp;{cropData.tips}
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Bar Chart */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  Region-wise Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#4CAF50" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  Crop Analytics
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CropList;
