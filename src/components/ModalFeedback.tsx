import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { addToast, removeToast } from "../redux/slices/toastSlice";

interface ModalFeedbackProps {
  showModal: string;
  toggleModal: () => void;
}

const ModalFeedback: React.FC<ModalFeedbackProps> = ({
  showModal,
  toggleModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const formState = useSelector((state: RootState) => state.form);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (showModal !== "hidden") {
      setIsVisible(true); // Show modal
      setTimeout(() => setFadeIn(true), 50); // Apply fade-in
    }
  }, [showModal]);

  const showToast = (status: string, title: string, description?: string) => {
    const id = Date.now().toString();
    dispatch(
      addToast({
        id,
        status,
        title,
        description,
      })
    );

    setTimeout(() => {
      dispatch(removeToast(id));
    }, 4000);
  };

  const handleCancel = () => {
    setFadeIn(false); // Apply fade-out effect
    setTimeout(() => {
      setIsVisible(false); // Hide after fade-out completes
      toggleModal();
    }, 300);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    showToast("success", "Feedback sent", "Thanks for your comments!");
    setFadeIn(false); // Apply fade-out effect
    setTimeout(() => {
      setIsVisible(false); // Hide after fade-out completes
      toggleModal();
    }, 300);
  };

  return isVisible ? (
    <div
      className={`msc-modal-bg !fixed ${showModal} !bg-[#00000087] transition-opacity duration-300 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="msc-modal">
        <div className="msc-modal-header">
          <h4 className="msc-modal-title">Share your feedback 📬</h4>
          <button onClick={handleCancel}>
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
                {/* <div className="flex flex-col gap-1 !w-[50%]">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="msc-input !w-full"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div> */}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="comment" className="font-bold">
                  Comments
                </label>
                <textarea
                  name="comment"
                  className="msc-input !p-2 h-[150px]"
                  value={formState.comment}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="msc-modal-footer">
            <button type="submit" className="msc-btn msc-btn-blue-solid w-full">
              Send
            </button>
            <button
              type="reset"
              onClick={handleCancel}
              className="msc-btn msc-btn-blue-outline w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default ModalFeedback;
