import React, { useState } from "react";

const RatingComponent = () => {
  const [selectedRating, setSelectedRating] = useState(null); 
  const [isSubmitted, setIsSubmitted] = useState(false); 


  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

 
  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {!isSubmitted ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80">
          <h2 className="text-xl font-bold mb-4">How did we do?</h2>
          <p className="text-sm text-gray-400 mb-6">
            Please let us know how we did with your support request. All feedback is appreciated!
          </p>
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingSelect(rating)}
                className={`w-12 h-12 rounded-full ${
                  selectedRating === rating
                    ? "bg-gray-500 text-white"
                    : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!selectedRating} 
            className={`w-full py-2 rounded-lg ${
              selectedRating
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <p className="text-lg mb-2">
            You selected <span className="font-bold">{selectedRating}</span> out of 5.
          </p>
          <p className="text-gray-400 text-sm">
            Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;
