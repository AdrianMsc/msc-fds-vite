import { useEffect, useState } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { alerts } from "./constants";
import Codeblock from "../../layout/Codeblock";
import { MscTabs } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleCheck,
  faExclamationTriangle,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

type AlertType = "info" | "success" | "warning" | "error";

const iconMap: Record<AlertType, any> = {
  info: faCircleInfo,
  success: faCircleCheck,
  warning: faExclamationTriangle,
  error: faCircleExclamation,
};

const vanillaIconMap: Record<AlertType, any> = {
  info: "fa-circle-info",
  success: "fa-circle-check",
  warning: "fa-triangle-exclamation",
  error: "fa-circle-exclamation",
};

const MscAlertPage = () => {
  const [alertType, setAlertType] = useState<AlertType>("info");

  useEffect(() => {
    document.title = "Alert Component";
  }, []);

  const handleTabClick = (label: string, index: number) => {
    const lowerCaseLabel = label.toLowerCase();
    if (lowerCaseLabel in iconMap) {
      setAlertType(lowerCaseLabel as AlertType);
    }
    console.log(`Tab ${index + 1} (${label}) clicked`);
  };

  return (
    <ComponentLayout
      name={alerts.title}
      category={alerts.category}
      description={alerts.description}
    >
      <MscTabs
        labels={["Info", "Success", "Warning", "Error"]}
        background="#f2f2f2"
        onTabClick={handleTabClick}
      />
      <h2 className="my-4">CTA Alert</h2>

      <article className="flex gap-2 items-center bg-white p-5 w-full rounded my-4">
        <div className={`msc-alert msc-alert-${alertType} w-full `}>
          <div className="msc-alert-main-container">
            <div className="msc-alert-content items-center">
              <FontAwesomeIcon
                icon={iconMap[alertType]}
                className={`msc-alert-${alertType}-icon`}
              />
              This is an alert message
            </div>
            <div className="msc-alert-cta-container pb-0">
              <button className="msc-btn msc-btn-blue-outline msc-btn-sm">
                <span>Action 2</span>
              </button>
              <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
                <span>Action 1</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <Codeblock>
        {`
<div class="msc-alert msc-alert-${alertType} w-full">
    <div class="msc-alert-main-container">
        <div class="msc-alert-content">
            <i class="msc-alert-icon msc-alert-error-icon fas ${vanillaIconMap[alertType]}"></i>
            This is an alert message
            </div>
            <div class="msc-alert-cta-container pb-0">
                <button class="msc-btn msc-btn-blue-outline msc-btn-sm">
                  <span>Action 2</span>
                </button>
                <button class="msc-btn msc-btn-blue-solid msc-btn-sm">
                 <span>Action 1</span>
                </button>
         </div>
    </div>
</div>
`}
      </Codeblock>

      <h2 className="my-4">Without CTA Alert</h2>

      <article className="flex gap-2 items-center bg-white p-5 w-full rounded my-4">
        <div className={`msc-alert msc-alert-${alertType} w-full `}>
          <div className="msc-alert-main-container">
            <div className="msc-alert-content items-center">
              <FontAwesomeIcon
                icon={iconMap[alertType]}
                className={`msc-alert-${alertType}-icon`}
              />
              This is an alert message
            </div>
          </div>
        </div>
      </article>

      <Codeblock>
        {`
 <div class="msc-alert msc-alert-${alertType} w-full">
      <div class="msc-alert-main-container">
          <div class="msc-alert-content">
              <i class="msc-alert-icon msc-alert-info-icon fas ${vanillaIconMap[alertType]}"></i>
              This is an alert message
          </div>
      </div>
  </div>
`}
      </Codeblock>
    </ComponentLayout>
  );
};

export default MscAlertPage;
