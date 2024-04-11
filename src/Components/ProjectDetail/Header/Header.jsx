import { Image } from "primereact/image";

const Heaader = ({ project }) => {
  return (
    <div>
      <p className="fs-2 text-center fw-bold">{project.name}</p>
      <div className="d-flex justify-content-center">
        <div>
          <Image
            src={project.image}
            alt={`${project.name} image`}
            width="400"
            preview
          />
        </div>
      </div>
    </div>
  );
};

export default Heaader;
