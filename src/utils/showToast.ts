import { addToast, removeToast } from "../redux/slices/toastSlice";
import { AppDispatch } from "../redux/store";

const showToast = (
  dispatch: AppDispatch,
  status: string,
  title: string,
  description?: string
) => {
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

export default showToast;
