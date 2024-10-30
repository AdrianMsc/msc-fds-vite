import { Link } from "react-router-dom";

const ComponentStatus = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/getting-started">Getting Started</Link>
        </li>
        {/* <li>
          <Link to="/component-status">Component Status</Link>
        </li> */}
      </ul>
    </>
  );
};

export default ComponentStatus;
