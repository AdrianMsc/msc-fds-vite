import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <>
      <h1 className="text-blue-700">Getting Wet</h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        {/* <li>
          <Link to="/getting-started">Getting Started</Link>
        </li> */}
        <li>
          <Link to="/component-status">Component Status</Link>
        </li>
      </ul>
    </>
  );
};

export default GettingStarted;
