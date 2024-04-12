import { Panel } from "primereact/panel";
import "./Description.css";
const Description = ({ project }) => {
  return (
    <div className="description-container my-4 ">
      <Panel header="Detalles" className="custom-panel mx-auto">
        <div>
          <p>{project.longReview}</p>
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
