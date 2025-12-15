import { useTranslation } from "react-i18next";
import type { Developer } from "../../../../utils/data/developerData/developer";
import SkillBar from "./SkillBar";
import './../../../../styles/About.css'
import { AlertTriangle } from "lucide-react";

interface AboutMe {
  developer: Developer
}

export function About({ developer }: AboutMe) {
  const { t } = useTranslation();
  const isHacker = developer.professional.category === "hack";
  return (
    <>
      <div
        className={`
          border rounded-2xl p-10 mt-6
          ${isHacker ? "about-hacker" : "about bg-gray-50"}
        `}
      >
        <h1 className="text-2xl font-bold">{t('developerInsideProfile.aboutMe.title')}</h1>
        <p className=" mt-6 whitespace-pre-line aboutMe">
          {developer.personal.aboutMe.map((key, i) => (
            <span key={i}>
              {t(key)}
              {"\n\n"}
            </span>
          ))} 
        </p>
        {isHacker && (
          <p className="mt-6 text-sm text-red-400 font-medium">
            <div className="flex justify-center">
              <AlertTriangle size={44} />
            </div>
            <div className="text-center mt-2">
              Identity protected — limited public disclosure
            </div>
          </p>
        )}
      </div>

      <div className={`border ${isHacker ? "about-hacker" : "about bg-gray-50"} rounded-2xl p-10 mt-6 flex flex-col gap-3`}>
        <h1 className="text-2xl font-bold mb-3">{t('developerInsideProfile.aboutMe.skills')}</h1>
        {developer.professional.skills.map((skill, i) => (
          <SkillBar key={i} name={skill.name} percent={skill.percent} />
        ))}
      </div>
    </>
  );
}