import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewsCardHeader from "./ReviewsCardHeader";
import FeedBackSubmit from "./FeedBackSubmit";

const ReviewsCard = () => {
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const handleViewAllReviews = () => {
    setShowAllReviews(!showAllReviews); // Toggle the state
  };

  const sampleReviews = [
    {
      _id: 1,
      date: "12.09.2019",
      name: "Carrie Brewer",
      rating: 4,
      title: "There's a reason they're number one",
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.`,
    },
    {
      _id: 1,
      date: "12.09.2019",
      name: "Carrie Brewer",
      rating: 4,
      title: "There's a reason they're number one",
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.`,
    },
    {
      _id: 1,
      date: "12.09.2019",
      name: "Carrie Brewer",
      rating: 4,
      title: "There's a reason they're number one",
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.`,
    },
    {
      _id: 1,
      date: "12.09.2019",
      name: "Carrie Brewer",
      rating: 4,
      title: "There's a reason they're number one",
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.`,
    },
    {
      _id: 1,
      date: "12.09.2019",
      name: "Carrie Brewer",
      rating: 4,
      title: "There's a reason they're number one",
      body: `There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.`,
    },

    // Add more sample reviews as needed
  ];

  const fetchReviews = () => {
    setReviews(sampleReviews);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // useEffect(() => {
  //   fetchReviews();
  // }, []);

  // const fetchReviews = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4001/reviews");
  //     setReviews(response.data);
  //   } catch (error) {
  //     console.error("Error fetching reviews:", error);
  //   }
  // };
  const renderReviews = () => {
    const reviewsToRender = showAllReviews ? reviews : reviews.slice(0, 4);

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {reviewsToRender.map((review) => (
          <div key={review._id} className=" rounded-md shadow-lg bg-white p-5 ">
            <div className="flex space-x-0.5">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={
                    index < review.rating ? "text-yellow-300" : "text-gray-300"
                  }
                  fill={index < review.rating ? "currentColor" : "none"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              ))}
            </div>
            <p className="mt-2 text-sm font-medium leading-5 text-gray-500">
              {review.date}
            </p>

            <div className="space-y-1 h-32 mt-6  space-x-1 ">
              <h3 className="font-semibold text-gray-800">{review.title}</h3>
              <p className="text-sm font-medium leading-5 text-gray-600">
                {review.body}
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-2">
              <span className="text-sm font-semibold leading-5 text-gray-900">
                {review.name}
              </span>
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="px-5 ">
      <div className="w-full py-4 ">
        <div className="flex flex-col items-center w-full py-5  ">
          <h1 className="text-4xl font-bold uppercase">OUR HAPPY CUSTOMERS</h1>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="header">
            <ReviewsCardHeader />
          </div>
          <div className="py-5 mx-auto flex justify-center">
            {renderReviews()}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {!showAllReviews && reviews.length > 4 && (
          <button
            onClick={handleViewAllReviews}
            className="mt-4 px-4 py-2 bg-black text-white rounded-3xl hover:bg-orange-500 duration-300"
          >
            View All Reviews
          </button>
        )}
      </div>
      <FeedBackSubmit />
    </div>
  );
};

export default ReviewsCard;
