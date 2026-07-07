import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from '../assets/animation.json';
import MscLoginWidget from '../components/MscLoginWidget/MscLoginWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBook } from '@fortawesome/free-solid-svg-icons';
import Slider from '../components/Slider/Slider';
import slideImg1 from '../assets/color-xample.jpg';
import slideImg2 from '../assets/code.png';

export default function Home() {
  const [lottieSize, setLottieSize] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth < 500) {
        setLottieSize(400);
      } else {
        setLottieSize(500);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lottie-react handles looping/autoplay via props

  const { user } = useAuth();
  const isAuthenticated = !!user;
  return (
    <>
      <header className="flex justify-between p-4 container mx-auto">
        <Link to="/">
          <svg
            width="88"
            height="24"
            viewBox="0 0 88 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.1692 6.80235L27.2722 23.9866H34.4233L41.2598 0H28.7034L20.8761 13.1274L21.8946 0H10.3594L0 23.9863L7.09041 23.9866L14.8571 6.80235L13.6873 23.9866H20.8994L32.1692 6.80235ZM61.2057 15.6857C62.2154 12.3545 59.7221 8.99044 56.2412 8.99044L55.9629 8.99066H49.5914C48.711 8.97645 48.4881 8.40899 48.6797 7.78268L48.9207 6.93761C49.121 6.30374 49.5819 5.71919 50.3901 5.73607H62.4492L65.0662 0H48.2369C45.1619 0.13881 43.1313 2.29603 42.5927 4.73108L41.3879 8.89294L41.3832 8.91004C40.4535 12.1662 42.7744 14.7281 46.1338 14.7281L46.3761 14.7327H53.4037C53.9774 14.7398 54.4125 14.9371 54.1973 15.6926L53.7495 17.2633C53.5299 18.0015 53.0361 18.233 52.4334 18.2563H39.3326L37.7015 23.9868L54.7123 23.9861C56.8051 23.9435 59.3899 21.9493 59.9937 19.9426L61.2057 15.6857ZM62.9935 18.1692C62.0636 21.4251 64.3847 23.987 67.7441 23.987L78.681 23.9866C80.7862 23.9866 83.3868 21.9613 83.9971 19.9327L85.0731 16.1939H78.4811L78.1284 17.2744C77.933 17.9258 77.4861 18.2352 76.7341 18.2363H71.233C70.3417 18.2363 70.083 17.7217 70.2698 17.0359L73.1166 7.10396C73.34 6.31529 73.7642 5.73229 74.6555 5.73229H80.3329C81.0872 5.73229 81.3544 6.04145 81.1685 6.69286L80.7565 8.19311H87.3465L87.7738 6.69175C88.7837 3.36053 86.2902 0 82.8095 0H72.6558C70.0039 0 67.673 1.75767 66.9441 4.30799L62.9935 18.1692Z"
              fill="#FF3333"
            ></path>
          </svg>
        </Link>

        <ul className="flex gap-4 items-center text-monochromes-grey">
          <li>
            <Link to="/docs">Components</Link>
          </li>
          <li>
            <Link to="/docs">Templates</Link>
          </li>
          <li>
            <a href="https://ds-blog-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Release Notes</a>
          </li>
          <li>
            {isAuthenticated ? (
              <Link
                className=" py-3"
                to="https://adrianmsc.github.io/msc-fuel-design-system-react/?path=/docs/configure-your-project--docs"
              >
                Storybook
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-[#ff4785] ml-1"
                  height={12}
                  width={12}
                />
              </Link>
            ) : (
              ''
            )}
          </li>
          <li>
            <MscLoginWidget
              className="relative"
              type="button"
              buttonType="solid"
              logoutBtn={false}
            />
          </li>
        </ul>
      </header>

      <main className="flex flex-col sm:justify-center items-center h-[calc(100vh-80px)] m-auto md:flex-row container mx-auto">
        <div className="w-full xl:w-1/2 order-2 xl:order-1 justify-center flex">
          <div className="flex flex-col gap-4">
            {isAuthenticated ? (
              <p className="text-lg ">
                Welcome
                <span className="font-bold text-primary-blue ml-2">{user?.name} 😎</span>
              </p>
            ) : null}
            <h1 className="text-5xl">
              <span className="font-extralight">Welcome to the</span> <br />
              <span className="font-bold">MSC Design System</span>
            </h1>

            <p className="text-xl text-monochromes-grey">
              Empowering Innovation Through Unified Design.
            </p>

            <div className="flex gap-2">
              <Link className="msc-btn msc-btn-blue-outline" to="https://ds-blog-ten.vercel.app/">
                Release Notes
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ml-2"
                  height={16}
                  width={16}
                />
              </Link>

              <Link className="msc-btn msc-btn-blue-solid" to="/docs">
                View Components
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" height={16} width={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 order-1 xl:order-2 flex justify-center">
          <Slider intervalMs={5000}>
            <div className="flex items-center justify-center">
              <Lottie
                animationData={animation}
                loop
                autoplay
                style={{ height: lottieSize, width: lottieSize }}
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={slideImg1}
                alt="Architecture flow"
                className="w-full max-w-[600px] h-auto rounded-lg shadow"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src={slideImg2}
                alt="Ecosystem overview"
                className="w-full max-w-[600px] h-auto rounded-lg shadow"
              />
            </div>
          </Slider>
        </div>
      </main>
    </>
  );
}
