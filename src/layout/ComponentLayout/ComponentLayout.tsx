import React, { ReactNode } from "react";

interface ComponentLayoutProps {
  title: string;
  category: string;
  description: string;
  children: ReactNode;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({
  title,
  category,
  description,
  children,
}) => {
  return (
    <>
      <section className="msc-layout-container">
        <h1 className="font-bold text-3xl mb-3">
          <small className="text-sm text-primary-blue">{category}</small> <br />
          {title}
        </h1>
        <p className="mb-4">{description}</p>
        {children}
      </section>
    </>
  );
};

export default ComponentLayout;
