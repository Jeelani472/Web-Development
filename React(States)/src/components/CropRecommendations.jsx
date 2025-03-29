const CropRecommendations = ({ recommendations }) => {
    return (
      <div className="bg-blue-50 p-6 rounded-lg bg-green-200 shadow-md">
        <h2 className="text-3xl font-bold mb-4">Recommended Crops:</h2>
        <p className="text-gray-800  text-xl font-semibold whitespace-pre-line">{recommendations}</p>
      </div>
    );
  };
  
  export default CropRecommendations;
  