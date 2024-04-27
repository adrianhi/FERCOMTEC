import { Link } from "react-router-dom";
import logo from "@Images/Navbar/Logo.png";
export default function Header() {
  return (
    <section>
      <nav className="navbar  bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="FERCOMTEC" className="float-start w-50" />
          </Link>
        </div>
      </nav>
    </section>
  );
}
