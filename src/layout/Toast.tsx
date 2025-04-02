import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
  faInfoCircle,
  faWarning,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeToast } from "../redux/slices/toastSlice";
import { useState, useEffect } from "react";

const toastConfig: {
  [key: string]: { icon: any; color: string; border: string };
} = {
  success: {
    icon: faCheckCircle,
    color: "text-green-600",
    border: "border-green-600",
  },
  warning: {
    icon: faWarning,
    color: "text-yellow-500",
    border: "border-yellow-500",
  },
  error: {
    icon: faExclamationCircle,
    color: "text-red-600",
    border: "border-red-600",
  },
  info: {
    icon: faInfoCircle,
    color: "text-blue-400",
    border: "border-blue-400",
  },
};

const Toast: React.FC = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state: RootState) => state.toast.toasts);
  const [fadeOutState, setFadeOutState] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [fadeInState, setFadeInState] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    toasts.forEach((toast) => {
      // Set a timeout to trigger fade-out for each toast after 3 seconds
      setTimeout(() => {
        setFadeOutState((prevState) => ({
          ...prevState,
          [toast.id]: true,
        }));
      }, 3000); // Toast fades out after 3 seconds

      // Set toast to fade-in when it's first displayed
      setFadeInState((prevState) => ({
        ...prevState,
        [toast.id]: true,
      }));
    });
  }, [toasts]);

  const handleClose = (id: string) => {
    dispatch(removeToast(id));
  };

  const getToastConfig = (status: string) =>
    toastConfig[status] || toastConfig.info;

  return (
    <div className="absolute top-0 right-0 p-4 space-y-2 z-50">
      {toasts.map((toast) => {
        const { icon, color, border } = getToastConfig(toast.status);
        const isFadingOut = fadeOutState[toast.id];
        const isFadingIn = fadeInState[toast.id];

        return (
          <div
            key={toast.id}
            className={`sticky flex flex-col items-start p-4 mb-2 bg-white border ${border} rounded-lg shadow-lg h-fit w-[240px] justify-between 
              ${
                isFadingOut
                  ? "opacity-0"
                  : isFadingIn
                  ? "opacity-100"
                  : "opacity-0"
              } transition-opacity duration-500 ease-in-out`}
          >
            <div className="flex flex-row pt-[2px] justify-between">
              <div className="flex flex-row gap-2 w-fit">
                <FontAwesomeIcon icon={icon} className={`${color} mt-[3px]`} />
                <p className="font-semibold">{toast.title}</p>
              </div>
              {/* <button
								onClick={() => handleClose(toast.id)}
								className="bg-slate-400"
							>
								<FontAwesomeIcon icon={faClose} className="text-gray-500 " />
							</button> */}
            </div>
            {toast.description && (
              <p className="text-sm text-gray-500 mt-1">{toast.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
