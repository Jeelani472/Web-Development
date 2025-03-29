const GEMINI_API_KEY = "AIzaSyDeqhM5PMwomWuU8b-9bmEZH5z0vEMoDk8";



export const fetchRecommendations = async (soil, location, season) => {
  const prompt = `
  You are a smart farming assistant. Provide detailed and well-structured crop recommendations based on the following parameters:
  - Soil type: ${soil}
  - Location: ${location}
  - Season: ${season}

  The output format should strictly follow this structure:
  
  Recommended Crops:
  [Location] experiences a [climate type] climate. [Soil type], while challenging, can be productive with the right crop selection. Here are some [season]-suitable crops for [location]'s [soil type], keeping in mind soil management strategies:

  Vegetables:
  Root Vegetables (with careful management): [Detailed explanation of suitable root vegetables and soil management tips]
  Brassicas: [Detailed explanation of suitable brassicas]
  Leafy Greens: [Detailed explanation of suitable leafy greens]
  Beans (bush beans): [Explanation of why bush beans are suitable]
  Peas: [Explanation of why peas are suitable]

  Other Crops:
  Rice: [Details on rice cultivation in this region with clay soil considerations]
  Maize/Corn: [Details on growing corn with clay soil conditions]

  Key Considerations for [Soil Type] in [Location]:
  Drainage: [Tips for improving drainage]
  Soil pH: [Information on potential pH issues and solutions]
  Tilling: [Tilling advice for clay soil]
  Mulching: [Benefits of mulching in clay soil]

  Crops to Avoid:
  Root vegetables with long taproots: [Explanation of why they struggle in clay]
  Onions and Garlic: [Explanation of why they are unsuitable]
  Watermelon and Muskmelon: [Explanation of why they require different soil conditions]

  Conclude with:  
  "Before planting, it's always a good idea to have your soil tested for nutrient levels and pH to determine the best amendments and ensure optimal crop growth. Contacting the local agricultural department in ${location} can provide valuable region-specific advice."
  `;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();

    let recommendedCrops =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No recommendation available.";

    return recommendedCrops;
  } catch (error) {
    console.error(
      "Gemini API Error:",
      error.response ? error.response.data : error.message
    );
    return "Failed to get crop recommendation.";
  }
};



export const fetchGeminiCropPrices = async (category) => {
  const prompt = `
  You are a farming price estimation assistant. Provide a list of the top 20 crops under the category: "${category}" with their estimated market prices in India. 

  Ensure the output follows this format:
  Crop: [Crop Name]
  Price: ₹[Price range per quintal or kg]
  Region: [Region where it is commonly grown]
  ---
  Repeat this format for each crop.
  `;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();

    let cropPrices =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No price data available.";

    // Clean the output
    cropPrices = cropPrices
      .replace(/\*\*\*/g, "")    // Remove ***
      .replace(/---/g, "")       // Remove separators
      .trim();

    return cropPrices;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to get price data.";
  }
};


//crops details future to grow 

export const fetchGeminiCropDetails = async (cropName) => {
  const prompt = `
  You are an expert farming assistant. Provide short, precise details about the crop "${cropName}" in 5 points:

  Output Format:
  - 🌾 Name: [Crop name]
  - 💰 Price: ₹[Price range per kg/quintal in India]
  - 📍 Region: [Key regions grown in India]
  - 🌿 Season: [Best season to grow]
  - 💡 Tips: [1-2 short farming tips]

  Keep it concise, clear, and to the point.
  `;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    const cropDetails =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No details available.";

    return cropDetails;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to fetch crop details.";
  }
};




