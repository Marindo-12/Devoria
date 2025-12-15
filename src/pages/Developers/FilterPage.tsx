import { useState } from 'react';
import './../../styles/FilterPage.css'
import { SlidersHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FilterPage({ developerList, onCategoryChange }: { developerList: unknown[]; onCategoryChange: (category: string) => void; }) {
  const { t } = useTranslation()
  const categorys = [
    {
      key: "all",
      name: "All",
      image: "/images/SVG_ServicesLogo/all.svg"
    },
    {
      key: "hack",
      name: "Hacker",
      image: "/images/SVG_ServicesLogo/hacker.png"
    },
    {
      key: "webDevelopment",
      name: "Web Development",
      image: "/images/SVG_ServicesLogo/webDevelopement.svg"
    },
    {
      key: "videoEditor",
      name: "Video Editor",
      image: "/images/SVG_ServicesLogo/video.svg"
    },
    {
      key: "design",
      name: "Design",
      image: "/images/SVG_ServicesLogo/design.svg"
    },
    {
      key: "mobileApps",
      name: "Mobile Apps",
      image: "/images/SVG_ServicesLogo/mobile.svg"
    },
    {
      key: "backend",
      name: "Backend",
      image: "/images/SVG_ServicesLogo/backend.svg"
    },
    {
      key: "devOps",
      name: "DevOps",
      image: "/images/SVG_ServicesLogo/devOps.svg"
    },
    {
      key: "aiMl",
      name: "AI/ML",
      image: "/images/SVG_ServicesLogo/ai.svg"
    }
  ];

  const [active, setActive] = useState('All');
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mt-11">
        <p className="text-lg text-gray-400">{t('filterPage.filterByCategory')}</p>
        <div className="flex flex-wrap gap-3 mt-6">
          {categorys.map((cat, i) => {
            const isActive = active === cat.name;
            const specialH = cat.key === 'hack' && isActive;
            return (
              <div
                key={i}
                className={`border px-6 py-3 flex flex-col items-center justify-center text-center cursor-pointer rounded-2xl 
              hover:bg-gray-100
                ${isActive ? (specialH ? 'bg-gradient-to-r from-red-600 to-black text-white' : 'button-click') : ''}`}
                  onClick={() => {
                    setActive(cat.name);
                    onCategoryChange(cat.key);
                  }}
              >
                <img src={cat.image} alt=""
                  className='w-6 h-6' />
                {t(`filterPage.categories.${cat.key}`)}
              </div>
            );
          })}
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='text-gray-500 text-md'>{t('filterPage.showingDevelopers', { count: developerList.length })}</p>
          <button
            className="border rounded-md px-4 py-1.5 flex items-center transition "
            onClick={() => { setShow(!show) }}>
            <SlidersHorizontal size={20} />
            <p className='ms-4 text-sm'>{t('filterPage.advancedFilters')}</p>
          </button>
        </div>
      </div>

      {show &&
        <div className='div-hide border grid grid-cols-1 lg:grid-cols-4 gap-4 rounded-3xl mt-11 px-6 py-8 bg-stone-50 div-first '>
          <div>
            <p className='font-mono text-xl font-medium'>{t('filterPage.location')}</p>
            <input
              type="text"
              placeholder={t('filterPage.locationPlaceholder')}
              className='border inside w-full outline-none text-lg rounded-lg py-1 px-3 mt-3' />
          </div>
          <div>
            <p className='font-mono text-xl'>{t('filterPage.experience')}</p>
            <select className='border w-full outline-none text-lg rounded-lg inside py-1 px-3 mt-3 appearance-auto text-gray-400'>
              <option value="1">{t('filterPage.experienceOptions.any')}</option>
              <option value="2">{t('filterPage.experienceOptions.junior')}</option>
              <option value="3">{t('filterPage.experienceOptions.mid')}</option>
              <option value="4">{t('filterPage.experienceOptions.senior')}</option>
            </select>
          </div>
          <div>
            <p className='font-mono text-xl'>{t('filterPage.skills')}</p>
            <input
              type="text"
              placeholder={t('filterPage.skillsPlaceholder')}
              className='inside border w-full outline-none text-lg rounded-lg py-1 px-3 mt-3' />
          </div>
          <div>
            <p className='font-mono text-xl'>{t('filterPage.rating')}</p>
            <select className='inside border w-full outline-none text-lg rounded-lg py-1 px-3 mt-3 appearance-auto text-gray-400'>
              <option value="1">{t('filterPage.ratingOptions.any')}</option>
              <option value="2">{t('filterPage.ratingOptions.5stars')}</option>
              <option value="3">{t('filterPage.ratingOptions.4plus')}</option>
              <option value="4">{t('filterPage.ratingOptions.3plus')}</option>
            </select>
          </div>
        </div>}
    </>
  );
}