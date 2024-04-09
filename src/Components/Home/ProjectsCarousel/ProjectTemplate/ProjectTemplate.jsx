export const projectTemplate = ({
  id,
  name,
  image,
  group,
  shortReview,
  color,
}) => (
  <div className="project-item ml-2" key={id}>
    <img src={image} alt={name} className="w-100" height={350} />
    <div className="p-2">
      <p className="fs-4  fw-bold">{name}</p>
      <div className="w-25 mx-auto">
        <p
          className={`${color} rounded text-white rounded-full text-center text-wrap`}
        >
          {group}
        </p>
      </div>
      <p className="text-bold text-start">{shortReview}</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-warning text-white px-5 btn-lg">
          Ver más
        </button>
      </div>
    </div>
  </div>
);
