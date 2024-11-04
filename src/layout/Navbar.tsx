"use client";
import { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MscLogo from "@/assets/MscLogo";
import { SidebarContext } from "@/context/SidebarCtx";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <header className="bg-white overflow-hidden shadow p-5 flex w-screen fixed justify-between">
      <Link href="/">
        <MscLogo />
      </Link>
      <button className="sm:hidden" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Navbar;
