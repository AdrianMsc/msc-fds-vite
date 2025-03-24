import { useEffect, useState } from "react";
import "./page-down.css";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscPagedown = () => {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const [currentDate, setCurrentDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(formatDate(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ComponentLayout>
        <section className="bg-white min-h-56 relative">
          <header className="msc-pd-header absolute w-full top-0 left-0">
            <img
              src="https://cdn.mscdirect.com/global/media/images/msc-logo.svg"
              className="h-[20px]"
              alt=""
            />
          </header>

          <main className="flex overflow-auto">
            <div className="msc-pd-container">
              <div className="msc-pd-text-container">
                <h1 className="text-primary-blue_dark">
                  We're upgrading our systems to serve you better
                </h1>
                <h4 className="text-primary-blue_dark">
                  Thanks you for your patience!
                </h4>
              </div>

              <div className="msc-pd-img-container">
                <div className="msc-plug-container-left">
                  <div className="msc-left-wire"></div>
                  <img
                    src="https://cdn.mscdirect.com/global/media/images/plug-left.svg"
                    alt="plug left side image"
                    className="msc-pd-left-plug"
                  />
                </div>

                <div className="msc-plug-container-right">
                  <div className="msc-right-wire"></div>
                  <img
                    src="https://cdn.mscdirect.com/global/media/images/plug-right.svg"
                    alt="plug left side image"
                    className="msc-pd-right-plug"
                  />
                </div>
              </div>

              <div className="msc-pd-text-container-bottom">
                <h4 className="text-primary-blue_dark">
                  If you need immediate assistance <br />
                  please contact us <b>1-800-645-7270</b>
                </h4>
              </div>

              <h6 className="msc-pd-timestamp" id="date">
                {currentDate}
              </h6>
            </div>

            <div className="msc-pd-bg-container w-full h-full">
              <div className="msc-pd-bg"></div>
            </div>
          </main>
        </section>
      </ComponentLayout>
    </>
  );
};

export default MscPagedown;
