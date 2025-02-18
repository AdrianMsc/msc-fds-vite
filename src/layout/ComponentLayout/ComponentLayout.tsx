import React, { ReactNode } from "react";

interface ComponentLayoutProps {
  title: string;
  category: string;
  description: string;
  children: ReactNode;
  className?: string;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({
  title,
  category,
  description,
  children,
  className,
}) => {
  return (
    <>
      <section className={`${className ? className : ""}`}>
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
