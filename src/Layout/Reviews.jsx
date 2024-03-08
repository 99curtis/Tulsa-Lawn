import React from "react";
import LazyLoad from "react-lazy-load";
import { FaQuoteLeft } from "react-icons/fa";
import Review2 from "/assets/Review1@2x.jpg";
import Review1 from "/assets/Review2@2x.jpg";
import Review3 from "/assets/Review3@2x.jpg";

function Reviews() {
  const reviews = [
    {
      text: "I have tried a few different mowing companies, luckily I found Tulsa Lawn. They have been the most friendly and reliable by far, and my yard has never looked better",
      author: "— Thomas",
      image: Review1,
    },
    {
      text: "They've handled everything from leaf removal to hedge trimming, not just mowing. It's like having a groundskeeper on call. My property has never been in better hands!",
      author: "— Caroline",
      image: Review2,
    },
    {
      text: "Tulsa Lawn elevated our restaurant's outdoor space, ensuring a professional look that impresses customers and boosts our curb appeal. Reliable and top-notch service!",
      author: "— Jack's BBQ",
      image: Review3,
    },
  ];

  return (
    <div className="bg-secondary">
      <div className="px-5 pt-20 font-text text-text">
        <div className="text-center text-2xl font-bold ">Reviews</div>
        <div className="mb-16 text-center text-xs">
          Don't just take our word for it, read what our customers are saying
        </div>
      </div>

      {reviews.map((review, index) => (
        <div
          key={index}
          className="relative mx-10 mt-10 rounded-3xl"
        >
          <LazyLoad offset={100}>
            <img
              src={review.image}
              alt="Review background"
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
            />
          </LazyLoad>
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl"></div>
          <FaQuoteLeft className="absolute top-2 left-6 -translate-y-1/2 rounded-full bg-primary p-4 text-6xl text-background border-2 border-bg" />
          <div className="relative z-10 p-5 font-text">
            <div className="mt-8 text-xl font-bold italic text-background">
              {review.text}
            </div>
            <div className="mt-1 text-background">{review.author}</div>
          </div>
        </div>
      ))}

      <div className="h-20"></div>
    </div>
  );
}

export default Reviews;
