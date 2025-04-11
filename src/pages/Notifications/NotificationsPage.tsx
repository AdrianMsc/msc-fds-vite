import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../api";
import { IFeedback, setFeedback } from "../../redux/slices/feedbackSlice";
import { useDispatch } from "react-redux";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<IFeedback[] | null>(null);
  const [selectedNotification, setSelectedNotification] =
    useState<IFeedback | null>(null);
  // const messages = useSelector((state: RootState) => state.feedback);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${baseUrl}/inbox`);
        setNotifications(response.data);
        dispatch(setFeedback(response.data));
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  if (notifications === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row -mx-8 md:-mx-15 xl:-mx-20 w-full h-[745px]">
      <div className="flex flex-col min-w-fit bg-slate-50">
        <div className="border-b border-gray-300 text-center pb-4 min-w-[250px] max-w-[300px] ">
          <h1 className="text-nowrap">Inbox 📥</h1>
        </div>
        <div className="flex flex-col w-full h-full overflow-y-scroll">
          {notifications.map((noti) => {
            const isSelected = selectedNotification?.id === noti.id;
            return (
              <button
                key={noti.id}
                onClick={() => setSelectedNotification(noti)}
                className={`text-start min-w-[250px] max-w-[300px] ${
                  isSelected ? "bg-blue-100" : "hover:bg-blue-50"
                }`}
              >
                <div
                  className="flex flex-row gap-2 pl-6 pr-3 py-3 border-b border-r border-l border-gray-300 overflow-hidden"
                  key={noti.id}
                >
                  <div className="flex size-10 min-w-10 rounded-full text-center place-content-center bg-blue-600">
                    <p className="text-xl font-semibold my-auto">
                      {noti.name.charAt(0)}
                    </p>
                  </div>
                  <div className="w-full overflow-hidden">
                    <p className="font-bold text-blue-700">{noti.name}</p>
                    <p className="truncate">{noti.message}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex w-full h-full overflow-y-scroll mt-14 p-4 ">
        <div className="flex flex-col w-full h-full">
          <h3>{selectedNotification?.name}</h3>
          <h5 className="text-gray-500">{selectedNotification?.email}</h5>
          <span className="text-blue-500">{selectedNotification?.status}</span>
          <p className="pt-4">{selectedNotification?.message}</p>
          <span className="pt-8 text-end text-xs text-gray-400">
            {selectedNotification?.created_at?.slice(0, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
