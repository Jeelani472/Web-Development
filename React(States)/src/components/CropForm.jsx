import { useState } from "react";
import { fetchRecommendations } from "./api";

const CropForm = ({ setRecommendations, setLoading }) => {
  const [soil, setSoil] = useState("");
  const [location, setLocation] = useState("");
  const [season, setSeason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await fetchRecommendations(soil, location, season);
    setRecommendations(result);
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white w-[100%] p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700">Soil Type</label>
        <input
          type="text"
          value={soil}
          onChange={(e) => setSoil(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="e.g., clay, sandy"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="e.g., Jorhat"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Season</label>
        <input
          type="text"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="e.g., spring, winter"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        Get Recommendations
      </button>
    </form>
  );
};

export default CropForm;