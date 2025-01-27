import { useFormContext } from "react-hook-form";

const FormAdd = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 w-[600px]">
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="componentName" className="font-bold">
            Component Name
          </label>
          <input
            {...register("componentName", { required: true, minLength: 3 })}
            type="text"
            className="msc-input !w-full"
          />
          {errors.componentName?.type === "required" && (
            <span className="text-red-600">This field is required</span>
          )}
          {errors.componentName?.type === "minLength" && (
            <span className="text-red-600">Value not valid</span>
          )}
        </div>
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="componentCategory" className="font-bold">
            Category
          </label>
          <select
            id="options"
            className="msc-input !p-2"
            {...register("componentCategory", { required: true })}
          >
            <option value="">-- Select an option --</option>
            <option value="Foundations">Foundations</option>
            <option value="Action">Action</option>
            <option value="Form">Form</option>
            <option value="Indicator">Indicator</option>
            <option value="Layout">Layout</option>
            <option value="Navigation">Navigation</option>
            <option value="Overlay">Overlay</option>
          </select>
          {errors.componentCategory?.type === "required" && (
            <span className="text-red-600">Please select an option</span>
          )}
        </div>
      </div>
      <div className="flex gap-2 w-[600px]">
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="guidelinesStage" className="font-bold">
            Guidelines
          </label>
          <select
            id="options"
            className="msc-input !p-2"
            {...register("guidelinesStage")}
          >
            <option value="Todo">🧱 Todo</option>
            <option value="WIP">🔨 WIP</option>
            <option value="Alpha">🔭 Alpha</option>
            <option value="Beta">🧪 Beta</option>
            <option value="Live">✅ Live</option>
            <option value="Not Applicable">🚫 Not Applicable</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="figmaStage" className="font-bold">
            Figma
          </label>
          <select
            id="options"
            {...register("figmaStage")}
            className="msc-input !p-2"
          >
            <option value="Todo">🧱 Todo</option>
            <option value="WIP">🔨 WIP</option>
            <option value="Alpha">🔭 Alpha</option>
            <option value="Beta">🧪 Beta</option>
            <option value="Live">✅ Live</option>
            <option value="Not Applicable">🚫 Not Applicable</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 w-[600px]">
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="storybookStage" className="font-bold">
            Storybook
          </label>
          <select
            id="options"
            {...register("storybookStage")}
            className="msc-input !p-2"
          >
            <option value="Todo">🧱 Todo</option>
            <option value="WIP">🔨 WIP</option>
            <option value="Alpha">🔭 Alpha</option>
            <option value="Beta">🧪 Beta</option>
            <option value="Live">✅ Live</option>
            <option value="Not Applicable">🚫 Not Applicable</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="cdnStage" className="font-bold">
            CDN
          </label>
          <select
            id="options"
            {...register("cdnStage")}
            className="msc-input !p-2"
          >
            <option value="Todo">🧱 Todo</option>
            <option value="WIP">🔨 WIP</option>
            <option value="Alpha">🔭 Alpha</option>
            <option value="Beta">🧪 Beta</option>
            <option value="Live">✅ Live</option>
            <option value="Not Applicable">🚫 Not Applicable</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="componentComments" className="font-bold">
          Comments
        </label>
        <textarea
          className="msc-input"
          {...register("componentComments")}
        ></textarea>
      </div>
    </div>
  );
};

export default FormAdd;
