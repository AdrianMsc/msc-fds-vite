import React from "react";
import { Link } from "react-router-dom";
import componentStatusData, {
  Category,
  Component,
} from "../constants/components.ts";
import formatComponentName from "../utils/formatComponentName.ts";

const Sidebar = () => {
  return (
    <aside
      className={`p-5 bg-white sm:max-w-[200px] sm:min-w-[200px] sm:flex flex-col gap-1 overflow-auto hidden`}
    >
      <strong>Start Here</strong>
      <Link to="/docs" className="ml-5">
        Getting Started
      </Link>
      <Link to="/docs/ComponentStatus" className="ml-5">
        Component Status
      </Link>
      <strong className="text-primary-blue">Components</strong>
      {componentStatusData.map((item: Category, idx: number) => (
        <React.Fragment key={idx}>
          <strong>{item.category}</strong>
          {item.components.map((comp: Component, idx: number) => (
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
