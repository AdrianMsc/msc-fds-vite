import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../../assets/animation.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex justify-center items-center h-screen m-auto">
      <div className="flex flex-col justify-center px-5 lg:w-[45%]">
        <h1 className="font-normal text-[4rem] leading-none">
          Welcome to MSC <br />
          Design System
        </h1>
        <h3 className="font-light text-left">
          Empowering Innovation Through Unified Design.
        </h3>

        <div className="py-5 flex flex-wrap place-content-between w-fit">
          <Link className="msc-btn msc-btn-blue-solid mr-5" to="/docs">
            Go to Docs
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2"
              height={16}
              width={16}
            />
          </Link>

          <a
            className="msc-text-link py-3 mr-4"
            // to="https://adrianmsc.github.io/msc-fuel-design-system-react/?path=/docs/configure-your-project--docs"
          >
            Storybook
            <FontAwesomeIcon
              icon={faBook}
              className="mr-5 ml-2 text-[#ff4785]"
              height={16}
              width={16}
            />
          </a>

          <a
            className="msc-text-link py-3"
            // to="https://ds-blog-ten.vercel.app/"
          >
            Release Notes
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="ml-2"
              height={16}
              width={16}
            />
          </a>
        </div>
      </div>
      <Lottie options={defaultOptions} height={600} width={600} />
    </main>
  );
}
