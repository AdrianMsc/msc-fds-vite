import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import formatComponentName from "../utils/formatComponentName";
import SidebarContext from "../context/SidebarCtx";
import { ICategoryApi } from "../interfaces/component.interface";
import MscMiniLoading from "../components/MscMiniLoading/MscMiniLoading";
import { createLinkPage } from "../utils/createLinkPage";
import chevron from "../assets/chevron-down.svg";
import { getComponentsApi } from "../api/getComponents";

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
      } catch (error) {
        console.error("Error fetching components:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComponents();
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
          state: {
            id: component.id,
            title: component.name,
            category: component.category,
            description: component.description,
            statuses: component.statuses,
          },
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
        className={({ isActive, isPending }) =>
          `ml-5 ${
            isActive
              ? "font-bold text-primary-blue"
              : isPending
              ? "pending"
              : ""
          }`
        }
      >
        Getting Started
      </NavLink>
      <NavLink
        to={`/docs/${createLinkPage("ComponentStatus")}`}
        className={({ isActive, isPending }) =>
          `ml-5 ${
            isActive
              ? "font-bold text-primary-blue"
              : isPending
              ? "pending"
              : ""
          }`
        }
      >
        Component Status
      </NavLink>
      <strong className="text-primary-blue flex items-center">
        Categories
        {isLoading ? <MscMiniLoading /> : ""}
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
                className={({ isActive, isPending }) =>
                  `pl-5 hover:rounded hover:font-semibold transition-all ${
                    isActive
                      ? "font-bold text-primary-blue"
                      : isPending
                      ? "pending"
                      : ""
                  }`
                }
                to={`/docs/${createLinkPage(comp.name)}`}
                onClick={(event) => {
                  event.preventDefault();
                  handleDataSend(
                    `/docs/${createLinkPage(comp.name)}`,
                    comp.name
                  );
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
