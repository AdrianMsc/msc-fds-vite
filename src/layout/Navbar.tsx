import React, { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SidebarContext from "../context/SidebarCtx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faInbox } from "@fortawesome/free-solid-svg-icons";
import UserSVG from "../assets/UserSVG";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const context = useContext(SidebarContext);
  const [triggerModal, setTriggerModal] = useState("hidden");

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

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "flex" ? "hidden" : "flex"));
  };

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        targetUrl: "/ComponentStatus",
      },
    });
  };

  return (
    <header className="bg-white bg-opacity-50  shadow py-4 px-5 flex w-full justify-between items-center z-auto sticky top-0">
      <button className="sm:hidden text-lg" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="flex items-center gap-5 ml-auto">
        {/* {isAuthenticated && ( */}
        <Link
          to={"/docs/notifications"}
          className="flex flex-col items-center justify-end"
        >
          <FontAwesomeIcon
            icon={faInbox}
            className="text-primary-blue size-5 self-center"
          />
          <p className="text-primary-blue font-bold">Inbox</p>
        </Link>
        {/* )} */}
        {!isAuthenticated && (
          <button
            onClick={handleLogin}
            className="flex flex-col items-center justify-end"
          >
            <UserSVG />
            <p className="text-primary-blue font-bold">Log In</p>
          </button>
        )}

        {isAuthenticated && (
          <button onClick={toggleModal} className="flex flex-col items-center">
            <UserSVG />
            <p className="text-primary-blue font-bold mt-[2px]">Account</p>
          </button>
        )}
      </div>

      <div
        className={`fixed z-50 flex-col p-4 rounded-lg shadow-xl right-4 top-14 bg-white ${triggerModal}`}
      >
        <div className="border-b-[1px] border-monochromes-grey_xlight font-semibold pb-1">
          {user?.name}
        </div>
        <button onClick={handleLogout} className="font-semibold pt-1">
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Navbar;
