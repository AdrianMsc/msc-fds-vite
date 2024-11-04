const MscAlert = ({
  message = "Default message",
  actionOne = "Action One",
  actionTwo = "Action Two",
  variant = "info",
}) => {
  const variantClasses = {
    info: "msc-alert-info",
    success: "msc-alert-success",
    warning: "msc-alert-warning",
    error: "msc-alert-error",
  };

  const variantClassesIcon = {
    info: "msc-alert-info-icon",
    success: "msc-alert-success-icon",
    warning: "msc-alert-warning-icon",
    error: "msc-alert-error-icon",
  };

  const variantIcon = {
    info: "fas facircle-exclamation",
    success: "fas fa-circle-check",
    warning: "fas fa-triangle-exclamation",
    error: "fas fa-circle-exclamation",
  };

  const alertClass = variantClasses[variant] || variantClasses.info;
  const alertClassIcon = variantClassesIcon[variant] || variantClassesIcon.info;

  const iconClass = variantIcon[variant] || variantIcon.info;

  return (
    <>
      <div className={`msc-alert ${alertClass} w-full`}>
        <div className="msc-alert-main-container">
          <div className="msc-alert-content">
            <i className={`msc-alert-icon ${alertClassIcon} ${iconClass}`}></i>
            {message}
          </div>
          <div className="msc-alert-cta-container pb-0">
            <button className="msc-btn msc-btn-blue-outline msc-btn-sm">
              <span>{actionTwo}</span>
            </button>

            <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
              <span>{actionOne}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscAlert;
