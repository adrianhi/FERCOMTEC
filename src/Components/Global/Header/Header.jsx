import { Link } from "react-router-dom";
import logo from "@Images/Navbar/Logo.png";
export default function Header() {
  return (
    <section>
      <nav className="navbar ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="FERCOMTEC" className="float-start w-25 " />
          </Link>
        </div>
      </nav>
    </section>
  );
}
