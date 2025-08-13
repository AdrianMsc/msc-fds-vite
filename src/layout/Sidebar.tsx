import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SidebarContext from "../context/SidebarCtx";
import formatComponentName from "../utils/formatComponentName";
import { routesIndex } from "../router/routeIndex";
import { RootState } from "../redux/store";
import { ICategoryApi } from "../interfaces/component.interface";

import chevron from "../assets/chevron-down.svg";
import { createLinkPage } from "../utils/createLinkPage";
import { getNavLinkTo } from "../utils/getNavLinkTo";
import { setCurrentComponent } from "../redux/slices/currentComponentSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  const componentsApiData = useSelector((state: RootState) => state.components);

  const [categories, setCategories] = useState<ICategoryApi[] | null>(null);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("Sidebar must be used within a SidebarProvider");

  const { toggleSidebar, isSidebarOpen } = context;

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

  const renderComponentLinks = (
    categoryComponents: ICategoryApi["components"]
  ) => {
    return [...categoryComponents]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((comp, idx) => {
        const formattedName = createLinkPage(comp.name);
        const routeExists = routesIndex[1].children?.some(
          (route) => route.path === formattedName
        );
        const navTo = routeExists
          ? `/docs/${formattedName}`
          : `/docs/WipComponent/${formattedName}`;

        if (!isAuthenticated && navTo.includes("/docs/WipComponent/")) {
          return null;
        }

        return (
          <NavLink
            key={idx}
            to={getNavLinkTo(comp)}
            onClick={(e) => {
              e.preventDefault();
              toggleSidebar();
              navigate(navTo);
              dispatch(setCurrentComponent(comp));
            }}
            className={({ isActive }) =>
              isActive
                ? "bg-monochromes-grey_xlight pl-7 py-1"
                : "pl-7 py-1 hover:bg-monochromes-grey_xlight"
            }
          >
            {formatComponentName(comp.name)}
          </NavLink>
        );
      });
  };

  const renderCategorySection = () =>
    categories?.map(({ category, components }, idx) => (
      <React.Fragment key={idx}>
        <strong
          className="flex cursor-pointer px-4"
          onClick={() => toggleCategory(category)}
        >
          {category}
          <img
            src={chevron}
            alt="Toggle Category"
            className={`w-3 ml-auto transition-all ${
              openCategories.includes(category) ? "-rotate-90" : ""
            }`}
          />
        </strong>
        <div
          className={`flex flex-col ${
            openCategories.includes(category) ? "!hidden" : ""
          }`}
        >
          {renderComponentLinks(components)}
        </div>
      </React.Fragment>
    ));

  return (
    <aside
      className={`
				mt-[3px]
    md:mt-[43px] lg:mt-[3px] pb-20 bg-white sm:max-w-[230px] sm:min-w-[230px]
    absolute left-0 z-50 lg:static lg:z-auto
    transform transition-transform duration-300 ease-in-out
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    flex flex-col overflow-auto h-full pt-4
  `}
    >
      {/* 🚀 Static Links */}
      <strong className="px-4">Start Here</strong>
      {["GettingStarted", "ComponentStatus"].map((page) => (
        <NavLink
          key={page}
          to={`/docs/${createLinkPage(page)}`}
          onClick={toggleSidebar}
          className={({ isActive }) =>
            isActive
              ? "bg-monochromes-grey_xlight pl-7 py-1"
              : "pl-7 py-1 hover:bg-monochromes-grey_xlight"
          }
        >
          {formatComponentName(page)}
        </NavLink>
      ))}

      {/* 📂 Dynamic Categories */}
      {renderCategorySection()}
    </aside>
  );
};

export default Sidebar;
