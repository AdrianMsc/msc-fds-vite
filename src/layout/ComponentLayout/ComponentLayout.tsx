import React, { ReactNode } from "react";
import MscStatusComponentBar from "../../components/MscStatusComponentBar/MscStatusComponentBar";
import { useLocation } from "react-router-dom";

interface ComponentLayoutProps {
  id?: number;
  name: string;
  category: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  statusBar?: boolean;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({
  children,
  className,
  statusBar = true,
}) => {
  const location = useLocation();

  const { id, name, category, description, statuses } = location.state || {};

  console.log(location.state);
  return (
    <>
      <section className={`${className ? className : ""}`}>
        <h1 className="font-bold text-3xl mb-3">
          <small className="text-sm text-primary-blue">{category}</small> <br />
          {name}
        </h1>
        {statusBar ? <MscStatusComponentBar id={id} stats={statuses} /> : ""}
        <p className="mb-4">{description}</p>
        {children}
      </section>
    </>
  );
};

export default ComponentLayout;
