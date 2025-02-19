import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import formatComponentName from "../utils/formatComponentName";
import SidebarContext from "../context/SidebarCtx";
import { useQuery } from "@tanstack/react-query";
import { ICategoryApi } from "../interfaces/component.interface";
import { baseUrl } from "../api";
import MscMiniLoading from "../components/MscMiniLoading/MscMiniLoading";
import { createLinkPage } from "../utils/createLinkPage";
import chevron from "../assets/chevron-down.svg";

interface NavigationState {
  title?: string;
  category?: string;
  description?: string;
  statuses?: [];
}

const Sidebar: React.FC = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Sidebar must be used within a SidebarProvider");
  }

  const { isSidebarOpen } = context;

  const { data, isLoading } = useQuery<ICategoryApi[]>({
    queryKey: ["components"],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/components`);
      return await response.json();
    },
  });

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const navigate = useNavigate();

  const handleDataSend = (
    path: string,
    state: NavigationState = {
      title: "",
      category: "",
      description: "",
      statuses: [],
    }
  ) => {
    navigate(path, {
      state: state,
    });
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
      {data?.map((item: any, idx: number) => (
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
            {item.components.map((comp: any, idx: number) => (
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
                  handleDataSend(`/docs/${createLinkPage(comp.name)}`, {
                    title: comp.name,
                    category: comp.category,
                    description: comp.description,
                    statuses: comp.statuses,
                  });
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
