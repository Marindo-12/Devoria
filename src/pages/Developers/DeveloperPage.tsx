import { DeveloperProfile } from "./DeveloperProfile";
import { Header } from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import './../../styles/DeveloperPage.css'
import { Search } from "lucide-react";
import { FilterPage } from "./FilterPage";
import { developers } from "../../utils/data/developerData/developers";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer";


export function DeveloperPage() {
  const [open1, setOpen1] = useState(false);
  const [search, setSearch] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [validatedList, setValidatedList] = useState(developers)
  const [focused, setFocused] = useState(false);
  const [category, setCategory] = useState('all');

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const filtered = developers.filter(item => {
    const matchSearch =
      item.personal.name.toLowerCase().includes(search.toLowerCase()) ||
      item.professional.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === 'all' || item.professional.category === category;

    return matchSearch && matchCategory;
  });

  const enter = () => {
    if (filtered.length > 0) {
      setShowResult(true);
      setValidatedList(filtered);
    } else {
      setShowResult(false);
      setValidatedList([]);
    }
  }

  useEffect(() => {
    if (filtered.length > 0) {
      setValidatedList(filtered);
      setShowResult(true);
    } else {
      setValidatedList([]);
      setShowResult(false);
    }
  }, [category, search]);

  return (
    <>
      <Header open={open1} setOpen={setOpen1} />

      <main className={`dark:text-white transition-all duration-500 ease-in-out relative pt-40 ${open1 ? 'pt-56' : ''}`}>
        <div className="mx-0 lg:mx-2">
          <h1 className="text-3xl font-bold">{t('developersPage.title')}</h1>
          <p className="mt-3 text-gray-400 text-lg">
            {t('developersPage.subtitle')}
          </p>
          <div
            className="cube-container"
            style={{
              left: isRTL ? "50px" : undefined,
              right: isRTL ? undefined : "50px"
            }}>
          </div>
          <div className={`Developers-searchBar ${focused ? "border-purple-700 border-2" : "border"}`}>
            <Search color="#6b7280" size={26} strokeWidth={2} className="me-3 cursor-pointer" onClick={enter} />
            <input
              type="text"
              placeholder={t('developersPage.searchPlaceholder')}
              className="border-none w-full text-lg focus:border-none focus:outline-none bg-slate-50 inpp"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  enter()
                }
              }}
            />

          </div>
          {focused && search.length > 0 && (
            <>
              {console.log(showResult)}
              <ul className="mt-4 ul-search bg-white shadow-lg rounded-lg p-2">
                {filtered.length > 0 ? (
                  filtered.map(item => (
                    <li
                      key={item.id}
                      className="p-3 hover:bg-gray-200 rounded cursor-pointer"
                      onMouseDown={() => {
                        setValidatedList([item]);
                        setShowResult(true);
                        setSearch(item.personal.name);
                        setFocused(false)
                      }}>
                      <p className="text-slate-500 dark:text-slate-400">{item.personal.name} — {item.professional.title}</p>
                    </li>
                  ))
                ) : (
                  <li className="p-3 text-gray-400">{t('developersPage.noResults')}</li>
                )}
              </ul>
            </>)}

          <FilterPage 
            developerList={validatedList}
            onCategoryChange={setCategory}
          />
          <DeveloperProfile developerList={validatedList} />
        </div>
      </main>

      <Footer />
    </>
  );
}