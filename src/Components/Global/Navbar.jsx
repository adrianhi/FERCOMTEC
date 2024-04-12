import { Link } from "react-router-dom";
import logo from "@Images/Navbar/Logo.png";
export default function Navbar() {
  return (
    <section>
      <nav className="navbar bg-light   w-100 ">
        <div>
          <Link className=" navbar-brand" to="/">
            <img src={logo} alt="FERCOMTEC" className="w-25 ms-4 " />
          </Link>
        </div>
      </nav>
    </section>
  );
}
