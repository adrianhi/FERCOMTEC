import { Link } from "react-router-dom";
import logo from "@Images/Navbar/Logo.png";
export default function Navbar() {
  return (
    <section>
      <nav className="navbar float-star w-100 ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="FERCOMTEC" className="w-25 " />
          </Link>
        </div>
      </nav>
    </section>
  );
}
