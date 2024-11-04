interface Props {
  label?: string;
}

const MscCheckbox = ({ label = "Default text" }: Props) => {
  return (
    <div className="msc-checkbox-container">
      <input
        type="checkbox"
        id="checkbox-id"
        value="checkbox-value"
        className="msc-checkbox"
      />
      <label htmlFor="checkbox-id" className="msc-checkbox-label">
        {label}
      </label>
    </div>
  );
};

export default MscCheckbox;
