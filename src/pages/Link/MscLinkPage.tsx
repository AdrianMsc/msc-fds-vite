import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscLinkPage = () => {
  return (
    <ComponentLayout
      title="Link"
      category="Action"
      description="The Link component is used to navigate users to different pages or external resources. It provides a clear and accessible way to create hyperlinks within an application. This component is designed to be easily recognizable and can be styled to match the overall design system. It supports various states such as hover, active, and visited, ensuring a consistent user experience. Additionally, it can handle different types of links, including internal navigation and external URLs."
    >
      <h3>Default</h3>
      <div className="flex items-end gap-4">
        <a href="#" className="msc-link">
          Link
        </a>

        <a href="#" className="msc-link-sm">
          Link sm
        </a>
      </div>
      <div className="mt-5">
        <Codeblock>
          {`
  <!-- Link base -->
  <a href="#" class="msc-link">Link</a>
              
  <!-- Link sm -->
  <a href="#" class="msc-link-sm">Link sm</a>
          `}
        </Codeblock>
      </div>

      <h3>Text</h3>
      <div className="flex items-end gap-4">
        <a href="#" className="msc-text-link">
          Text Link
        </a>

        <a href="#" className="msc-text-link-sm">
          Text Link sm
        </a>
      </div>
      <div className="my-5">
        <Codeblock>
          {`
  <!-- Link base -->
  <a href="#" class="msc-text-link">Text Link</a>

  <!-- Link sm -->
  <a href="#" class="msc-text-link-sm">Text Link sm</a>
          `}
        </Codeblock>
      </div>

      <h3>Dropdown</h3>
      <h5 className="text-red-600">WIP: need fix</h5>
      <div className="flex items-end gap-4 pt-2">
        <a className="msc-dd-link">
          <span id="dd-text">Show More</span>
          <svg
            id="dd-image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="msc-dd-link-icon"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </a>

        <a className="msc-dd-link-sm">
          <span id="dd-text">Show More</span>
          <svg
            id="dd-image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="msc-dd-link-icon"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </a>
      </div>
      <div className="mt-5">
        <Codeblock>
          {`
  <a class="msc-dd-link-sm">
    <span id="dd-text">Show More</span>
    <svg id="dd-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="msc-dd-link-icon">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
    </svg>
  </a>
          `}
        </Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscLinkPage;
