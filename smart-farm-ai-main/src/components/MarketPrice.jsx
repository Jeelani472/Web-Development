import React, { useState } from "react";
import { fetchGeminiCropPrices } from "./api";

const MarketPrices = () => {
  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleFetchPrices = async () => {
    if (!category) {
      setError("Please select a category.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await fetchGeminiCropPrices(category);
      console.log("Raw Response:", result); // Debugging the response
      setPrices(result);
    } catch (error) {
      setError("Failed to fetch market prices.");
    } finally {
      setLoading(false);
    }
  };

  // Improved Parsing Function
  const parsePrices = () => {
    if (!prices) return [];

    const lines = prices
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    const crops = [];

    for (let i = 0; i < lines.length; i += 3) {
      const crop = lines[i]?.split(":")[1]?.trim();
      const price = lines[i + 1]?.split(":")[1]?.trim();
      const region = lines[i + 2]?.split(":")[1]?.trim();

      if (crop && price && region) {
        crops.push({ crop, price, region });
      }
    }

    console.log("Parsed Crops:", crops); // Debug the parsed data
    return crops;
  };

  const cropList = parsePrices();
  const visibleCrops = showAll ? cropList : cropList.slice(0, 10);

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-black">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
          🌾 Top 20 Crop Market Prices
        </h1>

        <div className="flex gap-4">
          <select
            className="border border-black p-2 rounded-lg w-full text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="cereals">Cereals</option>
            <option value="cash crops">Cash Crops</option>
          </select>

          <button
            onClick={handleFetchPrices}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            disabled={loading}
          >
            {loading ? "Fetching..." : "Get Prices"}
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {loading && (
          <div className="text-center mt-6">
            <p className="text-blue-500">Loading market prices...</p>
          </div>
        )}

        {cropList.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">
              Market Prices for {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">🌾 Crop Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">💰 Price Range</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">📍 Region</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {visibleCrops.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 transition duration-300"
                    >
                      <td className="px-6 py-4 font-medium">{item.crop}</td>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">{item.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {showAll ? "Show Less" : "View More"}
              </button>
            </div>
          </div>
        )}

        {cropList.length === 0 && !loading && (
          <p className="text-center text-gray-500 mt-6">No crop prices available.</p>
        )}
      </div>
    </div>
  );
};

export default MarketPrices;
