import { developers } from "../../../utils/data/developerData/developers.ts";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../../components/Header.tsx";
import { MapPin, Calendar, Star, Github, Linkedin, Globe, MessageSquare, Mail } from "lucide-react";
import './../../../styles/DeveloperInsideProfile.css';
import { About } from "./AboutSection/About.tsx";
import { reviews } from "../../../utils/data/developerData/reviews.ts";
import { Reviews } from "./ReviewsSection/Reviews.tsx";
import { Services } from "./ServicesSection/Services.tsx";
import { Portfolio } from "./Portfolio/Portfolio.tsx";
import { projects } from "../../../utils/data/ProjectsData/projects.ts";
import { useTranslation } from "react-i18next";
import Footer from "../../../components/Footer.tsx";

export function DeveloperInsideProfile() {
  const { t, i18n } = useTranslation();
  const [open2, setOpen2] = useState(false);
  const { id } = useParams();
  const developer = developers.find(dev => dev.id == id);
  const [active, setActive] = useState(t('developerInsideProfile.tabs.about'));


  useEffect(() => {
    setActive(t('developerInsideProfile.tabs.about'))
  }, [i18n.language])

  const developerProjects = projects.filter((p) => p.devId === developer?.devId)

  if (!developer) {
    return (
      <>
        <Header open={open2} setOpen={setOpen2} />
        <main className="pt-48 md:pt-26">
          <div className="profile-firstPart">
            <p className="text-center text-red-500">{t('developerInsideProfile.developerNotFound')}</p>
          </div>
        </main>
      </>
    );
  }
  const isHacker = developer.professional.category === "hack";

  const devReviews = reviews.filter(r => r.devId === developer.devId);

  const averageRating = devReviews.reduce((sum, r) => sum + r.rating, 0) / (devReviews.length || 1);

  const items = [
    t('developerInsideProfile.tabs.about'),
    t('developerInsideProfile.tabs.portfolio'),
    t('developerInsideProfile.tabs.services'),
    t('developerInsideProfile.tabs.reviews')];

  return (
    <>
      <Header open={open2} setOpen={setOpen2} />

      <div className="absolute top-0 left-0 w-full h-64 -z-10 bg-gradient-to-r from-purple-400 via-purple-600 to-blue-500"></div>
      <main
        className={`transition-all duration-500 ease-in-out px-5 md:px-10 pt-40
        ${open2 ? "pt-56" : ""}
        ${isHacker ? "hacker-theme-page" : ""}
      `}
      >
        <div className="profile-firstPart">
          <div className="flex-shrink-0">
            <img
              src={developer.personal.profileImage}
              className="w-28 h-28 border-4 border-purple-900 rounded-full"
              alt="/" />
          </div>
          <div className="first-1">
            <h1 className="font-bold text-2xl">{developer.personal.name}</h1>
            <p className="text-gray-400 text-xl">{developer.professional.title}</p>
            {!isHacker && (
              <div className="flex flex-wrap text-gray-500 mt-4 items-center gap-4">
                <div className="flex gap-1 items-center ">
                  <MapPin color="#6b7280" size={18} strokeWidth={2} />
                  <p className="text-sm">
                    {developer.personal.location.country}, {developer.personal.location.city}
                  </p>
                </div>
                <div className="flex items-center gap-1 ">
                  <Mail size={18} />
                  <p className="text-sm">Available for hire</p>
                </div>
                <div className="flex items-center gap-1 ">
                  <Calendar size={18} />
                  <p className="text-sm">{developer.professional.availability}</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center">
                <Star fill="gold" color="gold" size={20} className="me-2" />
                <p className="font-semibold text-lg">{averageRating.toFixed(1)}</p>
              </div>
              <p className="text-gray-400 text-md md:text-base">({devReviews.length} {t('developerInsideProfile.reviews')})</p>
            </div>

            {!isHacker && (
              <div>
                <div className="mt-4 gap-1 flex flex-wrap">
                  {developer.professional.skills.map((lang, i) => {
                    return (
                      <button key={i}
                        className="third-button1">
                        {lang.name}
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-4 mt-4">
                  <Github size={20} className="text-gray-600 hover:text-purple-500 cursor-pointer" />
                  <Linkedin size={20} className="text-gray-600 hover:text-purple-500 cursor-pointer" />
                  <Globe size={20} className="text-gray-600 hover:text-purple-500 cursor-pointer" />
                </div>
              </div>
            )}
          </div>
          <div className="mt-6 gap-3 flex-shrink-0 flex flex-col w-full md:w-72 div-button">
            <Link to={`/developer/${developer.id}/describe-project`} state={{ developer }}>
              <button
                className={`first-button
                    ${isHacker
                    ? "btn-hacker-danger"
                    : "bg-purple-600 text-white hover:bg-purple-700"}
                `}
              >
                {t("developerInsideProfile.requestService")}
              </button>
            </Link>

            <Link to={`/developer/${developer.id}/send-message`} state={{ developer }}
              className="dark:hover:text-gray-700 first-button hover:bg-gray-100 flex items-center justify-center">
              <MessageSquare size={18} className="me-2" />
              {t('developerInsideProfile.sendMessage')}
            </Link>
          </div>
        </div>


        <div className="profile-secondPart">
          <nav>
            <ul className="flex flex-wrap gap-1 md:gap-4 text-gray-500 font-medium">
              {items.map((item, index) => (
                <li key={index}
                  className={`list ${active === item ? 'border font-medium bg-white' : ''}
                  ${isHacker ? "hacker-tab" : ""}`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>


        <div>
          {active === t('developerInsideProfile.tabs.about') && <About developer={developer} />}

          {active === t('developerInsideProfile.tabs.reviews') && <Reviews reviews={devReviews as any} />}

          {active === t('developerInsideProfile.tabs.services') && <Services developer={developer} />}

          {active === t('developerInsideProfile.tabs.portfolio') && <Portfolio projects={developerProjects} />}
        </div>
      </main>

      <Footer />
    </>
  );
}