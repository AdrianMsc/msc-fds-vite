import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import formatComponentName from "../utils/formatComponentName";
import SidebarContext from "../context/SidebarCtx";
import { ICategoryApi } from "../interfaces/component.interface";
import MscMiniLoading from "../components/MscMiniLoading/MscMiniLoading";
import { createLinkPage } from "../utils/createLinkPage";
import chevron from "../assets/chevron-down.svg";
import { getComponentsApi } from "../api/getComponents";
import { routesIndex } from "../router/routeIndex";

const Sidebar: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<ICategoryApi[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const context = useContext(SidebarContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("Sidebar must be used within a SidebarProvider");
  }

  const { isSidebarOpen } = context;

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const data = await getComponentsApi();
        setCategories(data);
        sessionStorage.setItem("components", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching components:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const storedData = sessionStorage.getItem("components");
    if (storedData) {
      setCategories(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      fetchComponents();
    }
  }, []);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleDataSend = (path: string, componentName: string) => {
    const storedData = sessionStorage.getItem("components");
    if (storedData) {
      const components = JSON.parse(storedData);
      const component = components
        .flatMap((category: ICategoryApi) => category.components)
        .find((comp: any) => comp.name === componentName);

      if (component) {
        navigate(path, {
          state: component,
        });
      }
    }
  };

  return (
    <aside
      className={`p-5 bg-white sm:max-w-[230px] sm:min-w-[230px] sm:flex flex-col gap-1 overflow-auto ${
        isSidebarOpen ? "flex absolute h-lvh" : "hidden"
      }`}
    >
      <strong>Start Here</strong>
      <NavLink
        to={`/docs/${createLinkPage("GettingStarted")}`}
        className={({ isActive }) =>
          isActive ? "font-bold text-primary-blue ml-5" : "ml-5"
        }
      >
        Getting Started
      </NavLink>
      <NavLink
        to={`/docs/${createLinkPage("ComponentStatus")}`}
        className={({ isActive }) =>
          isActive ? "font-bold text-primary-blue ml-5" : "ml-5"
        }
      >
        Component Status
      </NavLink>
      <strong className="text-primary-blue flex items-center">
        Categories {isLoading && <MscMiniLoading />}
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
              openCategories.includes(item.category) ? "hidden" : ""
            }`}
          >
            {item.components.map((comp, idx) => (
              <NavLink
                key={idx}
                className={({ isActive }) =>
                  isActive
                    ? "pl-5 font-bold text-primary-blue hover:rounded hover:font-semibold transition-all"
                    : "pl-5 hover:rounded hover:font-semibold transition-all"
                }
                to={`/docs/${createLinkPage(comp.name)}`}
                onClick={(event) => {
                  event.preventDefault();
                  if (
                    routesIndex[1].children?.some(
                      (route) => route.path === comp.name
                    )
                  ) {
                    handleDataSend(
                      `/docs/${createLinkPage(comp.name)}`,
                      comp.name
                    );
                  } else {
                    handleDataSend(
                      `/docs/${createLinkPage("WipComponent")}`,
                      comp.name
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
