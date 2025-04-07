import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Toast from "./Toast";
import Dialog from "./Dialog";

const DocsLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-row pt-[75px] bg-off_white h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col">
          <div className="px-8 md:px-15 xl:px-20 overflow-y-scroll overflow-x-visible w-full h-screen pt-4">
            <Outlet />
            <Toast />
            <Dialog />
            <div className="flex w-screen -ml-8 -top-6 h-14 bg-slate-300 mt-1">
              Footer
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DocsLayout;
