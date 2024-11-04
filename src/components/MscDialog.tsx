const MscDialog = ({
  title = "Title",
  text = "Lorem ipsum",
  buttonOne = "Button 1",
  buttonTwo = "Button 2",
  loading = false,
}) => {
  const dots = [1, 2, 3];
  return (
    <>
      <article className="msc-dialog">
        <h4 className="msc-dialog-title">{title}</h4>
        <p>{text}</p>
        <div className="msc-dialog-footer">
          <button className="msc-btn msc-btn-transparent">{buttonOne}</button>

          {loading === false ? (
            <button className="msc-btn msc-btn-blue-solid">{buttonTwo}</button>
          ) : (
            <button className="msc-btn msc-btn-blue-solid">
              <div className="msc-btn-dots-container">
                {dots.map((index) => (
                  <div className={`msc-btn-dot${index}`} key={index}></div>
                ))}
              </div>
            </button>
          )}
        </div>
      </article>
    </>
  );
};

export default MscDialog;
