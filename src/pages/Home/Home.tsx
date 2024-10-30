import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="flex bg-gray-900 h-screen w-screen items-center justify-center flex-col text-center text-white">
        <img
          src="https://www.mscdirect.com/favicon.ico"
          alt=""
          className="animate-bounce rounded-full"
        />
        <h1 className="text-4xl font-bold my-4">
          Work In Progress <span className="animate-pulse">.</span>
          <span className="animate-pulse delay-200">.</span>
          <span className="animate-pulse delay-400">.</span>
        </h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/getting-started">Getting Started</Link>
          </li>
          <li>
            <Link to="/component-status">Component Status</Link>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Home;
