import { Link } from "react-router-dom";
import "../ProjectsCarousel.css"
export const projectTemplate = ({ name, image, group, shortReview, color }) => (
  <div className="project-item ml-2" key={name}>
    <img src={image} alt={name} className="w-100" height={350} />
    <div className="p-2">
      <p className="fs-4  fw-bold">{name}</p>
      <div className="w-50 mx-auto">
        <p
          className={`${color} rounded text-white text-center`}
        >
          {group}
        </p>
      </div>
      <p className="text-bold text-start">{shortReview}</p>
      <div className="d-flex justify-content-center">
        <Link
          to={`/project/${name}`}
          className="btn btn-warning text-white px-5 btn-lg"
        >
          Ver más
        </Link>
      </div>
    </div>
  </div>
);
