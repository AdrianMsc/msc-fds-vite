import React from "react";
import componentStatusData from "../constants/components";

const ComponentStatus = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl">
        <small className="text-sm text-primary-blue">Getting Started</small>
        <br />
        Component Status
      </h1>

      <small>
        Last Update:<strong>10-05-24</strong>
      </small>
      <br />
      <small className="text-sm">
        Components count: <strong>30</strong>
      </small>

      <ul className="flex mt-5">
        <li className="mr-3">🧱 Todo</li>
        <li className="mr-3">🛠 WIP</li>
        <li className="mr-3">🔭 Alpha</li>
        <li className="mr-3">🧪 Beta</li>
        <li className="mr-3">✅ Live</li>
        <li className="mr-3">
          <b className="font-bold">N/A</b> Not Applicable
        </li>
      </ul>

      {componentStatusData.map((section) => (
        <React.Fragment key={section.category}>
          <h2 className="font-bold text-2xl mt-5">{section.category}</h2>

          <div className=" overflow-x-auto mt-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 w-[20%]">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-6 py-3 w-[15%]">
                    Guidelines
                  </th>
                  <th scope="col" className="px-6 py-3 w-[15%]">
                    Figma
                  </th>
                  <th scope="col" className="px-6 py-3 w-[15%]">
                    Storybook
                  </th>
                  <th scope="col" className="px-6 py-3 w-[15%]">
                    CDN
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.components?.map((component, idx) => (
                  <tr
                    key={idx}
                    className={`${idx % 2 == 0 ? "bg-white" : "bg-slate-100"}`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {component.name}
                    </th>
                    {component.statuses.map(({ status }, idx) => (
                      <td key={idx} className="px-6 py-4">
                        {status}
                      </td>
                    ))}
                    <td className="px-6 py-4">{component.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ComponentStatus;
