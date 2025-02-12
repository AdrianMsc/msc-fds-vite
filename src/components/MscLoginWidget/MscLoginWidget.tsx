import { useAuth0 } from "@auth0/auth0-react";
import UserSVG from "../../assets/UserSVG";
import { useState } from "react";

interface MscLoginWidgetProps {
  className?: string; // Opcional, ya que en el código original se usa sin validación.
  type?: string;
  logoutBtn?: boolean;
}

const MscLoginWidget: React.FC<MscLoginWidgetProps> = ({
  className = "",
  type = "widget",
  logoutBtn = true,
}) => {
  const [triggerModal, setTriggerModal] = useState("hidden");
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        targetUrl: "/docs",
      },
    });
  };

  const toggleWidget = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return type === "widget" ? (
    <div className={`flex items-center gap-2 ${className}`}>
      {!isAuthenticated ? (
        <button onClick={handleLogin} className="flex flex-col items-center">
          <UserSVG />
          <p className="text-primary-blue font-bold text-sm">Log In</p>
        </button>
      ) : (
        <button onClick={toggleWidget} className="flex flex-col items-center">
          <img src={user?.picture} alt="" className="w-[2rem] rounded-full" />
          <p className="text-primary-blue font-bold text-sm">Account</p>
        </button>
      )}

      <div
        className={`min-w-32 absolute z-50 flex flex-col p-4 rounded-lg shadow-xl left-0 top-10 bg-white ${triggerModal}`}
      >
        <div className="border-b-[1px] border-monochromes-grey_xlight font-semibold pb-1">
          {user?.name}
        </div>
        <button onClick={handleLogout} className="font-semibold pt-1">
          Log Out
        </button>
      </div>
    </div>
  ) : !isAuthenticated ? (
    <button
      className={`msc-btn msc-btn-blue-outline ${className}`}
      onClick={handleLogin}
    >
      Login
    </button>
  ) : logoutBtn ? (
    <button
      className={`msc-btn msc-btn-blue-outline ${className}`}
      onClick={handleLogout}
    >
      Logout
    </button>
  ) : (
    ""
  );
};

export default MscLoginWidget;
