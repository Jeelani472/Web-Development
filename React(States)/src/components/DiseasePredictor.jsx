import React, { useState } from "react";
import { FaUpload, FaSpinner } from "react-icons/fa";

const DiseasePredictor = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [mainDisease, setMainDisease] = useState("");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "AIzaSyB3P1bfWkM8Pku0QOObHUqL0GgV_ETqt_M";  // 🔥 Replace with your valid Gemini API key
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

  // 🌿 Validate image type and size
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError("Please select a valid image.");
      return;
    }

    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setError("Invalid file type. Please upload a JPEG, PNG, or WEBP image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {  // Max size 5MB
      setError("File size exceeds 5MB. Please upload a smaller image.");
      return;
    }

    setSelectedFile(file);
    setError("");
  };

  // 🌾 Convert image to Base64 format
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });

  // 🔥 Extract main disease name
  const extractMainDisease = (text) => {
    const diseasePatterns = [
      /alternaria leaf spot/i,
      /cercospora leaf spot/i,
      /septoria leaf spot/i,
      /powdery mildew/i,
      /downy mildew/i,
      /bacterial leaf spot/i,
      /anthracnose/i,
      /fusarium wilt/i,
      /rust/i,
      /blight/i,
      /root rot/i,
    ];

    for (const pattern of diseasePatterns) {
      const match = text.match(pattern);
      if (match) {
        return match[0];
      }
    }
    return "Unknown Disease";
  };

  // 🌿 Format report (remove *, -, and unnecessary symbols)
  const formatReport = (text) => {
    return text
      .replace(/\*/g, "")         // Remove asterisks
      .replace(/-/g, "")          // Remove dashes
      .replace(/•/g, "")          // Remove bullets
      .replace(/\n+/g, "\n")       // Clean up line breaks
      .replace(/\s{2,}/g, " ")     // Remove extra spaces
      .trim();
  };

  // 🔥 Handle Image Upload and Detection
  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image.");
      return;
    }

    setLoading(true);
    setMainDisease("");
    setReport("");
    setError("");

    try {
      const base64Image = await toBase64(selectedFile);

      const requestBody = {
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType: selectedFile.type,
                  data: base64Image,
                },
              },
            ],
          },
        ],
      };

      const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const result = await response.json();
      const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text || "No data received";

      // 🌿 Extract and format the report
      const mainDiseaseDetected = extractMainDisease(rawText);
      const formattedReport = formatReport(rawText);

      setMainDisease(mainDiseaseDetected);
      setReport(formattedReport);

    } catch (error) {
      console.error("Error analyzing image:", error);
      setError("Failed to analyze image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
          🌾 Crop Disease Detection with Styled Report
        </h1>

        {/* File Upload Section */}
        <div className="text-center mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-600 mb-4"
          />

          {selectedFile && (
            <div className="mt-4 flex justify-center">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected Crop"
                className="w-52 h-52 object-cover rounded-lg border"
              />
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            className={`mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition flex items-center justify-center gap-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaUpload />}
            {loading ? "Analyzing..." : "Upload & Detect"}
          </button>

          {/* Error Message */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center mt-8">
            <FaSpinner className="animate-spin text-green-500 text-4xl" />
            <p>Analyzing image...</p>
          </div>
        )}

        {/* Disease Analysis Result */}
        {mainDisease && (
          <div className="bg-green-100 rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-3xl font-bold text-green-700">
              🌿 Main Disease Detected:{" "}
              <span className="text-green-900">{mainDisease}</span>
            </h3>
          </div>
        )}

        {/* Styled Report */}
        {report && (
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 mt-8">
            <h3 className="text-2xl font-bold text-gray-800">📄 Diagnostic Report</h3>
            <div className="text-lg text-gray-700 mt-4 whitespace-pre-wrap">
              {report}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseasePredictor;