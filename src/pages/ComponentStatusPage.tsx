import React, { useEffect, useRef, useState } from "react";
import SkeletonTable from "../layout/SkeletonTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FormComponent, Modal } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { IComponentApi } from "../interfaces/component.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { removeComponent } from "../redux/slices/componentsSlice";
import { getComponentsCountApi } from "../api/getComponentCount";

const ComponentStatus: React.FC = () => {
  const [triggerModal, setTriggerModal] = useState("hidden");
  const { isAuthenticated } = useAuth0();
  const [selectedRecord, setSelectedRecord] = useState<IComponentApi>();
  const [modalText, setModalText] = useState({ buttonOne: "", title: "" });
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [componentCount, setComponentCount] = useState(0);
  const firstButtonRef = useRef(null);
  const componentsApiData = useSelector((state: RootState) => state.components);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getCount();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSecondButton(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (firstButtonRef.current) {
      observer.observe(firstButtonRef.current);
    }

    return () => {
      if (firstButtonRef.current) {
        observer.unobserve(firstButtonRef.current);
      }
    };
  }, []);

  const getCount = async () => {
    try {
      const data = await getComponentsCountApi();
      const count = data.count;
      setComponentCount(count);
      console.log("Count:", count);
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  };

  const handleDelete = async (component: IComponentApi) => {
    try {
      const response = await dispatch(removeComponent(component)).unwrap();
      console.log("Component deleted successfully:", response);
    } catch (error) {
      console.error("Failed to delete component:", error);
    }
  };

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  const handleEdit = (component: IComponentApi) => {
    const formFormat: any = {
      id: component.id,
      name: component.name,
      category: component.category,
      comment: component.comment,
      cdn: component.statuses[0].cdn,
      figma: component.statuses[0].figma,
      guidelines: component.statuses[0].guidelines,
      storybook: component.statuses[0].storybook,
    };
    setSelectedRecord(formFormat);
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
        Components count: <strong>{componentCount}</strong>
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
            title="Add component"
            ref={firstButtonRef}
            className="msc-btn msc-btn-blue-solid msc-btn-icon ml-0 mt-5"
            onClick={() => {
              setModalText({ buttonOne: "Add", title: "Add new component" });
              toggleModal();
            }}
          >
            Add component
            <FontAwesomeIcon icon={faPlus} className="ml-2 items-center" />
          </button>

          {showSecondButton && (
            <button
              title="Add component"
              className="msc-btn msc-btn-blue-solid msc-btn-icon w-fit min-w-fit p-3 fixed bottom-5 right-5"
              onClick={() => {
                setModalText({ buttonOne: "Add", title: "Add new component" });
                toggleModal();
              }}
            >
              <FontAwesomeIcon icon={faPlus} className="items-center" />
            </button>
          )}
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

      {!componentsApiData ? (
        <SkeletonTable />
      ) : (
        componentsApiData?.map((category) => (
          <React.Fragment key={category.category}>
            <h2 className="font-bold text-2xl mt-5 sticky -top-4 bg-off_white">
              {category.category}
            </h2>

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
                  {category.components?.map((component, idx) => (
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
                            <button title="Edit component">
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
                            <button
                              onClick={() => handleDelete(component)}
                              title="Delete component"
                            >
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
