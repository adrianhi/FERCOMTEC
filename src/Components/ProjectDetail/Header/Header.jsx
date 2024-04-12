import { Image } from "primereact/image";

const Heaader = ({ project }) => {
  return (
    <div className="my-2">
      <p className="fs-1 text-center fw-bold">{project.name}</p>
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
