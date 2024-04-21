import { Carousel } from "primereact/carousel";
import { projectTemplate } from "./ProjectTemplate/ProjectTemplate";
import ProjectDropdown from "../ProjectFilter/ProjectDropdown";
import { useProjectFilter } from "@Hooks/useProjectFilter";

const ProjectsCarousel = ({ projects }) => {
  const { selectedGroup, groups, filteredProjects, handleGroupChange } =
    useProjectFilter(projects);

  return (
    <div>
      <p className="h2">Proyectos</p>
      <div className="d-flex ms-2 my-2">
        <ProjectDropdown
          groups={groups}
          selectedGroup={selectedGroup}
          onGroupChange={handleGroupChange}
        />
      </div>
      <div>
        <Carousel
          value={filteredProjects}
          itemTemplate={(project) =>
            projectTemplate({ ...project, selectedGroup })
          }
          numVisible={2}
          numScroll={1}
          responsiveOptions={[
            { breakpoint: "1400px", numVisible: 2, numScroll: 1 },
            { breakpoint: "1199px", numVisible: 1, numScroll: 1 },
            { breakpoint: "767px", numVisible: 1, numScroll: 1 },
            { breakpoint: "575px", numVisible: 1, numScroll: 1 },
          ]}
          circular
          className="carousel"
        />
      </div>
    </div>
  );
};

export default ProjectsCarousel;
