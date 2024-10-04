import Project from './Project';
import { TProject, TProjectList } from "./models";

const ProjectList = ({ projects }: TProjectList) => {
  return (
    <div className="projects-container">
      {projects.map((project: TProject, i) => (
        <Project key={project.img + i} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
