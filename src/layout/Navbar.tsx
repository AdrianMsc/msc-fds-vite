import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MscLogo from "../assets/MscLogo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white overflow-hidden shadow p-5 flex w-screen fixed justify-between">
      <Link to="/">
        <MscLogo />
      </Link>
      <button className="sm:hidden">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Navbar;
