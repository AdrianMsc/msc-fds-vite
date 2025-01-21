import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MscLogo from "../assets/MscLogo";
import { Link } from "react-router-dom";
import SidebarContext from "../context/SidebarCtx";

const Navbar: React.FC = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Navbar must be used within a SidebarProvider");
  }

  const { toggleSidebar } = context;

  return (
    <header className="bg-white overflow-hidden shadow p-5 flex w-screen fixed justify-between">
      <Link to="/">
        <MscLogo />
      </Link>
      <button className="sm:hidden" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Navbar;
