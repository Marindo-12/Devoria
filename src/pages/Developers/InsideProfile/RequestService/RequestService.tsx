import { useState } from "react";
import { Header } from "../../../../components/Header";
import { Calendar, DollarSign, FileText, Send } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { developers } from "../../../../utils/data/developerData/developers";
import "./../../../../styles/RequestService.css";
import { useTranslation } from "react-i18next";
import Footer from "../../../../components/Footer";

export function RequestService() {
  const {t} = useTranslation();
  const [open4, setOpen4] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [send, setSend] = useState(false);

  const navigate = useNavigate()

  const [focusTitle, setFocusTitle] = useState(false);
  const [focusDesc, setFocusDesc] = useState(false);
  const [focusTech, setFocusTech] = useState(false);

  const [succes, setSucces] = useState(false);

  const click = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (send) return;

    if (!title || !desc || !tech || !budget || !timeline) {
      alert(t('developerInsideProfile.requestPage.alertFields'));
      return;
    }

    setSend(true)

    setTimeout(() => {
      setSend(false)
      setSucces(true)

      setTimeout(() => setSucces(false), 3000)
    }, 1000)
  }

  const { id } = useParams();
  const developer = developers.find((dev) => dev.id == id);
  const isHacker = developer?.professional.category === "hack";

  return (
    <>
      <Header open={open4} setOpen={setOpen4} />

      <main className={`transition-all duration-500 flex flex-col gap-10 px-5 md:px-10 relative ease-in-out pt-32 ${open4 ? 'pt-40' : ''} ${isHacker ? 'hacker-theme' : ''}`}>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{t('developerInsideProfile.requestPage.title')}</h1>
          <p className="text-gray-500 text-lg">
            {t('developerInsideProfile.requestPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <form action="" className="first-desc">
            <div>
              <h1 className="text-2xl font-semibold">{t('developerInsideProfile.requestPage.detailsTitle')}</h1>
              <p className="text-gray-500 mt-2">
                {t('developerInsideProfile.requestPage.detailsSubtitle')}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-medium">
                {t('developerInsideProfile.requestPage.projectTitle')} <span className="span">*</span>
              </h2>

              <div
                className={`rounded-xl ${focusTitle ? "border-2 border-purple-700" : ""
                  }`}
              >
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  placeholder={t('developerInsideProfile.requestPage.projectTitlePlaceholder')}
                  className={`inputM w-full focus:outline-purple-500 outline-none p-3 ${isHacker ? 'hacker-input' : ''}`}
                  onBlur={() => setFocusTitle(false)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-medium">
                {t('developerInsideProfile.requestPage.projectDescription')} <span className="span">*</span>
              </h2>

              <div
                className={` rounded-xl  ${focusDesc ? "border-2 border-purple-700" : ""
                  }`}
              >
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder={t('developerInsideProfile.requestPage.projectDescriptionPlaceholder')}
                  className={`textM w-full focus:outline-purple-500 outline-none p-3 ${isHacker ? 'hacker-input' : ''}`}
                  rows={4}
                  onBlur={() => setFocusDesc(false)}
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className=" text-lg font-medium">
                {t('developerInsideProfile.requestPage.budget')} <span className="span">*</span>
              </h2>

              <div>
                <select
                  value={budget} onChange={(e) => setBudget(e.target.value)}
                  defaultValue=""
                  className={`selectM w-full outline-none p-3 bg-white ${isHacker ? 'hacker-input' : ''}`}
                  required
                >
                  <option value="" disabled hidden>
                    {t('developerInsideProfile.requestPage.budgetSelect')}
                  </option>
                  <option value="2">{t('developerInsideProfile.requestPage.budget1')}</option>
                  <option value="3">{t('developerInsideProfile.requestPage.budget2')}</option>
                  <option value="4">{t('developerInsideProfile.requestPage.budget3')}</option>
                  <option value="5">{t('developerInsideProfile.requestPage.budget4')}</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-medium">
                {t('developerInsideProfile.requestPage.timeline')} <span className="span">*</span>
              </h2>

              <div>
                <select
                  value={timeline} onChange={(e) => setTimeline(e.target.value)}
                  defaultValue=""
                  className={`selectM w-full outline-none p-3 bg-white ${isHacker ? 'hacker-input' : ''}`}
                  required
                >
                  <option value="" disabled hidden>{t('developerInsideProfile.requestPage.timelineSelect')}</option>
                  <option value="2">{t('developerInsideProfile.requestPage.timeline1')}</option>
                  <option value="3">{t('developerInsideProfile.requestPage.timeline2')}</option>
                  <option value="4">{t('developerInsideProfile.requestPage.timeline3')}</option>
                  <option value="5">{t('developerInsideProfile.requestPage.timeline4')}</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-lg font-medium">
                {t('developerInsideProfile.requestPage.tech')} <span className="span">*</span>
              </h2>

              <div
                className={` rounded-xl ${focusTech ? "border-2 border-purple-700" : ""
                  }`}
              >
                <textarea
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                  placeholder={t('developerInsideProfile.requestPage.techPlaceholder')}
                  className={`textM w-full focus:outline-purple-500 outline-none p-3 ${isHacker ? 'hacker-input' : ''}`}
                  rows={4}
                  onBlur={() => setFocusTech(false)}
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button 
                className="button cancel" 
                type="reset"
                onClick={() => navigate(-1)}>{t('developerInsideProfile.requestPage.cancel')}</button>

              <button className={`button send relative flex items-center justify-center overflow-hidden gap-1 ${isHacker ? 'hacker-button' : ''}`}
                type="submit"
                onClick={click}
              >
                <Send
                  size={20}
                  color="white"
                  className={`transition-transform duration-1000 ${send ? "translate-x-[150px] -translate-y-20 opacity-0" : "translate-x-0 translate-y-0"
                    }`}
                />
                <p className={`${send ? "invisible" : ""}`}>{t('developerInsideProfile.requestPage.sendRequest')}</p>
              </button>

              {succes && (
                <div className="fixed bottom-5 left-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-fade-in">
                  {t('developerInsideProfile.requestPage.successMessage')}
                </div>
              )}
            </div>
          </form>

          <div className="flex flex-col gap-10">
            <div className={`second-desc1 flex flex-col gap-8 ${isHacker ? 'hacker-info-box' : ''}`}>
              <h1 className="text-2xl font-bold">{t('developerInsideProfile.requestPage.devInfo')}</h1>
              <div className="flex gap-6">
                <img src={developer?.personal.profileImage} alt="" className="w-16 h-16 rounded-full" />
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg font-bold">{developer?.personal.name}</h2>
                  <p className="text-gray-500">{developer?.professional.title}</p>
                </div>
              </div>
              <hr className="w-full text-gray-600" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <DollarSign size={18} color="gray" />
                  <p className=" text-gray-500">{t('developerInsideProfile.requestPage.rate')}</p>
                  <p>{`$${developer?.professional.rate1.min}-${developer?.professional.rate1.max}/hr`}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} color="gray" />
                  <p className=" text-gray-500">{t('developerInsideProfile.requestPage.availability')}</p>
                  <p>{developer?.professional.availability}</p>
                </div>

                <div className="flex items-center gap-3">
                  <FileText size={18} color="gray" />
                  <p className=" text-gray-500">{t('developerInsideProfile.requestPage.responseTime')}</p>
                  <p>{t('developerInsideProfile.requestPage.responseWithin')}</p>
                </div>
              </div>
            </div>

            <div className="second-desc2">
              <h1 className="text-xl font-bold">{t('developerInsideProfile.requestPage.tips')}</h1>
              <ul className="text-gray-500  flex flex-col gap-2 list-disc list-inside dark:text-gray-400">
                <li>{t('developerInsideProfile.requestPage.tip1')}</li>
                <li>{t('developerInsideProfile.requestPage.tip2')}</li>
                <li>{t('developerInsideProfile.requestPage.tip3')}</li>
                <li>{t('developerInsideProfile.requestPage.tip4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
