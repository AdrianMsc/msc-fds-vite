import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DocsLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-row pt-[60px] bg-off_white h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="px-8 md:px-15 xl:px-20 overflow-auto w-full h-full pb-10 pt-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DocsLayout;
