import componentStatusData from "@/constants/components";
import Link from "next/link";
import React, { useContext } from "react";
import formatComponentName from "../utils/formatComponentName";
import { SidebarContext } from "@/context/SidebarCtx";

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  console.log(isSidebarOpen);

  return (
    <aside
      className={`${
        isSidebarOpen ? "flex" : "hidden"
      } p-5 bg-white sm:max-w-[200px] sm:min-w-[200px] sm:flex flex-col gap-1 overflow-auto hidden`}
    >
      <strong>Start Here</strong>
      <Link href="/docs" className="ml-5">
        Getting Started
      </Link>
      <Link href="/docs/ComponentStatus" className="ml-5">
        Component Status
      </Link>
      <strong className="text-primary-blue">Components</strong>
      {componentStatusData.map((item, idx) => (
        <React.Fragment key={idx}>
          <strong>{item.category}</strong>
          {item.components.map((comp, idx) => (
            <Link key={idx} className="ml-5" href={`/docs/${comp.name}`}>
              {formatComponentName(comp.name)}
            </Link>
          ))}
        </React.Fragment>
      ))}
    </aside>
  );
};

export default Sidebar;
