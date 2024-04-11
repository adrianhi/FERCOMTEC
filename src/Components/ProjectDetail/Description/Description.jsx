const Description = ({ project }) => {
  return (
    <div className="my-4 mx-4 justify-content-start">
      <div>
        <p>
          {project.longReview}
        </p>
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
    </div>
  );
};

export default Description;
