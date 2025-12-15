import { Star, MapPin } from "lucide-react";
import "./../../styles/DeveloperProfile.css";
import { Link } from "react-router-dom";
import type { Developer } from "../../utils/data/developerData/developer";
import { reviews } from "../../utils/data/developerData/reviews";

export function DeveloperProfile({
  developerList = [],
}: {
  developerList: Developer[];
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-11">
      {developerList.map((developer) => {
        const isHacker = developer.professional.category === "hack";

        const limitedSkills = developer.professional.skills?.slice(0, 3) || [];

        const devReviews = reviews.filter(
          (r) => r.devId === developer.devId
        );

        const averageRating =
          devReviews.reduce((sum, r) => sum + r.rating, 0) /
          (devReviews.length || 1);

        return (
          <Link
            to={`/developer/${developer.id}`}
            key={developer.id}
            className={`devProfile-container ${isHacker ? "hacker-theme" : ""}`}
          >
            <div className="first">
              <img
                src={developer.personal.profileImage}
                className="profile-image"
              />

              <div className="first-info">
                <p className="first-info-name">
                  {developer.personal.name}
                </p>

                <p className="first-info-domain">
                  {isHacker ? "Anonymous Hacker" : developer.professional.title}
                </p>
              </div>
            </div>

            <div className="second">
              {!isHacker && (
                <div className="second-location">
                  <MapPin color="#6b7280" size={18} strokeWidth={2} />
                  <p className="second-location-p">
                    {developer.personal.location.country},{" "}
                    {developer.personal.location.city}
                  </p>
                </div>
              )}

              <div className="second-rate">
                <Star fill="gold" color="gold" size={20} />
                <p className="second-rate-p">
                  {averageRating.toFixed(1)}
                </p>
              </div>
            </div>

            {!isHacker && (
              <div className="third">
                {limitedSkills.map((lang, i) => (
                  <button
                    key={i}
                    className="dark:text-white dark:hover:text-black dark:border third-button"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}

            {isHacker && (
              <div className="third flex justify-end text-red-500 text-sm font-medium">
                ⚠ Identity Restricted
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
