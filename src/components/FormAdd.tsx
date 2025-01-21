const FormAdd = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="component-name" className="font-bold">
          Component Name
        </label>
        <input
          name="component-name"
          type="text"
          className="msc-input w-[500px]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="guidelines-stage" className="font-bold">
          Guidelines
        </label>
        <select id="options" className="msc-input !p-2" name="guidelines-stage">
          <option value="option1">🧱 Todo</option>
          <option value="option2">🔨 WIP</option>
          <option value="option3">🔭 Alpha</option>
          <option value="option4">🧪 Beta</option>
          <option value="option5">✅ Live</option>
          <option value="option6">🚫 Not Applicable</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="figma-stage" className="font-bold">
          Figma
        </label>
        <select id="options" name="figma-stage" className="msc-input !p-2">
          <option value="option1">🧱 Todo</option>
          <option value="option2">🔨 WIP</option>
          <option value="option3">🔭 Alpha</option>
          <option value="option4">🧪 Beta</option>
          <option value="option5">✅ Live</option>
          <option value="option6">🚫 Not Applicable</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="storybook-stage" className="font-bold">
          Storybook
        </label>
        <select id="options" name="storybook-stage" className="msc-input !p-2">
          <option value="option1">🧱 Todo</option>
          <option value="option2">🔨 WIP</option>
          <option value="option3">🔭 Alpha</option>
          <option value="option4">🧪 Beta</option>
          <option value="option5">✅ Live</option>
          <option value="option6">🚫 Not Applicable</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cdn-stage" className="font-bold">
          CDN
        </label>
        <select id="options" name="cdn-stage" className="msc-input !p-2">
          <option value="option1">🧱 Todo</option>
          <option value="option2">🔨 WIP</option>
          <option value="option3">🔭 Alpha</option>
          <option value="option4">🧪 Beta</option>
          <option value="option5">✅ Live</option>
          <option value="option6">🚫 Not Applicable</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="component-comments" className="font-bold">
          Comments
        </label>
        <textarea className="msc-input"></textarea>
      </div>
    </div>
  );
};

export default FormAdd;
