import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faThLarge,
  faShapes,
  faFileCode,
  faLayerGroup,
  faPlus,
  faMinus,
  faBolt,
  faClipboardList,
  faLightbulb,
  faColumns,
  faCompass,
  faWindowRestore,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

import SidebarContext from "../context/SidebarCtx";
import formatComponentName from "../utils/formatComponentName";
import { routesIndex } from "../router/routeIndex";
import { RootState } from "../redux/store";
import { ICategoryApi, IComponentApi } from "../interfaces/component.interface";
import { createLinkPage } from "../utils/createLinkPage";
import { getNavLinkTo } from "../utils/getNavLinkTo";
import { setCurrentComponent } from "../redux/slices/currentComponentSlice";
import SkeletonMenu from "./SkeletonMenu";

const SidebarV2: React.FC = () => {
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
    if (componentsApiData) {
      setOpenCategories([
        "Start Here",
        "Components",
        "Interaction Units",
        "View Modules",
        "Foundations",
        "Layout",
        ...componentsApiData.map((c) => c.category),
      ]);
    }
  }, [componentsApiData]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const renderLink = (
    name: string,
    navToPath: string,
    comp?: IComponentApi
  ) => (
    <NavLink
      to={navToPath}
      onClick={(e) => {
        toggleSidebar();
        if (comp) dispatch(setCurrentComponent(comp));
      }}
      className={({ isActive }) =>
        `block py-1 text-sm transition-colors ${
          isActive
            ? "text-black font-semibold"
            : "text-gray-500 hover:text-black"
        }`
      }
    >
      {formatComponentName(name)}
    </NavLink>
  );

  const renderComponentItem = (comp: IComponentApi) => {
    const formattedName = createLinkPage(comp.name);
    const routeExists = routesIndex[1]?.children?.some(
      (route) => route.path === formattedName
    );
    const navTo = routeExists
      ? `/docs/${formattedName}`
      : `/docs/WipComponent/${formattedName}`;

    if (!isAuthenticated && navTo.includes("/docs/WipComponent/")) {
      return null;
    }

    return (
      <div key={comp.id} className="mb-2 last:mb-0">
        {renderLink(comp.name, getNavLinkTo(comp), comp)}
      </div>
    );
  };

  const SidebarGroup = ({
    title,
    icon,
    children,
    lineStyle = "solid",
    groupId,
    indent = false,
  }: {
    title: string;
    icon?: any;
    children: React.ReactNode;
    lineStyle?: "solid" | "dotted";
    groupId: string;
    indent?: boolean;
  }) => {
    const isOpen = openCategories.includes(groupId);

    return (
      <div className={`mb-2 ${indent ? "ml-0" : ""}`}>
        <div
          className="flex items-center gap-1 cursor-pointer group select-none pr-2"
          onClick={() => toggleCategory(groupId)}
        >
          {icon && (
            <div className="w-5 flex justify-center text-gray-400 group-hover:text-black transition-colors">
              <FontAwesomeIcon icon={icon} className="text-md" />
            </div>
          )}
          <h3 className="font-bold text-gray-900 text-[15px] flex-1">{title}</h3>
          <div className="text-gray-400">
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size="sm" />
          </div>
        </div>
        
        <div className={`relative ${isOpen ? "" : "hidden"}`}>
          <div
            className={`absolute left-[9px] top-0 bottom-2 border-l ${
              lineStyle === "dotted" ? "border-dotted border-l-2" : "border-solid"
            } border-gray-300`}
          ></div>
          
          <div className="pl-6">{children}</div>
        </div>
      </div>
    );
  };

  // Icon Mapping
  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case "Foundations":
        return faThLarge;
      case "Interaction Units":
        return faShapes;
      case "View Modules":
        return faFileCode;
      case "Components": 
        return faCog;
      case "Action":
        return faBolt;
      case "Form":
        return faClipboardList;
      case "Indicator":
        return faLightbulb;
      case "Layout":
        return faColumns;
      case "Navigation":
        return faCompass;
      case "Overlay":
        return faWindowRestore;
      case "Collection":
        return faListUl;
      default:
        return faLayerGroup;
    }
  };

  // Define categories that belong under "Components"
  const COMPONENT_SUB_CATEGORIES = [
    "Foundations",
    "Action",
    "Form",
    "Indicator",
    "Layout",
    "Navigation",
    "Overlay",
    "Collection",
  ];

  const TOP_LEVEL_ORDER = ["Interaction Units", "View Modules"];

  // Filtering Logic
  const componentSubgroups = categories?.filter((c) =>
    COMPONENT_SUB_CATEGORIES.some(
      (sub) => sub.toLowerCase() === c.category.toLowerCase()
    )
  );

  const getTopLevelGroup = (name: string) => {
    const found = categories?.find((c) => c.category.toLowerCase() === name.toLowerCase());
    return found || { category: name, components: [] };
  };

  const interactionUnitsGroup = getTopLevelGroup("Interaction Units");
  const viewModulesGroup = getTopLevelGroup("View Modules");

  const otherGroups = categories?.filter((c) => {
    const isComponentSub = COMPONENT_SUB_CATEGORIES.some(
        (sub) => sub.toLowerCase() === c.category.toLowerCase()
    );
    const isExplicitTop = TOP_LEVEL_ORDER.some(
        (top) => top.toLowerCase() === c.category.toLowerCase()
    );
    return !isComponentSub && !isExplicitTop;
  });

  const hasCategories = (categories?.length ?? 0) > 0;

  return (
    <aside
      className={`
        mt-[3px] md:mt-[43px] lg:mt-[3px] pb-10 bg-white sm:max-w-[260px] sm:min-w-[260px] w-[260px]
        absolute left-0 z-50 lg:static lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }
        flex flex-col overflow-y-auto h-full pl-5 pt-8 text-base border-r border-gray-100/50 shadow-sm
      pr-5
        `}
    >
      {/* 🚀 Start Here */}
      <SidebarGroup
        title="Start Here"
        icon={faHome}
        groupId="Start Here"
        lineStyle="solid"
      >
        {["GettingStarted", "ComponentStatus"].map((page) => (
          <div key={page} className="mb-2 last:mb-0">
            {renderLink(page, `/docs/${createLinkPage(page)}`)}
          </div>
        ))}
      </SidebarGroup>

      {!hasCategories && <SkeletonMenu />}

      {/* ⚙️ Components Group (Parent) */}
      <SidebarGroup
          title="Components"
          icon={faCog}
          groupId="Components"
          lineStyle="solid"
        >
        {componentSubgroups && componentSubgroups.length > 0 ? (
          componentSubgroups.map(({ category, components }) => (
            <SidebarGroup
              key={category}
              title={category}
              icon={getCategoryIcon(category)}
              groupId={category}
              lineStyle="dotted"
              indent
            >
              {components
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((comp) => renderComponentItem(comp))}
            </SidebarGroup>
          ))
        ) : (
            // Empty placeholder if needed, or null
            null
        )}
      </SidebarGroup> 

      {/* 🔷 Interaction Units */}
      <SidebarGroup
        title={interactionUnitsGroup.category}
        icon={getCategoryIcon(interactionUnitsGroup.category)}
        groupId={interactionUnitsGroup.category}
        lineStyle="solid"
      >
        {interactionUnitsGroup.components.length > 0 ? (
           interactionUnitsGroup.components
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((comp) => renderComponentItem(comp))
        ) : (
             <div className="text-gray-400 text-sm mb-1">Not Found</div>
        )}
      </SidebarGroup>

      {/* 📄 View Modules */}
      <SidebarGroup
        title={viewModulesGroup.category}
        icon={getCategoryIcon(viewModulesGroup.category)}
        groupId={viewModulesGroup.category}
        lineStyle="solid"
      >
        {viewModulesGroup.components.length > 0 ? (
           viewModulesGroup.components
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((comp) => renderComponentItem(comp))
        ) : (
             <div className="text-gray-400 text-sm mb-1">Not Found</div>
        )}
      </SidebarGroup>

      {/* 📂 Other Groups */}
      {otherGroups?.map(({ category, components }, idx) => (
        <SidebarGroup
          key={idx}
          title={category}
          icon={getCategoryIcon(category)}
          groupId={category}
          lineStyle="solid"
        >
          {components
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((comp) => renderComponentItem(comp))}
        </SidebarGroup>
      ))}

      {/* Separator */}
      <div className="w-10 border-t border-gray-200 mt-2 mb-6 ml-2"></div>

      {/* Footer Links */}
      <div className="flex flex-col gap-3 pl-2 pb-10 text-[15px]">
        <a
          href="http://localhost:6006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 font-medium hover:text-black hover:underline"
        >
          Storybook
        </a>
        <NavLink
          to="/docs/ChangeLog"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `font-medium hover:underline ${
              isActive ? "text-black" : "text-gray-900"
            }`
          }
        >
          Release Notes
        </NavLink>
        <NavLink
          to="/docs/ComponentTester"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `font-medium hover:underline ${
              isActive ? "text-black" : "text-gray-900"
            }`
          }
        >
          Playground
        </NavLink>
        <span className="text-gray-900 font-medium cursor-not-allowed opacity-75">
          Team
        </span>
        <span className="text-gray-900 font-medium cursor-not-allowed opacity-75">
          Contact
        </span>
      </div>
    </aside>
  );
};

export default SidebarV2;
