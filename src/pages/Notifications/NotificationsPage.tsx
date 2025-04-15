import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../api";
import { IFeedback, setFeedback } from "../../redux/slices/feedbackSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<IFeedback[] | null>(null);
  const [selectedNotification, setSelectedNotification] =
    useState<IFeedback | null>(null);
  const [notiColors, setNotiColors] = useState<{ [key: string]: string }>({});

  const dispatch = useDispatch();

  const colors = [
    "bg-blue-300",
    "bg-red-300",
    "bg-green-500",
    "bg-yellow-400",
    "bg-purple-300",
  ];

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${baseUrl}/inbox`);
        setNotifications(response.data);
        dispatch(setFeedback(response.data));

        const colorMap: { [key: string]: string } = {};

        response.data.forEach((noti: IFeedback) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          colorMap[noti.email] = randomColor;
        });

        setNotiColors(colorMap);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  // useEffect(() => {
  // 	const handleHeigth = () => {
  // 		let autoHeight = window.outerHeight - 135;
  // 		setInboxHeight(autoHeight);
  // 	};
  // 	const handleWidth = () => {
  // 		let autoWidth = window.outerWidth;
  // 		setMessageWidth(autoWidth);
  // 	};

  // 	window.addEventListener("load", handleHeigth);
  // 	window.addEventListener("resize", handleHeigth);
  // 	window.addEventListener("load", handleWidth);
  // 	window.addEventListener("resize", handleWidth);

  // 	handleHeigth(); // Initial call to set the size based on the current window size
  // 	handleWidth(); // Initial call to set the size based on the current window size

  // 	return () => {
  // 		window.removeEventListener("load", handleHeigth);
  // 		window.removeEventListener("resize", handleHeigth);
  // 		window.removeEventListener("load", handleWidth);
  // 		window.removeEventListener("resize", handleWidth);
  // 	};
  // }, []);

  if (notifications === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row w-full self-center h-[80vh] overflow-hidden">
      <div className="flex flex-col min-w-fit h-full bg-white">
        <div className="border-b border-gray-300 text-start pl-5 py-4 min-w-[250px] max-w-[300px] ">
          <h3 className="text-nowrap">Inbox 📥</h3>
        </div>
        <div className="flex flex-col w-full h-[100%] overflow-y-scroll overflow-x-hidden">
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
                  className="flex flex-row gap-2 pl-4 pr-3 py-3 border-b border-l border-gray-300 overflow-hidden"
                  key={noti.id}
                >
                  <div
                    className={`flex size-10 min-w-10 rounded-full text-center place-content-center text-white ${
                      notiColors[noti.email] || "bg-blue-300"
                    }`}
                  >
                    <p className="text-xl font-semibold my-auto">
                      {noti.name.charAt(0)}
                    </p>
                  </div>
                  <div className="w-full overflow-hidden">
                    <p className="font-bold">{noti.name}</p>
                    <p className="truncate text-gray-500">{noti.message}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      {selectedNotification === null ? (
        <div className="flex w-full bg-white items-center border-l border-gray-300">
          <div className="flex flex-col w-full overflow-y-scroll">
            <p className="text-center text-2xl text-stone-400">
              Select a message to view details
            </p>
          </div>
        </div>
      ) : (
        <div className="flex w-full overflow-y-scroll p-4 bg-white border-l border-gray-300">
          <div className="flex flex-col w-full h-full">
            <div className="flex flex-row w-full place-content-between p-4 overflow-hidden">
              <div className="flex flex-row gap-2 items-center overflow-hidden w-full">
                <div
                  className={`flex size-10 min-w-10 rounded-full text-center place-content-center text-white ${
                    notiColors[selectedNotification?.email] || "bg-blue-300"
                  }`}
                >
                  <p className="text-xl font-semibold my-auto">
                    {selectedNotification?.name.charAt(0)}
                  </p>
                </div>
                <div>
                  <h3>{selectedNotification?.name}</h3>
                  <h5 className="text-gray-500 text-xs font-thin">
                    {selectedNotification?.email}
                  </h5>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="self-end">
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>
                <span className="text-end text-xs text-gray-400 self-end text-nowrap">
                  {selectedNotification?.created_at?.slice(0, 10)}
                </span>
              </div>
            </div>
            <div className="w-full border-t border-gray-400"></div>
            <div className="flex flex-col p-4 overflow-hidden">
              <span className="w-fit rounded-full bg-blue-200 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5">
                {selectedNotification?.status}
              </span>
              <p className="pt-2">{selectedNotification?.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
