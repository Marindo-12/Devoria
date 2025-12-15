import { Menu, X, ChevronDown, Check, Moon, Sun, Search } from "lucide-react";
import { Link } from "react-router-dom";
import './../styles/Header.css'
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TranslateIcon } from "./TranslateIcon";
import { useColorScheme } from "../hooks/UseTheme";
import img from '../../public/images/logoo.png';

type HeaderProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Header({ open, setOpen }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const current = i18n.language;
  const { theme, setTheme } = useColorScheme();

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "French" },
    { code: "ar", label: "العربية" }
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="header flex justify-between items-center top-0 left-0 right-0 px-4 md:px-10 py-3 bg-white fixed z-50 w-full border-b  dark:shadow-purple-300 dark:shadow-md">
      <div className="left-section flex items-center gap-2 md:gap-10">
        <button
          className='lg:hidden dark:hover:text-black hover:bg-slate-200 p-1 rounded-md transition'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Link to="/" className="flex gap-1">
          <img src={img} alt="Devoria Logo" className="w-8 h-8" />
          <div className="flex items-center gap-4">
            <p className='font-bold'>{t('brand')}</p>
          </div>
        </Link>
      </div>
      <div className="">
        <div className="nav-s">
        <Search size={24} color="gray" className="me-2"/>
        <input type="text" placeholder="Search..." className="focus:outline-none"/>
      </div>
      </div>

      <nav className="dark:text-white hidden lg:flex gap-6 text-gray-700 font-medium">
        <Link
          to="/developers"
          className="hover:text-purple-600 text-sm"
        >{t('nav.developers')}</Link>
        <Link to="/projects" className="hover:text-purple-600 text-sm">{t('nav.projects')}</Link>
        <Link to="/communities" className="text-sm hover:text-purple-600">{t('nav.communities')}</Link>
      </nav>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className=" p-2 rounded-full border hover:bg-gray-200 hidden lg:block dark:hover:bg-gray-700 transition"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <div className="relative hidden lg:block">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 px-2 py-1  rounded hover:text-purple-600 transition"
          >
            <TranslateIcon size={24} />
            <span className="font-medium text-sm">{current.toUpperCase()}</span>
            <ChevronDown size={14} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${current === lang.code ? "text-black font-medium" : "text-gray-700"
                    }`}
                >
                  <p>{lang.label}</p>
                  {current === lang.code && <Check size={16} />}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Link to="/signin" className="sign-in buttonn px-3 py-1.5 md:px-4 md:py-2 dark:hover:text-gray-600">
            {t('buttons.signIn')}
          </Link>
          <Link to="/signup" className="sign-up buttonn px-3 py-1.5 md:px-4 md:py-2">
            {t('buttons.signUp')}
          </Link>
        </div>
      </div>

      {open && (
        <div className="nav-open dark:text-white absolute top-12 left-0 dark:border-b w-full bg-white shadow-md flex flex-col py-2 lg:hidden mt-3 border-t dark:shadow-md dark:shadow-purple-300 px-4">
          <div className="flex justify-center gap-2">
            <Link
              to="/developers"
              className="dark:hover:bg-gray-700 font-medium hover:bg-gray-100 rounded-md py-2 px-4 cursor-pointer text-sm">{t('nav.developers')}</Link>
            <Link to="/projects" className="dark:hover:bg-gray-700 font-medium hover:bg-gray-100 rounded-md py-2 px-4 cursor-pointer text-sm">{t('nav.projects')}</Link>
            <Link to="/communities" className="dark:hover:bg-gray-700 font-medium hover:bg-gray-100 rounded-md py-2 px-4 cursor-pointer text-sm">{t('nav.communities')}</Link>
          </div>
          <hr />
          <div className="flex gap-2 items-center justify-center mt-2">
            <div className="flex hover:text-purple-600  items-center gap-2"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <button
                className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <p className="text-sm hover:text-purple-600 cursor-pointer text-gray-500">Light UI</p>
            </div>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1  rounded hover:text-purple-600 transition"
              >
                <TranslateIcon size={20} />
                <span className="font-medium text-xs text-gray-500 hover:text-purple-600 transition">{current.toUpperCase()}</span>
                <ChevronDown size={14} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${current === lang.code ? "text-black font-medium" : "text-gray-700"
                        }`}
                    >
                      <p>{lang.label}</p>
                      {current === lang.code && <Check size={16} />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
