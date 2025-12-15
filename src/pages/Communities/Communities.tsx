import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./community.css";
import { Search } from "lucide-react";
import { CreateCommunity } from "./CreateCommunity";
import { MyCommunity } from "./MyCommunity";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

export function Communities() {
  const [open9, setOpen9] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/communities/data.js";
    script1.async = false;

    const script2 = document.createElement("script");
    script2.src = "/communities/app.js";
    script2.async = false;

    const appendAndLoad = (s:HTMLScriptElement) =>
      new Promise<void>((resolve) => {
        s.onload = () => resolve();
        s.onerror = () => resolve();
        document.body.appendChild(s);
      });

    let cancelled = false;

    Promise.all([appendAndLoad(script1), appendAndLoad(script2)]).then(() => {
      if (cancelled) return;
      const w = window;
      if (typeof w.showPage === "function") {
        w.showPage("list");
      } else {
        if (typeof w.filterCommunities === "function") w.filterCommunities();
      }
    });

    return () => {
      cancelled = true;
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <Header open={open9} setOpen={setOpen9} />

      <main
        className={`transition-all duration-500 flex flex-col gap-10 px-4 md:px-10 relative ease-in-out pt-32 ${
          open9 ? "pt-40" : ""
        }`}
      >
        <div className="mt-4">
          <div id="page-list" className="page active">
            <div className="flex flex-col md:flex-row md:justify-between mb-4 gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold text-4xl">{t("communities.title")}</h2>
                <p className="text-gray-500">{t("communities.subtitle")}</p>
              </div>

              <div className="flex-col flex gap-2">
                <button
                  className="rounded-lg w-full px-4 py-2 me-2 dark:hover:text-gray-700 hover:bg-gray-100 text-sm border"
                  onClick={() => window.showPage("my")}
                >
                  {t("communities.myCommunities")}
                </button>
                <button
                  className="rounded-lg w-full px-4 py-2 text-sm bg-purple-600 text-white hover:bg-purple-500"
                  onClick={() => window.showPage("create")}
                >
                  + {t("communities.createCommunity")}
                </button>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2 p-4 rounded-3xl search-com bg-gray-50 border">
              <Search size={20} color="gray" />
              <input
                type="text"
                className="w-full focus:outline-none bg-gray-50 inp-com"
                id="searchInput"
                placeholder={t("communities.searchPlaceholder")}
                onInput={() => window.filterCommunities()}
              />
            </div>

            <div id="communities-list" className="row"></div>
          </div>

          <div id="page-detail" className="page">
            <button
              className="flex items-center gap-3 hover:bg-neutral-100 rounded-lg p-2 w-fit cursor-pointer first-div mb-6"
              onClick={() => window.showPage("list")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              <p className="text-sm">{t("communities.back")}</p>
            </button>

            <div id="community-detail"></div>
          </div>

          <CreateCommunity />
          <MyCommunity />
        </div>
      </main>

      <Footer />
    </>
  );
}
