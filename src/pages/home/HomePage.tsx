import { useState,useRef,useEffect } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import '../../styles/homePage.css';
import { ArrowDown, Users, MessageSquare, Briefcase, Search, MoveRight, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";
import { DeveloperProfile } from "../Developers/DeveloperProfile";
import { developers } from "../../utils/data/developerData/developers";
import { projects } from "../../utils/data/ProjectsData/projects";
import { ProjectsProfile } from "../Projects/ProjectsProfile";
import { useTranslation } from 'react-i18next';
import FeedbackPopup from "./FeedbackPopup";

export function HomePage() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [validatedList] = useState(developers);
    const [validatedListP] = useState(projects);
    const limitedDev = validatedList.slice(0, 3);
    const limitedPro = validatedListP.slice(0, 3);
    const heroSearchRef = useRef(null);

    useEffect(() => {
        const heroSearch = heroSearchRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                        document.body.classList.add('scrolled-mode');
                    } else {
                        document.body.classList.remove('scrolled-mode');
                    }
                });
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "-100px 0px 0px 0px" 
            }
        );

        if (heroSearch) observer.observe(heroSearch);

        return () => {
            if (heroSearch) observer.unobserve(heroSearch);
        };
    }, []);

    return (
        <>
            <Header open={menuOpen} setOpen={setMenuOpen} />
            <main className={`transition-all duration-700 ease-in-out px-0 pt-40 ${menuOpen ? 'pt-48' : ''}`}>
                <section className="hero-section">
                    <div className="px-4">
                        <h2 className="text-5xl lg:text-7xl font-bold" dangerouslySetInnerHTML={{ __html: t('homePage.hero.title') }} />
                        <h2 className="mt-4 text-xl md:text-2xl text-muted-foreground text-gray-500">{t('homePage.hero.subtitle')}</h2>
                        <div ref={heroSearchRef} className="rounded-3xl border bg-gray-50 gap-2 p-4 flex items-center search-part my-16">
                            <Search size={24} />
                            <input type="text"
                                className="text-lg bg-gray-50 w-full focus:outline-none"
                                placeholder={t('homePage.hero.searchPlaceholder')}
                            />
                        </div>
                        <div className="arrow-down">
                            <ArrowDown />
                        </div>
                    </div>
                </section>

                <section className="section get-section">
                    <div className="container">
                        <h2>{t('homePage.getStarted.title')}</h2>
                        <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-2 lg:grid-cols-4">
                            <Link to="developers" className="card">
                                <div className="flex flex-col gap-2">
                                    <div className="p-3 rounded-full bg-purple-100 w-fit text-purple-600"><Users /></div>
                                    <h3 className="font-semibold text-xl">{t('homePage.getStarted.browseDevelopers.title')}</h3>
                                    <p>{t('homePage.getStarted.browseDevelopers.desc')}</p>
                                    <p className="link-arrow">{t('homePage.getStarted.browseDevelopers.link')} <MoveRight className="ms-2" /></p>
                                </div>

                            </Link>

                            <Link to="projects" className="card">
                                <div className="flex flex-col gap-2">
                                    <div className="p-3 rounded-full bg-purple-100 w-fit text-purple-600 "><FolderKanban /></div>
                                    <h3 className="font-semibold text-xl">{t('homePage.getStarted.exploreProjects.title')}</h3>
                                    <p>{t('homePage.getStarted.exploreProjects.desc')}</p>
                                    <p className="link-arrow">{t('homePage.getStarted.exploreProjects.link')} <MoveRight className="ms-2" /></p>
                                </div>

                            </Link>

                            <Link to="communities" className="card">
                                <div className="flex flex-col gap-2">
                                    <div className="p-3 rounded-full bg-purple-100 w-fit text-purple-600"><MessageSquare /></div>
                                    <h3 className="font-semibold text-xl">{t('homePage.getStarted.joinCommunities.title')}</h3>
                                    <p>{t('homePage.getStarted.joinCommunities.desc')}</p>
                                    <p className="link-arrow">{t('homePage.getStarted.joinCommunities.link')} <MoveRight className="ms-2" /></p>
                                </div>


                            </Link>

                            <div className="card">
                                <div className="flex flex-col gap-2">
                                    <div className="p-3 rounded-full bg-purple-100 w-fit text-purple-600"><Briefcase /></div>
                                    <h3 className="font-semibold text-xl">{t('homePage.getStarted.postServices.title')}</h3>
                                    <p>{t('homePage.getStarted.postServices.desc')}</p>
                                    <p className="link-arrow">{t('homePage.getStarted.postServices.link')} <MoveRight className="ms-2" /></p>
                                </div>


                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h2 className="text-3xl md:text-4xl font-bold text-center">{t('homePage.featuredDevelopers.title')}</h2>
                        <p className="text-gray-500 text-center text-lg md:text-xl mt-2 mb-20">{t('homePage.featuredDevelopers.desc')}</p>

                        <DeveloperProfile developerList={limitedDev} />

                        <div className="flex justify-center mt-10">
                            <Link to="developers" className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-sm flex items-center gap-2">
                                {t('homePage.featuredDevelopers.viewAll')}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="mt-20">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center md:text-4xl">{t('homePage.trendingProjects.title')}</h2>
                        <p className="text-gray-500 text-center mt-2 text-lg md:text-xl mb-20">{t('homePage.trendingProjects.desc')}</p>

                        <ProjectsProfile project={limitedPro} />

                        <div className="flex justify-center mt-10">
                            <Link to="projects" className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-sm flex items-center gap-2">
                                {t('homePage.trendingProjects.viewAll')}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center items-center mt-20">
                    <hr className="w-1/2 border-gray-500" />
                </div>


                <section className="section why-section mt-20 relative">
                    <div className="why-nebula"></div>
                    <div className="container">
                        <div className="why-grid">
                            <div className="why-left why-top">
                                <span>{t('homePage.whyDevoria.title')}</span>
                                <h2 dangerouslySetInnerHTML={{ __html: t('homePage.whyDevoria.subtitle') }} />
                                <p className="papa">{t('homePage.whyDevoria.desc')}</p>
                                <ul className="why-list">
                                    <li>
                                        <div className="icon-box">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <div className="list-text">{t('homePage.whyDevoria.features.findDevelopers')}</div>
                                    </li>
                                    <li>
                                        <div className="icon-box">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <div className="list-text">{t('homePage.whyDevoria.features.showcaseSkills')}</div>
                                    </li>
                                    <li>
                                        <div className="icon-box">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <div className="list-text">{t('homePage.whyDevoria.features.collaborate')}</div>
                                    </li>
                                </ul>

                                <div className="why-action">
                                    <a href="/signup" className="flex items-center gap-2 justify-center">
                                        <div className="rounded-lg bg-purple-600 text-white px-4 flex py-2 items-center gap-2">
                                            {t('homePage.whyDevoria.cta')}
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="why-right">
                                <div className="bg-decoration"></div>
                                <div className="image">
                                    <img src="images/R.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex justify-center items-center mt-20">
                    <hr className="w-1/2 border-gray-500" />
                </div>


                <section className="section team-section mt-20">
                    <div className="container">
                        <div className="team-grid">
                            <div className="team-left">
                                <div className="img-pill pill-down">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team working" />
                                </div>
                                <div className="img-pill pill-up">
                                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Meeting" />
                                </div>
                                <div className="team-deco"></div>
                            </div>

                            <div className="team-right">
                                <div className="team-blob"></div> 
                                <span>{t('homePage.team.title')}</span>
                                <h2 dangerouslySetInnerHTML={{ __html: t('homePage.team.subtitle') }} />
                                <div className="w-full h-[2px] bg-gradient-to-r from-purple-500/50 via-fuchsia-500/40 to-blue-500/40 rounded-full my-6"></div>
                                <p className="team-lead">{t('homePage.team.lead')}</p>

                                <div className="team-values">
                                    <div className="value-item">
                                        <h4>{t('homePage.team.values.mission')}</h4>
                                        <p>{t('homePage.team.values.mission')}</p>
                                    </div>
                                    <div className="value-item">
                                        <h4>{t('homePage.team.values.values')}</h4>
                                        <p>{t('homePage.team.values.values')}</p>
                                    </div>
                                </div>

                                <p className="team-desc">{t('homePage.team.desc')}</p>

                                <div>
                                    <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                                        {t('homePage.team.meetTeam')}
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="flex justify-center items-center mt-20">
                    <hr className="w-1/2 border-gray-500" />
                </div>


                <section className="mt-20 mb-20 flex flex-col gap-4 text-center py-16 md:py-24 px-6 bg-gradient-to-r from-purple-600 to-blue-500">
                    <h2 className="font-bold text-3xl text-white">{t('homePage.ctaSection.readyTitle')}</h2>
                    <p className="text-gray-300 text-xl">{t('homePage.ctaSection.readyDesc')}</p>
                    <div className="flex items-center gap-3 justify-center mt-4">
                        <Link to="developers" className="px-4 py-2 bg-white text-purple-600 rounded-lg text-sm">{t('homePage.ctaSection.browseDevelopers')}</Link>
                        <a href="/signup" className="px-4 py-2 text-white rounded-lg border text-sm">{t('homePage.ctaSection.signUp')}</a>
                    </div>
                </section>

                <div className="flex justify-center items-center mt-20">
                    <hr className="w-1/2 border-gray-500" />
                </div>


                <section className="section cta-section">
                    <div className="container">
                        <div className="cta-card">
                            <div className="cta-content">
                                <h2>{t('homePage.cloudCTA.title')}</h2>
                                <p>{t('homePage.cloudCTA.desc')}</p>

                                <form className="cta-form">
                                    <input type="email" placeholder={t('homePage.cloudCTA.emailPlaceholder')} required />
                                    <button type="submit" className="btn btn-cta">{t('homePage.cloudCTA.button')}</button>
                                </form>
                                <p className="cta-note">{t('homePage.cloudCTA.note')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <FeedbackPopup />

            </main>
            <Footer />
        </>
    );
}
