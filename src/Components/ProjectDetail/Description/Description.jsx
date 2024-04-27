import { Panel } from "primereact/panel";
import "./Description.css";
import useAos from "@Hooks/useAos";
const Description = ({ project }) => {
  useAos(1000);
  return (
    <div className="description-container my-4 ">
      <Panel
        data-aos="flip-left"
        header="Detalles"
        className="custom-panel mx-auto"
      >
        <div>
          <p className="description-text">{project.longReview}</p>
        </div>
        <div>
          <p>
            <span className="fw-bold">Grupo: </span>
            {project.group}
          </p>
        </div>
        <div>
          <p className="fw-bold">Miembros:</p>
          <ul>
            {project.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </Panel>
    </div>
  );
};

export default Description;
