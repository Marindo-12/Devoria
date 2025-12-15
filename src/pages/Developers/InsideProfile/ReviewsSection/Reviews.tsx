import { Star, Trash2 } from "lucide-react";
import './../../../../styles/Reviews.css'
import { timeAgo } from "../../../../utils/data/developerData/datefomat";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type Review = {
  isNew: any;
  id: string;
  devId: number;
  userName: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

interface ReviewProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewProps) {
  const { t } = useTranslation();
  const [localR, setLocalR] = useState(reviews);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  const randomServices = ["Web Design", "SEO", "Mobile App", "Cloud Setup", "Dashboard UI"];

  const addReview = () => {
    const newReview = {
      id: Date.now().toString(),
      devId: reviews[0].devId,
      userName: "khalid",
      rating: newRating,
      comment: newComment,
      service: randomServices[Math.floor(Math.random() * randomServices.length)],
      date: new Date().toISOString(),
      isNew: true,
    }

    setLocalR([newReview, ...localR]);

    setNewComment("");
    setNewRating(0);
  }

  const removeReview = (id: string) => {
    setLocalR(localR.filter((rev) => rev.id !== id))
  }

  if (!reviews || reviews.length === 0) {
    return <p className="text-gray-500 mt-4">{t('developerInsideProfile.reviewsPage.noReviews')}</p>;
  }

  const totalReviews = localR.length;
  const tableComments = [];
  localR.map((c) => {
    tableComments.push(c.comment);
  })
  const totalComments = tableComments.length;
  const averageRating =
    localR.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

  const positiveCount = localR.filter(r => r.rating >= 4).length;
  const positivePercent = Math.round((positiveCount / totalReviews) * 100);

  const isHacker = reviews[0]?.devId === 7;

  return (
    <>
      <div className={`first-review flex flex-col flex-wrap gap-8 mt-10 w-full ${isHacker ? "hacker-review-box" : ""}`}>
        <div className="review-div">
          <p className="review-para1">{averageRating.toFixed(1)}</p>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                fill={i < Math.round(averageRating) ? "gold" : "none"}
                color="gold"
              />
            ))}
          </div>
          <p className="review-para2">
            {t('developerInsideProfile.reviewsPage.averageRating')}
          </p>
        </div>


        <div className="review-div">
          <p className="review-para1">{totalReviews}</p>
          <p className="review-para2">
            {t('developerInsideProfile.reviewsPage.totalReviews')}
          </p>
        </div>


        <div className="review-div">
          <p className="review-para1">{positivePercent}%</p>
          <p className="review-para2">
            {t('developerInsideProfile.reviewsPage.positiveFeedback')}
          </p>
        </div>
      </div>

      <div className="mt-10 ms-10 w-fit">
        <p className="font-bold text-2xl border-s border-b px-2 rounded-xl">
          {t('developerInsideProfile.reviewsPage.comments')} <span className="text-lg font-medium text-gray-400 ms-2">{totalComments}</span></p>
      </div>
      <div className={`bg-gray-100 p-4 rounded-xl mt-10 w-full new-comment dark:border ${isHacker ? "hacker-add-review" : ""}`}>
        <p className="text-xl font-semibold mb-3">{t('Add your review')}</p>

        <div className="flex gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              onClick={() => setNewRating(i + 1)}
              fill={i < newRating ? "gold" : "none"}
              color="gold"
              className="cursor-pointer"
            />
          ))}
        </div>

        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full p-2 border-b-2 new-comment bg-gray-100 focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" ? addReview() : null}
        ></input>

        <div className="flex items-end justify-end">
          <button
            onClick={addReview}
            className="bg-purple-600 text-white px-4
            py-2 rounded-xl mt-3 "
          >
            Add Review
          </button>
        </div>
      </div>
      <div className="second-review">
        {localR.map((rev) => (
          <div key={rev.id} className={`bg-gray-50 px-8 py-6 border rounded-2xl mt-10 relative comments ${isHacker ? "comment-hacker" : "bg-gray-50"}`}>
            <div className="flex justify-between">
              <p className="text-xl font-semibold">{rev.userName}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < rev.rating ? "gold" : "none"}
                    color="gold"
                  />
                ))}
              </div>
            </div>
            <p className="mt-1 text-gray-400">{rev.service}</p>
            <p className="text-gray-500 text-lg mt-4">{rev.comment}</p>
            <p className="mt-4 text-right text-gray-400">{timeAgo(rev.date)}</p>
            {rev.isNew && (
              <button
              onClick={() => removeReview(rev.id)}
              className="absolute bottom-7 left-10 text-red-500 text-bold hover:text-red-700 font-bold"
            >
              <Trash2 size={20} />
            </button>
            )}
          </div>
        ))}

      </div>

    </>
  );
}