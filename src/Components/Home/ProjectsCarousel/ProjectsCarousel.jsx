import { Carousel } from "primereact/carousel";
import { projectTemplate } from "./ProjectTemplate/ProjectTemplate";
import ProjectDropdown from "../ProjectFilter/ProjectDropdown";
import { useProjectFilter } from "@Hooks/useProjectFilter";
import useAos from "@Hooks/useAos";

const ProjectsCarousel = ({ projects }) => {
  useAos(2000);
  const { selectedGroup, groups, filteredProjects, handleGroupChange } =
    useProjectFilter(projects);

  // Si hay más de un proyecto, usar el carousel
  const shouldUseCarousel = filteredProjects.length > 1;

  return (
    <div>
      <h2>Proyectos</h2>
      <div className="d-flex ms-2 my-2">
        <ProjectDropdown
          groups={groups}
          selectedGroup={selectedGroup}
          onGroupChange={handleGroupChange}
        />
      </div>
      {shouldUseCarousel ? (
        <div>
          <Carousel
            value={filteredProjects}
            itemTemplate={projectTemplate}
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
            data-aos="fade-up"
          />
        </div>
      ) : (
        // Renderizar el primer proyecto si solo hay uno
        filteredProjects.map((project, index) => (
          <div key={index}>{projectTemplate(project)}</div>
        ))
      )}
    </div>
  );
};

export default ProjectsCarousel;
