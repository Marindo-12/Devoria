import { serviceIconMap } from "../../../../utils/data/developerData/serviceIcon";
import type { Developer } from "../../../../utils/data/developerData/developer";
import { ArrowRight, AlertTriangle } from "lucide-react";
import "../../../../styles/services.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface serviceProps {
  developer: Developer;
}

export function Services({ developer }: serviceProps) {
  const { t } = useTranslation();
  const [confirmed, setConfirmed] = useState(false);

  const isHacker = developer.professional.category === "hack";

  if (isHacker && !confirmed) {
    return (
      <div className="hacker-warning">
        <AlertTriangle size={44} className="danger-icon" />
        <h3>{t("developerInsideProfile.hackerWarning.title")}</h3>
        <p>{t("developerInsideProfile.hackerWarning.message")}</p>

        <div className="warning-actions">
          <button
            className="btn-danger"
            onClick={() => setConfirmed(true)}
          >
            {t("developerInsideProfile.hackerWarning.confirm")}
          </button>

          <button className="btn-cancel">
            {t("developerInsideProfile.hackerWarning.cancel")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {developer.services.map((service) => {
        const Icon = serviceIconMap[service.type];

        return (
          <div
            key={service.id}
            className={`flex flex-col gap-2 service-card rounded-2xl p-6 border
              ${isHacker ? "service-card-danger" : "bg-slate-50"}
            `}
          >
            <div
              className={`p-3 rounded-xl w-fit mb-2
                ${isHacker ? "bg-red-900" : "bg-purple-100"}
              `}
            >
              {Icon ? (
                <Icon
                  size={20}
                  className={isHacker ? "text-red-400" : "text-purple-600"}
                />
              ) : (
                <span className="text-gray-400 text-lg">-</span>
              )}
            </div>

            <p className="text-2xl font-semibold">
              {t(service.nameService)}
            </p>

            <p
              className={`font-medium
                ${isHacker ? "text-red-400" : "text-purple-500"}
              `}
            >
              ${service.priceService.min} - ${service.priceService.max}/
              {t("developerInsideProfile.services.hour")}
            </p>

            <p className="text-gray-400">
              {t(service.description)}
            </p>

            <Link
              to={`/developer/${developer.id}/describe-project`}
              className={`flex justify-between p-2 rounded-lg
                ${isHacker
                  ? "hover:bg-red-950 text-red-400"
                  : "hover:bg-slate-100 hover:text-purple-700"}
              `}
            >
              <p className="font-medium text-sm">
                {t("developerInsideProfile.services.learnMore")}
              </p>
              <ArrowRight size={20} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
