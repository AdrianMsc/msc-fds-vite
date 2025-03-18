import { MscSpacing } from "../../components";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { spacing } from "./constants";

const MscSpacingPage = () => {
  return (
    <ComponentLayout
      name={spacing.title}
      category={spacing.category}
      description={spacing.description}
    >
      <h2 className="mb-3">Spacing System</h2>

      <table className="border-collapse w-full border border-slate-400 mb-4">
        <thead className="bg-slate-50">
          <tr>
            <th className="w-1/4 border border-slate-300 p-4 text-slate-900 text-left">
              Spacing
            </th>
            <th className="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 text-left">
              Usage
            </th>
            <th className="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 text-left">
              Example
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-4">2px</td>
            <td className="border border-slate-300 p-4">TBD</td>
            <td className="border border-slate-300 p-4">
              <MscSpacing size={2} />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4">4px</td>
            <td className="border border-slate-300 p-4">
              Padding/margin for some components (XS and S size) <br />
              Margin between atoms (eg: between icon and text)
            </td>
            <td className="border border-slate-300 p-4">
              <MscSpacing size={4} />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4">8px</td>
            <td className="border border-slate-300 p-4">
              Default padding for components <br />
              Margin between related components (eg: two buttons on a modal &gt;
              for better hierarchy)
            </td>
            <td className="border border-slate-300 p-4">
              <MscSpacing size={8} />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4">16px</td>
            <td className="border border-slate-300 p-4">
              Default margin between components or sections (eg: buttons,
              inputs, texts) <br />
              Padding for some components (eg: buttons, dialog, drawer) Padding
              for organisms (eg: side panel)
            </td>
            <td className="border border-slate-300 p-4">
              <MscSpacing size={16} />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4">24px</td>
            <td className="border border-slate-300 p-4">
              Margin between main title and body content <br />
              Margin between cards/sections/organisms (body content) <br />
              Global padding for body content (Body with sub-header and/or
              multi-column)
            </td>
            <td className="border border-slate-300 p-4">
              <MscSpacing size={24} />
            </td>
          </tr>
        </tbody>
      </table>

      <Codeblock>
        {`
  <!-- 2px padding -->  
  <div class="p-1">2px</div>
  <!-- 8px padding -->
  <div class="p-2">8px</div>
  <!-- 16px padding --> 
  <div class="p-4">16px</div>
  <!-- 24px padding -->
  <div class="p-6">24px</div>

`}
      </Codeblock>
    </ComponentLayout>
  );
};

export default MscSpacingPage;
