import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import formatComponentName from "../utils/formatComponentName";
import SidebarContext from "../context/SidebarCtx";
import { useQuery } from "@tanstack/react-query";
import { ICategoryApi } from "../interfaces/component.interface";
import { baseUrl } from "../api";
import MscMiniLoading from "../components/MscMiniLoading/MscMiniLoading";
import { createLinkPage } from "../utils/createLinkPage";
import chevron from "../assets/chevron-down.svg";

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

  return (
    <aside
      className={`p-5 bg-white sm:max-w-[230px] sm:min-w-[230px] sm:flex flex-col gap-1 overflow-auto ${
        isSidebarOpen ? "flex absolute h-lvh" : "hidden"
      }`}
    >
      <strong>Start Here</strong>
      <Link to="/docs" className="ml-5">
        Getting Started
      </Link>
      <Link to="/docs/ComponentStatus" className="ml-5">
        Component Status
      </Link>
      <strong className="text-primary-blue flex items-center">
        Categories
        {isLoading ? <MscMiniLoading /> : ""}
      </strong>
      {data?.map((item: any, idx: number) => (
        <React.Fragment key={idx}>
          <strong
            className="flex"
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
              <Link
                key={idx}
                className="ml-5"
                to={`/docs/${createLinkPage(comp.name)}`}
              >
                {formatComponentName(comp.name)}
              </Link>
            ))}
          </div>
        </React.Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
