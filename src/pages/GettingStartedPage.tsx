import { Link } from "react-router-dom";

const GettingStarted = () => {
  return (
    <>
      <h1 className="font-bold text-3xl mb-3">
        <small className="text-sm text-primary-blue">How to use</small> <br />
        Get started with MSC Design System
      </h1>
      <p className="text-balance">
        The MSC design system is built on a tailwind css base in its version
        0.0.0, therefore the components are highly customizable although it is
        not recommended to leave the design system guidelines.
      </p>

      <h2 className="font-bold text-xl mt-5">Config File</h2>
      <p>
        In the configuration file we can find defined the following styles of
        the MSC corporate identity
      </p>

      <ul className="list-disc mt-3 pl-10">
        <li>Colors</li>
        <li>Spacing</li>
        <li>Fonts*</li>
        <li>Customized Components</li>
      </ul>

      <h2 className="font-bold text-xl mt-5">Component Status</h2>
      <p className="mb-2">
        Here you can check the status of all the components that we are working
        on
      </p>
      <Link
        className="flex items-center text-primary-blue"
        to="/component-status"
      >
        See status
        <i className="fa-solid fa-arrow-up ml-2 mb-[2px] rotate-45"></i>
      </Link>
      <h2 className="font-bold text-xl mt-5">How to Setup</h2>
      <p className="mb-2">Here you can see the steps to setup the CDN</p>
      <a
        target="_blank"
        className="flex items-center text-primary-blue"
        href="https://mscdirectjira.atlassian.net/wiki/spaces/PD/pages/2251456570/How+to+get+setup"
      >
        Learn More
        <i className="fa-solid fa-arrow-up ml-2 mb-[2px] rotate-45"></i>
      </a>
      <h2 className="font-bold text-xl mt-5">Batch Release Notes</h2>
      <p className="mb-2">
        Here you can see all the components are included and ready to use in
        this release
      </p>
      <a
        target="_blank"
        className="flex items-center text-primary-blue"
        href="https://ds-blog-ten.vercel.app/"
      >
        See Notes
        <i className="fa-solid fa-arrow-up ml-2 mb-[2px] rotate-45"></i>
      </a>
    </>
  );
};

export default GettingStarted;
