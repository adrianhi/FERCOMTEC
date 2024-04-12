import { useParams } from "react-router-dom";
import { projects } from "../Data/ProjectsCards/ProjectsCardsCata";
import Navbar from "@Components/Global/Navbar";
import Header from "@Components/ProjectDetail/Header/Header";
import Description from "@Components/ProjectDetail/Description/Description";
import ErrorPage from "@Pages/ErrorPage";

const ProjectDetail = () => {
  const { name } = useParams();
  const project = projects.find((project) => project.name === name);

  if (!project) {
    return <ErrorPage />;
  }

  return (
    <section>
      <section>
        <Navbar />
      </section>
      <section>
        <Header project={project} />
      </section>
      <section className="d-flex justify-content-center">
        <Description project={project} />
      </section>
    </section>
  );
};

export default ProjectDetail;
