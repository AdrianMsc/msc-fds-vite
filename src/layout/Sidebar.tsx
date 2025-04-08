import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import formatComponentName from "../utils/formatComponentName";
import SidebarContext from "../context/SidebarCtx";
import { ICategoryApi } from "../interfaces/component.interface";
import { createLinkPage } from "../utils/createLinkPage";
import chevron from "../assets/chevron-down.svg";
import { routesIndex } from "../router/routeIndex";
import handleDataSend from "../utils/handleDataSend"; // Importa la función
import { getNavLinkTo } from "../utils/getNavLinkTo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SearchBar from "../components/SearchBar/SearchBar";
import MscLogo from "../assets/MscLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<ICategoryApi[] | null>(null);
  const componentsApiData = useSelector((state: RootState) => state.components);
  const context = useContext(SidebarContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Sidebar must be used within a SidebarProvider");
  }

  const { toggleSidebar } = context;
  const { isSidebarOpen } = context;

  useEffect(() => {
    setCategories(componentsApiData);
  }, [componentsApiData]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <aside
      className={`pt-5 pb-20 px-4 bg-white sm:max-w-[230px] sm:min-w-[230px] sm:flex flex-col gap-1 overflow-auto ${
        isSidebarOpen
          ? "flex absolute h-lvh lg:flex lg:static lg:h-full"
          : "hidden"
      } z-50 lg:z-auto`}
    >
      <button
        className="absolute top-2 right-2  h-6 w-6 flex lg:hidden items-center justify-center"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faTimes} className="text-monochromes-grey" />
      </button>
      <Link to="/" className="flex flex-col mb-2">
        <MscLogo />
        <p className="font-bold text-sm self-start hidden lg:flex">
          Fuel Design System
        </p>
      </Link>

      <div className="">
        <SearchBar />
      </div>

      <strong>Start Here</strong>
      <NavLink
        to={`/docs/${createLinkPage("GettingStarted")}`}
        onClick={toggleSidebar}
        className={({ isActive }) =>
          isActive ? "font-bold text-primary-blue ml-5" : "ml-5"
        }
      >
        Getting Started
      </NavLink>
      <NavLink
        to={`/docs/${createLinkPage("ComponentStatus")}`}
        onClick={toggleSidebar}
        className={({ isActive }) =>
          isActive ? "font-bold text-primary-blue ml-5" : "ml-5"
        }
      >
        Component Status
      </NavLink>
      <strong className="text-primary-blue flex items-center">
        Categories
        {/* {isLoading && <MscMiniLoading />} */}
      </strong>
      {categories?.map((item, idx) => (
        <React.Fragment key={idx}>
          <strong
            className="flex cursor-pointer"
            onClick={() => toggleCategory(item.category)}
          >
            {item.category}
            <img
              src={chevron}
              alt="Chevron"
              className={`w-3 ml-auto transition-all ${
                openCategories.includes(item.category) ? "-rotate-90" : ""
              }`}
            />
          </strong>
          <div
            className={`flex flex-col space-y-1 ${
              openCategories.includes(item.category) ? "!hidden" : ""
            }`}
          >
            {[...item.components]
              ?.sort((a: any, b: any) => a.name.localeCompare(b.name))
              .map((comp, idx) => (
                <NavLink
                  key={idx}
                  className={({ isActive }) => {
                    return isActive
                      ? "font-bold text-primary-blue ml-5"
                      : "ml-5";
                  }}
                  to={getNavLinkTo(comp)}
                  onClick={(event) => {
                    toggleSidebar();
                    event.preventDefault();
                    const formattedName = createLinkPage(comp.name);
                    if (
                      routesIndex[1].children?.some(
                        (route) => route.path === formattedName
                      )
                    ) {
                      handleDataSend(
                        navigate,
                        `/docs/${formattedName}`,
                        comp.name,
                        categories
                      );
                    } else {
                      handleDataSend(
                        navigate,
                        `/docs/WipComponent/${formattedName}`,
                        comp.name,
                        categories
                      );
                    }
                  }}
                >
                  {formatComponentName(comp.name)}
                </NavLink>
              ))}
          </div>
        </React.Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
