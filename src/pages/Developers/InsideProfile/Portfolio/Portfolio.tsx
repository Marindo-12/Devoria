import { ProjectsProfile } from "../../../Projects/ProjectsProfile";
import { XIcon } from "lucide-react";
import './../../../../styles/Portfolio.css'

export function Portfolio({ projects }: any) {
  if (!projects || projects.length === 0) {
    return (
      <div className="port-em  mt-10 p-20 gap-4 flex flex-col items-center justify-center rounded-3xl border">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="sand-particle"
            style={{
              '--random-left': `${Math.random() * 100}%`,   
              '--random-top': `${Math.random() * 100}%`,    
              '--random-delay': `${Math.random() * 5}s`,
              '--random-scale': `${0.5 + Math.random() * 1}`
            } as React.CSSProperties}
          />
        ))}


        <XIcon size={100} color="gray" />
        <p className="text-gray-500 text-3xl">No projects yet...</p>
      </div>
    );
  }

  return <ProjectsProfile project={projects} />;
}