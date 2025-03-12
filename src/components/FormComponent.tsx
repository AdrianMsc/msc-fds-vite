import { useFormContext } from "react-hook-form";

const FormComponent = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2 w-[600px]">
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="name" className="font-bold">
            Component Name
          </label>
          <input {...register("id")} type="text" className="hidden" />
          <input
            {...register("name", { required: true, minLength: 3 })}
            type="text"
            className="msc-input !w-full"
          />
          {errors.name?.type === "required" && (
            <span className="text-red-600">This field is required</span>
          )}
          {errors.name?.type === "minLength" && (
            <span className="text-red-600">Value not valid</span>
          )}
        </div>
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="category" className="font-bold">
            Category
          </label>
          <select
            id="options"
            className="msc-input !p-2"
            {...register("category", { required: true })}
          >
            <option value="">-- Select an option --</option>
            <option value="Foundations">Foundations</option>
            <option value="Action">Action</option>
            <option value="Form">Form</option>
            <option value="Indicator">Indicator</option>
            <option value="Layout">Layout</option>
            <option value="Navigation">Navigation</option>
            <option value="Overlay">Overlay</option>
            <option value="WIP">WIP Components</option>
          </select>
          {errors.category?.type === "required" && (
            <span className="text-red-600">Please select an option</span>
          )}
        </div>
      </div>
      <div className="flex gap-2 w-[600px]">
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="guidelines" className="font-bold">
            Guidelines
          </label>
          <select
            id="options"
            className="msc-input !p-2"
            {...register("guidelines")}
          >
            <option value="🧱">🧱 Todo</option>
            <option value="🔨">🔨 WIP</option>
            <option value="🔭">🔭 Alpha</option>
            <option value="🧪">🧪 Beta</option>
            <option value="✅">✅ Live</option>
            <option value="🚫">🚫 Not Applicable</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="figma" className="font-bold">
            Figma
          </label>
          <select
            id="options"
            {...register("figma")}
            className="msc-input !p-2"
          >
            <option value="🧱">🧱 Todo</option>
            <option value="🔨">🔨 WIP</option>
            <option value="🔭">🔭 Alpha</option>
            <option value="🧪">🧪 Beta</option>
            <option value="✅">✅ Live</option>
            <option value="🚫">🚫 Not Applicable</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 w-[600px]">
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="storybook" className="font-bold">
            Storybook
          </label>
          <select
            id="options"
            {...register("storybook")}
            className="msc-input !p-2"
          >
            <option value="🧱">🧱 Todo</option>
            <option value="🔨">🔨 WIP</option>
            <option value="🔭">🔭 Alpha</option>
            <option value="🧪">🧪 Beta</option>
            <option value="✅">✅ Live</option>
            <option value="🚫">🚫 Not Applicable</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 !w-[50%]">
          <label htmlFor="cdn" className="font-bold">
            CDN
          </label>
          <select id="options" {...register("cdn")} className="msc-input !p-2">
            <option value="🧱">🧱 Todo</option>
            <option value="🔨">🔨 WIP</option>
            <option value="🔭">🔭 Alpha</option>
            <option value="🧪">🧪 Beta</option>
            <option value="✅">✅ Live</option>
            <option value="🚫">🚫 Not Applicable</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="comment" className="font-bold">
          Comments
        </label>
        <textarea
          className="msc-input !p-2"
          {...register("comment")}
        ></textarea>
      </div>
    </div>
  );
};

export default FormComponent;
