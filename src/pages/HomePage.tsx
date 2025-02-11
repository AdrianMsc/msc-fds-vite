import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../assets/animation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <main className="flex flex-col justify-center items-center h-screen m-auto md:flex-row">
      <div className="flex flex-col justify-center px-8 md:pl-16 w-full md:w-[45%] items-center h-screen">
        <h1 className="font-normal text-[3rem] xl:text-[4rem] leading-none mb-3">
          {isAuthenticated && (
            <small className="text-lg text-primary-blue font-bold">
              {isLoading ? "Loading" : "Hello " + user?.name}
            </small>
          )}
          <br />
          Welcome to MSC Design System
        </h1>
        <h3 className="font-light text-pretty self-start">
          Empowering Innovation Through Unified Design.
        </h3>

        <div className="py-5 flex flex-wrap place-content-between md:w-full items-center justify-center md:justify-normal">
          <Link className="msc-btn msc-btn-blue-solid mr-5" to="/docs">
            Go to Docs
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
              height={16}
              width={16}
            />
          </Link>

          <Link
            className="msc-text-link py-3 mr-4"
            to="https://adrianmsc.github.io/msc-fuel-design-system-react/?path=/docs/configure-your-project--docs"
          >
            Storybook
            <FontAwesomeIcon
              icon={faBook}
              className="mr-5 ml-2 text-[#ff4785]"
              height={16}
              width={16}
            />
          </Link>

          <Link
            className="msc-text-link py-3"
            to="https://ds-blog-ten.vercel.app/"
          >
            Release Notes
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="ml-2"
              height={16}
              width={16}
            />
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>
    </main>
  );
}
