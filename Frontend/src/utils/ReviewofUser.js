import React, { useContext, useState, useEffect } from "react";


// import Development from "../hooks/developments.hooks.js";
import ReviewContext from "../Context/review.context.js";
import Loading from "./loading.js";

export default function ReviewsofUser() {

  // const { data: developemntID } = Development();
  const { getReviewsByUser,loading} = useContext(ReviewContext);

  // const developments = Array.isArray(developemntID)
  //   ? developemntID
  //   : Array.isArray(developemntID?.data)
  //     ? developemntID.data
  //     : Array.isArray(developemntID?.results)
  //       ? developemntID.results
  //       : [];


  const [reviews, setReviews] = useState([]);

  // Fetch all reviews on load
  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getReviewsByUser?.();

      if (!res || !res.data) {
        console.error("No review data received:", res);
        setReviews([]);
        return;
      }

      console.log("res", res.data[0]?.userId?.profilePicture);

      setReviews(res.data);
    };
    
    fetchReviews();
  }, []);

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    Day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let key in intervals) {
    const value = Math.floor(seconds / intervals[key]);
    if (value >= 1) return `${value} ${key}${value > 1 ? "s" : ""} ago`;
  }

  return "just now";
};

 if (loading) {
        return (
            <Loading />
        );
    }
  return (
    <section className="reviews w-full px-4 min-h-screen">

      <div className="review-container flex flex-col w-full gap-4">
        <div className="reviews-view-section flex flex-col rounded-xl   gap-3 h-30 overflow-x-auto ">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div key={r._id} className={`px-3 flex flex-col gap-2 w-full justify-between  bg-white/60 rounded-xl `}>
                
                <div className="reviewer-msg flex h-fit justify-start pt-3 items-start pl-8 w-full  gap-2">
                  <img className="w-8 h-8 rounded-full" src={r.userId?.profilePicture} alt="reviewer" />
                  <div className="px-2 w-[18rem] whitespace-normal flex flex-col gap-1">
                    <p className="text-lg italic font-light ">"{r.reviewMSG}"</p>

                    <p className="italic text-lg pt-3 font-normal text-gray-600">
                       By {r.userId?.fullName }
                    </p>
                    {/* Display roadmap + user */}
                    <p className="text-xl text-end italic font-light text-gray-600">
                      - For {r.roadmapId?.title || r.roadmapId}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="review-time pb-2 flex justify-end text-sm text-black/50">
                  <p>{timeAgo(r?.createdAt)}

                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white mt-10">No reviews found.</p>
          )}
        </div>

      </div>
    </section>
  );
}