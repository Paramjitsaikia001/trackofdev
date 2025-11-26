import React, { useContext, useState, useEffect } from "react";
import RandomUser from "../../assets/images/appLogo.png";
import { textStyles, cardStyles, inputStyles, iconStyles } from '../../utils/styles';
import Development from "../../hooks/developments.hooks";
import ReviewContext from "../../Context/review.context";

export default function Reviews() {

  const { data: developemntID } = Development();
  const { addReviews, getAllReviews } = useContext(ReviewContext);

  const developments = Array.isArray(developemntID)
    ? developemntID
    : Array.isArray(developemntID?.data)
      ? developemntID.data
      : Array.isArray(developemntID?.results)
        ? developemntID.results
        : [];

  const [reviewMsg, setReviewMsg] = useState("");
  const [roadmapId, setRoadmapId] = useState("");
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews on load
  useEffect(() => {
    const fetchReviews = async () => {
      const res = await getAllReviews();
   
    


      if (res) {
        setReviews(res);
      }
     
    };
    
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewMsg || !roadmapId) return;


    await addReviews({ reviewMSG: reviewMsg, roadmapId });

    setReviewMsg("");

    // refresh reviews
    const res = await getAllReviews();
    if (res?.reviews) {
      setReviews(res.reviews);
    }
  };
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

  return (
    <section className="reviews w-full p-4">
      <div className="review-header border-b-2 border-gray-400 mb-4">
        <h2 className={textStyles?.title || "text-xl font-semibold"}>Reviews</h2>
      </div>

      <div className="review-container flex flex-col w-full gap-4">
        <div className="reviews-view-section flex rounded-xl   gap-3 h-30 overflow-x-auto whitespace-nowrap scrollbar-none">
          {reviews.length > 0 ? (
            reviews.map((r) => (
              <div key={r._id} className={`px-3 flex flex-col gap-2 w-fit  bg-white rounded-xl `}>
                
                <div className="reviewer-msg flex h-fit justify-center pt-3  gap-2">
                  <img className="w-8 h-8 rounded-full" src={r.userId?.profilePicture} alt="reviewer" />
                  <div className="px-2 w-[18rem] whitespace-normal flex flex-col gap-1">
                    <p className="text-lg italic font-light ">"{r.reviewMSG}"</p>

                    <p className="italic text-lg pt-3 font-normal text-gray-600">
                      - by {r.userId?.fullName }
                    </p>
                    {/* Display roadmap + user */}
                    <p className="text-xl text-end italic font-light text-gray-600">
                      For {r.roadmapId?.name || r.roadmapId}
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
            <p className="text-gray-500 text-sm">No reviews yet.</p>
          )}
        </div>

        <div className="User-review">
          <form onSubmit={handleSubmit} className="flex sm:flex-row flex-col items-end gap-2">
            
            <div className="relative flex border-2 border-white/30 justify-between items-end rounded-3xl w-full">

            <textarea
              className={ "bg-transparent outline-none text-white pl-5 h-[10rem] sm:h-[5rem] text-start  py-2 rounded w-full pb-5"}
              type="text"
              value={reviewMsg}
              onChange={(e) => setReviewMsg(e.target.value)}
              placeholder="Write your opinion..."
            />

            <select
              className="outline-none py-2 absolute  right-0 bottom-0 px-3 text-center rounded-3xl h-fit flex items-baseline justify-items-end  text-white bg-primary-dark "
              value={roadmapId}
              onChange={(e) => setRoadmapId(e.target.value)}
            >
              <option value="">Select Roadmap</option>
              {developments.map((d) => (
                <option key={d.id} value={d.route}>
                  {d.title}
                </option>
              ))}
            </select>
            </div>

            <button type="submit" className="group py-1 px-8 flex items-center justify-center border border-white/30 rounded-full hover:bg-cyan-200 hover:text-primary-blue">
              <span className={`${iconStyles?.material} material-icons group-hover:text-primary-blue `}>send</span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}