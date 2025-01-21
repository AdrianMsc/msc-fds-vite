import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonTable from "../layout/SkeletonTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FormAdd, Modal } from "../components";

interface Component {
  name: string;
  statuses: { status: string }[];
  comment: string;
}

interface CategoryData {
  category: string;
  components: Component[];
}

const ComponentStatus: React.FC = () => {
  const [triggerModal, setTriggerModal] = useState("hidden");

  const { data, isLoading } = useQuery<CategoryData[]>({
    queryKey: ["components"],
    queryFn: async () => {
      const response = await fetch(
        "https://msc-component-status-ws.onrender.com/components/"
      );
      return await response.json();
    },
  });

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
    console.log(triggerModal);
  };

  return (
    <div className="">
      <h1 className="font-bold text-3xl">
        <small className="text-sm text-primary-blue">Getting Started</small>
        <br />
        Component Status
      </h1>

      <small>
        Last Update: <strong>10-05-24</strong>
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

      <button
        className="msc-btn msc-btn-blue-solid msc-btn-icon mt-5 ml-0"
        onClick={toggleModal}
      >
        Add component
        <FontAwesomeIcon icon={faPlus} className="ml-2 items-center" />
      </button>

      <Modal
        triggerModal={triggerModal}
        toggleModal={toggleModal}
        title="Add new component"
        body={<FormAdd />}
        buttonOne="Add"
        buttonTwo="Cancel"
      />
      <div>
        <h2>Status Page</h2>
      </div>

      {isLoading ? (
        <SkeletonTable />
      ) : (
        data?.map((data) => (
          <React.Fragment key={data.category}>
            <h2 className="font-bold text-2xl mt-5">{data.category}</h2>

            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 bg-gray-50 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3 w-[20%]">
                       
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
                  {data.components?.map((component, idx) => (
                    <tr
                      key={idx + component.name}
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-100"
                      }`}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                      >
                        {component.name}
                      </th>
                      {component.statuses.map(({ status }, statusIdx) => (
                        <td key={statusIdx} className="px-6 py-4 text-center">
                          {status}
                        </td>
                      ))}
                      <td className="px-6 py-4 text-center">
                        {component.comment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default ComponentStatus;
