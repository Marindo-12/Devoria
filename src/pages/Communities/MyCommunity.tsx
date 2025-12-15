import { UserCog2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function MyCommunity() {
  const { t } = useTranslation();

  return (
    <>
      <div id="page-my" className="page">
        <div className="flex justify-center mb-3">
          <div className="bg-purple-100 text-purple-600 rounded-full p-3">
            <UserCog2 size={28} />
          </div>
        </div>

        <div>
          <p className="font-bold text-3xl text-center mb-20">
            {t("myCommunity.title")}
          </p>
          <div id="my-communities-list" className="row"></div>
        </div>
      </div>
    </>
  );
}
