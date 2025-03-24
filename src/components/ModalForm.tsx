import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  updateField,
  resetForm,
  IFormState,
  setComponentData,
} from "../redux/slices/formSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  IComponentApi,
  IComponentForm,
} from "../interfaces/component.interface";
import { addComponent, editComponent } from "../redux/slices/componentsSlice";

interface ModalFormProps {
  triggerModal: string;
  toggleModal: () => void;
  title: string;
  buttonOne: string;
  buttonTwo: string;
  selectedRecord: IComponentApi;
}

const ModalForm: React.FC<ModalFormProps> = ({
  triggerModal,
  toggleModal,
  title,
  buttonOne,
  buttonTwo = "Cancel",
  // selectedRecord,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const formState = useSelector((state: RootState) => state.form);

  // useEffect(() => {
  //   if (selectedRecord.name === "") {
  //     dispatch(resetForm());
  //   } else {
  //     console.log(selectedRecord);
  //     const formattedData: any = {
  //       id: selectedRecord.id,
  //       name: selectedRecord.name,
  //       category: selectedRecord.category,
  //       comment: selectedRecord.comment,
  //       cdn: selectedRecord.statuses[0].cdn,
  //       figma: selectedRecord.statuses[0].figma,
  //       guidelines: selectedRecord.statuses[0].guidelines,
  //       storybook: selectedRecord.statuses[0].storybook,
  //     };
  //     console.log(formattedData);
  //     dispatch(setComponentData(formattedData));
  //   }
  // }, [selectedRecord]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      updateField({
        field: e.target.name as keyof IFormState,
        value: e.target.value,
      })
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formState.id == "") {
      const componentCasted = {
        ...formState,
        id: Number(formState.id),
      };
      dispatch(addComponent(componentCasted));
    } else {
      const componentFormatted = {
        id: Number(formState.id),
        name: formState.name,
        category: formState.category,
        comment: formState.comment,
        statuses: [
          {
            guidelines: formState.guidelines,
            figma: formState.figma,
            storybook: formState.storybook,
            cdn: formState.cdn,
          },
        ],
      };
      console.log("Formatted Component", componentFormatted);
      dispatch(editComponent(componentFormatted));
    }
    toggleModal();
    dispatch(resetForm());
  };

  return (
    <div className={`msc-modal-bg ${triggerModal}`}>
      <div className="msc-modal">
        <div className="msc-modal-header">
          <h4 className="msc-modal-title">{title}</h4>
          <button id="modalClsBtn" onClick={toggleModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="msc-modal-body pb-4 !w-fit">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 w-[600px]">
                <div className="flex flex-col gap-1 !w-[50%]">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <input
                    name="id"
                    type="text"
                    className="hidden"
                    value={formState.id}
                    onChange={handleChange}
                  />
                  <input
                    name="name"
                    type="text"
                    className="msc-input !w-full"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1 !w-[50%]">
                  <label htmlFor="category" className="font-bold">
                    Category
                  </label>
                  <select
                    name="category"
                    className="msc-input !p-2"
                    value={formState.category}
                    onChange={handleChange}
                  >
                    <option value="">-- Select a category --</option>
                    <option value="Foundations">Foundations</option>
                    <option value="Action">Action</option>
                    <option value="Form">Form</option>
                    <option value="Indicator">Indicator</option>
                    <option value="Layout">Layout</option>
                    <option value="Navigation">Navigation</option>
                    <option value="Overlay">Overlay</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 w-[600px]">
                <div className="flex flex-col gap-1 !w-[50%]">
                  <label htmlFor="guidelines" className="font-bold">
                    Guidelines
                  </label>
                  <select
                    name="guidelines"
                    className="msc-input !p-2"
                    value={formState.guidelines}
                    onChange={handleChange}
                  >
                    <option value="🧱">🧱 Todo</option>
                    <option value="🔨">🔨 WIP</option>
                    <option value="🔭">🔭 Alpha</option>
                    <option value="🧪">🧪 Beta</option>
                    <option value="✅">✅ Live</option>
                    <option value="🚫">🚫 Not Applicable</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 !w-[50%]">
                  <label htmlFor="figma" className="font-bold">
                    Figma
                  </label>
                  <select
                    name="figma"
                    className="msc-input !p-2"
                    value={formState.figma}
                    onChange={handleChange}
                  >
                    <option value="🧱">🧱 Todo</option>
                    <option value="🔨">🔨 WIP</option>
                    <option value="🔭">🔭 Alpha</option>
                    <option value="🧪">🧪 Beta</option>
                    <option value="✅">✅ Live</option>
                    <option value="🚫">🚫 Not Applicable</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 w-[600px]">
                <div className="flex flex-col gap-1 !w-[50%]">
                  <label htmlFor="storybook" className="font-bold">
                    Storybook
                  </label>
                  <select
                    name="storybook"
                    className="msc-input !p-2"
                    value={formState.storybook}
                    onChange={handleChange}
                  >
                    <option value="🧱">🧱 Todo</option>
                    <option value="🔨">🔨 WIP</option>
                    <option value="🔭">🔭 Alpha</option>
                    <option value="🧪">🧪 Beta</option>
                    <option value="✅">✅ Live</option>
                    <option value="🚫">🚫 Not Applicable</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1 !w-[50%]">
                  <label htmlFor="cdn" className="font-bold">
                    CDN
                  </label>
                  <select
                    name="cdn"
                    className="msc-input !p-2"
                    value={formState.cdn}
                    onChange={handleChange}
                  >
                    <option value="🧱">🧱 Todo</option>
                    <option value="🔨">🔨 WIP</option>
                    <option value="🔭">🔭 Alpha</option>
                    <option value="🧪">🧪 Beta</option>
                    <option value="✅">✅ Live</option>
                    <option value="🚫">🚫 Not Applicable</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="comment" className="font-bold">
                  Comments
                </label>
                <textarea
                  name="comment"
                  className="msc-input !p-2"
                  value={formState.comment}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="msc-modal-footer">
            <button type="submit" className="msc-btn msc-btn-blue-solid w-full">
              {buttonOne}
            </button>
            <button
              type="reset"
              onClick={() => {
                dispatch(resetForm());
                toggleModal();
              }}
              className="msc-btn msc-btn-blue-outline w-full"
            >
              {buttonTwo}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
