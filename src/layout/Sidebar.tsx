import React, { useContext } from "react";
import { Link } from "react-router-dom";
import formatComponentName from "../utils/formatComponentName";
import SidebarContext from "../context/SidebarCtx";
import { useQuery } from "@tanstack/react-query";
import { ICategoryApi } from "../interfaces/component.interface";
import { baseUrl } from "../api";

const Sidebar: React.FC = () => {
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

  return (
    <aside
      className={`p-5 bg-white sm:max-w-[200px] sm:min-w-[200px] sm:flex flex-col gap-1 overflow-auto ${
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
      <strong className="text-primary-blue">Components</strong>
      {data?.map((item: any, idx: number) => (
        <React.Fragment key={idx}>
          <strong>{item.category}</strong>
          {item.components.map((comp: any, idx: number) => (
            <Link key={idx} className="ml-5" to={`/docs/${comp.name}`}>
              {formatComponentName(comp.name)}
            </Link>
          ))}
        </React.Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
