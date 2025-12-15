import { Eye, Heart } from "lucide-react"
import './../../styles/ProjectFile.css'
import { developers } from "../../utils/data/developerData/developers";
import { Link } from "react-router-dom";
import type { Project } from "../../utils/data/ProjectsData/project";

export function ProjectsProfile({ project = [] }: { project: Project[] }) {
  return (
    <>
      <div className="container-c">
        {project.map((p) => {
          const devPro = developers.find(d => d.devId === p.devId);
          const [first, second] = (devPro?.personal?.name ?? "").split(" ");
          return (
            <Link to={`/project/${p.id}`} key={p.id} className="bg-slate-50 rounded-3xl border overflow-hidden">
              <img src={p.imageUrl} alt="" className="w-full aspect-[6/3] object-cover" />
              <div className="second-part-p dark:border-t-2 dark:text-white flex flex-col gap-2 p-6">
                <h1 className="text-xl font-bold">{p.title}</h1>
                <p className=" text-gray-500">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((lang, index) => (
                    <span
                      key={index}
                      className="border rounded-lg px-3 py-1 cursor-pointer text-sm button-p dark:hover:text-gray-600 hover:bg-gray-100"
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="flex gap-1">
                      <Eye size={20} color="blue" strokeWidth={1.5} />
                      <p className="text-sm">{p.views}</p>
                    </div>
                    <div className="flex gap-1">
                      <Heart size={20} fill="red" color="red" strokeWidth={1.5} />
                      <p className="text-sm">{p.likes}</p>
                    </div>
                  </div>
                  <Link
                    to={`/developer/${devPro?.id}`}
                    className="flex items-center gap-3 hover:bg-slate-100 p-2 rounded-lg">
                    {devPro ? (
                      <>
                        <img
                          src={devPro.personal.profileImage}
                          alt={devPro.personal.name}
                          className="w-12 rounded-full" />
                        <div className="text-center leading-relaxed">
                          <p className="dev-name text-xs">{first}</p>
                          <p className="dev-name text-xs">{second}</p>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-400">UnKnown</p>
                    )}
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}