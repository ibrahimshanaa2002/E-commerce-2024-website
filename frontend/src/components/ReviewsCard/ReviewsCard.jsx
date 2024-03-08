import React from "react";
import StructureController from "./structureController";
import "./Card.css";


const ReviewsCard = () => {
  // Sample review data from the database
  const reviewData1 = {
    name: "John Doe",
    rating: 5,
    comment:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  };

  // Another sample review data
  const reviewData2 = {
    name: "John Doe",
    rating: 4,
    comment:
      "Great product! The quality is top-notch and the delivery was fast. Would definitely recommend it to others.",
    date: "September 5, 2023",
  };
  const reviewData10 = {
    name: "Shanaa",
    rating: 4,
    comment:
      "Great product! The quality is top-notch and the delivery was fast. Would definitely recommend it to others.",
    date: "September 5, 2023",
  };
  const reviewData11 = {
    name: "Ibrahim",
    rating: 4,
    comment:
      "Great product! The quality is top-notch and the delivery was fast. Would definitely recommend it to others.",
    date: "September 5, 2023",
  };

  return (
    
    <div className="loop-slide mx-10">
      <div className="cards-container gap-5 w-full ">
        <StructureController review={reviewData11} />
        <StructureController review={reviewData2} />
        <StructureController review={reviewData1} />
        <StructureController review={reviewData2} />
        <StructureController review={reviewData2} />
        <StructureController review={reviewData1} />
        <StructureController review={reviewData2} />

        <StructureController review={reviewData10} />
      </div>
    </div>
  );
};

export default ReviewsCard;
