import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MscLogo from "../assets/MscLogo";
import { Link } from "react-router-dom";
import SidebarContext from "../context/SidebarCtx";
import { useAuth0 } from "@auth0/auth0-react";
import profPic from "../assets/placeholder-profile.jpg";

const Navbar: React.FC = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Navbar must be used within a SidebarProvider");
  }

  const { toggleSidebar } = context;
  const { user, isAuthenticated } = useAuth0();

  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        targetUrl: "/ComponentStatus",
      },
    });
  };

  const LogOutIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-4"
      fill="currentColor" // You can customize this for dynamic color
    >
      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </svg>
  );

  return (
    <header className="bg-white overflow-hidden shadow p-5 flex w-screen fixed justify-between">
      <Link to="/">
        <MscLogo />
      </Link>

      <div className="flex items-center gap-2">
        {isAuthenticated && (
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full  mr-2"
              src={profPic}
              alt="Profile Picture"
            />
            <span className="text-sm text-primary-blue font-bold">
              {user?.name}
            </span>
          </div>
        )}

        {!isAuthenticated && (
          <button onClick={handleLogin} className="msc-btn msc-btn-blue-solid ">
            Login
          </button>
        )}

        {isAuthenticated && (
          <button onClick={handleLogout} className="msc-link text-primary-blue">
            {LogOutIcon()}
          </button>
        )}
      </div>

      <button className="sm:hidden" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Navbar;
