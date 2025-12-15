import { Header } from "../../components/Header";
import { useState } from "react";
import { projects } from "../../utils/data/ProjectsData/projects";
import "./../../styles/Projects.css";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProjectsProfile } from "./ProjectsProfile";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";

export function Projects() {
  const [open3, setOpen3] = useState(false);
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [validatedList, setValidatedList] = useState(projects);
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);

  const filtrered = projects.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const enter = () => {
    if (filtrered.length > 0) {
      setValidatedList(filtrered);
      setShowResult(true);
    } else {
      setValidatedList([]);
      setShowResult(true);
    }
  };

  return (
    <>
      <Header open={open3} setOpen={setOpen3} />

      <main
        className={`transition-all duration-500 ease-in-out pt-40 ${
          open3 ? "pt-56" : ""
        }`}
      >
        <div className="mx-0 lg:mx-2">
          <h1 className="text-3xl font-bold">{t("projects.title")}</h1>

          <p className="mt-1 text-gray-400 text-lg">{t("projects.subtitle")}</p>

          <div
            className={`projects-searchBar ${
              focused ? "border-purple-700 border-2" : "border"
            }`}
          >
            <Search
              color="#6b7280"
              size={24}
              className="me-3 cursor-pointer"
              onClick={enter}
            />
            <input
              type="text"
              className="w-full bg-slate-50 border-none input-searchBar"
              placeholder={t("projects.searchPlaceholder")}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowResult(false);
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => e.key === "Enter" && enter()}
            />
          </div>

          {search.length > 0 && !showResult && (
            <ul className="mt-4 bg-white shadow-lg rounded-lg p-2 text-sm list">
              {filtrered.length > 0 ? (
                filtrered.map((item) => (
                  <li
                    key={item.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer border-b dark:hover:text-gray-600"
                    onClick={() => {
                      setSearch(item.title);
                      setValidatedList([item]);
                      setShowResult(true);
                    }}
                  >
                    {item.title}
                  </li>
                ))
              ) : (
                <li className="p-3 text-gray-400 text-lg">
                  {t("projects.noResults")}
                </li>
              )}
            </ul>
          )}

          <div className="mt-6">
            <div className="mt-6 flex items-center justify-between">
              <p className="p-show">
                {t("projects.showing", { count: validatedList.length })}
              </p>

              <button
                className="border rounded-md px-4 py-2 flex items-center transition"
                onClick={() => setShow(!show)}
              >
                <SlidersHorizontal size={20} />
                <p className="ms-4 text-sm">{t("projects.filters.advanced")}</p>
              </button>
            </div>
          </div>

          {show && (
            <div className="di-h border grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-3xl mt-6 px-6 py-10 bg-stone-50">

              <div>
                <p className="text-lg font-medium">{t("projects.filters.category")}</p>
                <select className="border w-full outline-none rounded-lg p-2 mt-3 text-gray-400 appearance-auto hide-arrow">
                  <option value="all">{t("projects.filters.categories.all")}</option>
                  <option value="web">{t("projects.filters.categories.web")}</option>
                  <option value="mobile">{t("projects.filters.categories.mobile")}</option>
                  <option value="ai">{t("projects.filters.categories.ai")}</option>
                  <option value="blockchain">{t("projects.filters.categories.blockchain")}</option>
                </select>
              </div>

              <div>
                <p className="text-lg font-medium">{t("projects.filters.technology")}</p>
                <select className="border w-full outline-none rounded-lg p-2 mt-3 text-gray-400 appearance-auto hide-arrow">
                  <option value="any">{t("projects.filters.technologies.any")}</option>
                  <option value="react">{t("projects.filters.technologies.react")}</option>
                  <option value="vue">{t("projects.filters.technologies.vue")}</option>
                  <option value="node">{t("projects.filters.technologies.node")}</option>
                  <option value="angular">{t("projects.filters.technologies.angular")}</option>
                  <option value="rn">{t("projects.filters.technologies.rn")}</option>
                </select>
              </div>

              <div>
                <p className="text-lg font-medium">{t("projects.filters.sort")}</p>
                <select className="border w-full outline-none rounded-lg p-2 mt-3 text-gray-400 appearance-auto hide-arrow">
                  <option value="popular">{t("projects.filters.sortOptions.popular")}</option>
                  <option value="recent">{t("projects.filters.sortOptions.recent")}</option>
                  <option value="rating">{t("projects.filters.sortOptions.rating")}</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <ProjectsProfile project={validatedList} />
      </main>

      <Footer />
    </>
  );
}
