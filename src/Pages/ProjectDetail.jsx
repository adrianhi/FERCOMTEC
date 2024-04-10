import { projects } from "../Data/ProjectsCards/ProjectsCardsCata";
import { useParams } from "react-router-dom";
const ProjectDetail = () => {
  const { name } = useParams();
  const project = projects.find((project) => project.name === name);

  if (!project) {
    return <div>Project not found</div>;
  }
  return( 
  <div>
    {name}
    
    </div>
    
  
  );
};

export default ProjectDetail;
