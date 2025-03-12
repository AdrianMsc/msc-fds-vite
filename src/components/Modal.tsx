import { ReactElement, useEffect } from "react";
import { useForm, FormProvider, useFormState } from "react-hook-form";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateComponent } from "../api/updateComponent";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addComponent } from "../redux/slices/componentsSlice";

interface Props {
  triggerModal: string;
  toggleModal: () => void;
  title: string;
  body: ReactElement;
  buttonOne: string;
  buttonTwo: string;
  defaultValues?: any;
}

const Modal = ({
  triggerModal,
  toggleModal,
  title,
  body,
  buttonOne,
  buttonTwo,
  defaultValues,
}: Props) => {
  const methods = useForm();
  const { errors } = useFormState({ control: methods.control });
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues);
    }
  }, [defaultValues, methods]);

  const onSubmit = async (data: any) => {
    if (Object.keys(errors).length === 0) {
      toggleModal();
      if (defaultValues) {
        const response = await updateComponent(data);
        console.log(response);
      } else {
        const response = await dispatch(addComponent(data)).unwrap();
        console.log(response);
        methods.reset();
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={`msc-modal-bg ${triggerModal}`}>
        <div className="msc-modal">
          <div className="msc-modal-header">
            <h4 className="msc-modal-title">{title}</h4>
            <button id="modalClsBtn" onClick={toggleModal}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="msc-modal-body pb-4 !w-fit">{body}</div>
            <div className="msc-modal-footer">
              <button
                type="submit"
                className="msc-btn msc-btn-blue-solid w-full"
              >
                {buttonOne}
              </button>
              <button
                id="modalClsBtn"
                onClick={() => {
                  methods.reset();
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
    </FormProvider>
  );
};

export default Modal;
