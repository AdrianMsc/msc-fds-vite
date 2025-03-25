import React, { ReactNode } from 'react';

interface ModalProps {
  triggerModal: string;
  toggleModal: () => void;
  title: string;
  body: ReactNode;
  buttonOne: string;
  buttonTwo: string;
}

const Modal: React.FC<ModalProps> = ({
  triggerModal,
  toggleModal,
  title,
  body,
  buttonOne,
  buttonTwo,
}) => {
  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${triggerModal}`}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{title}</h3>
          <div className="mt-2 px-7 py-3">
            {body}
          </div>
          <div className="flex justify-end gap-2 px-4 py-3">
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
            >
              {buttonTwo}
            </button>
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              {buttonOne}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
