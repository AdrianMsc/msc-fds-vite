import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SkeletonTable from "../layout/SkeletonTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FormComponent, Modal } from "../components";
import { baseUrl } from "../api";
import { useAuth0 } from "@auth0/auth0-react";
import { ICategoryApi, IComponentApi } from "../interfaces/component.interface";
import { deleteComponent } from "../api/deleteComponent";

const ComponentStatus: React.FC = () => {
  const [triggerModal, setTriggerModal] = useState("hidden");
  const { isAuthenticated } = useAuth0();
  const [selectedRecord, setSelectedRecord] = useState<IComponentApi>();
  const [modalText, setModalText] = useState({ buttonOne: "", title: "" });

  const { data, isLoading } = useQuery<ICategoryApi[]>({
    queryKey: ["components"],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/components`);
      return await response.json();
    },
  });

  const handleDelete = async (component: IComponentApi) => {
    const response = await deleteComponent(component);
    console.log(response);
    window.location.reload();
  };

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  const handleEdit = (component: IComponentApi) => {
    setSelectedRecord(component);
    toggleModal();
  };

  return (
    <div className="">
      <h1 className="font-bold text-3xl">
        <small className="text-sm text-primary-blue">Getting Started</small>
        <br />
        Component Status
      </h1>

      <small>
        Last Update: <strong>01-21-25</strong>
      </small>
      <br />
      <small className="text-sm">
        Components count: <strong>23</strong>
      </small>

      <ul className="flex mt-5">
        <li className="mr-3">🧱 Todo</li>
        <li className="mr-3">🛠 WIP</li>
        <li className="mr-3">🔭 Alpha</li>
        <li className="mr-3">🧪 Beta</li>
        <li className="mr-3">✅ Live</li>
        <li className="mr-3">
          <b className="font-bold">🚫</b> Not Applicable
        </li>
      </ul>

      {isAuthenticated && (
        <>
          <button
            className="msc-btn msc-btn-blue-solid msc-btn-icon ml-0 mt-5"
            onClick={() => {
              setModalText({ buttonOne: "Add", title: "Add new component" });
              toggleModal();
            }}
          >
            Add component
            <FontAwesomeIcon icon={faPlus} className="ml-2 items-center" />
          </button>

          <button
            className="msc-btn msc-btn-blue-solid msc-btn-icon w-fit min-w-fit p-3 fixed bottom-5 right-5"
            onClick={() => {
              setModalText({ buttonOne: "Add", title: "Add new component" });
              toggleModal();
            }}
          >
            <FontAwesomeIcon icon={faPlus} className="items-center" />
          </button>
        </>
      )}

      <Modal
        triggerModal={triggerModal}
        toggleModal={toggleModal}
        defaultValues={selectedRecord}
        title={modalText.title}
        body={<FormComponent />}
        buttonOne={modalText.buttonOne}
        buttonTwo="Cancel"
      />

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
                      Component
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
                    <th scope="col" className="px-6 py-3 min-w-[250px]">
                      Comments
                    </th>
                    {isAuthenticated && (
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    )}
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
                      <td className="px-6 py-4 text-center">
                        {component.statuses[0].guidelines}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {component.statuses[0].figma}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {component.statuses[0].storybook}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {component.statuses[0].cdn}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {component.comment}
                      </td>
                      {isAuthenticated && (
                        <td>
                          <div className="flex place-content-around items-center align-middle">
                            <button>
                              <FontAwesomeIcon
                                icon={faPencil}
                                onClick={() => {
                                  setModalText({
                                    buttonOne: "Update",
                                    title: "Update component",
                                  });
                                  handleEdit(component);
                                }}
                              />
                            </button>
                            <button onClick={() => handleDelete(component)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        </td>
                      )}
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
