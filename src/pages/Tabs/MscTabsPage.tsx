import { useState } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import Codeblock from "../../layout/Codeblock";

const MscTabsPage = ({ labels = ["Tab 1", "Tab 2", "Tab 3"] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (labels.length > 3) {
    console.error(
      "The MscTabs component only supports 3 tabs. Only the first 3 tabs will be displayed."
    );
    labels = labels.slice(0, 3);
  }

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ComponentLayout
      name="Tabs"
      category="Action"
      description="The Tabs component organizes content into separate views, allowing users to switch between different sections without leaving the current page. It provides a clean and efficient way to manage multiple content areas within a single interface. Each tab can be labeled and styled to match the design system, and the active tab is clearly highlighted to indicate the current view. This component supports various configurations, such as horizontal or vertical tab layouts, and can include icons or badges for additional context."
    >
      <ul className="msc-tabs grid-cols-6">
        {labels.map((label, index) => (
          <li
            key={index}
            className={`col-span-6 md:col-span-2 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            <a>{label}</a>
          </li>
        ))}
      </ul>
      <div className="my-5">
        <Codeblock>{`
      <!-- Tab Component -->
    <ul class="msc-tabs grid-cols-6">
      <li class="col-span-6 md:col-span-2 active">
          <a href="#">General Purpose & Heavy Duty</a>
      </li>
      <li class="col-span-6 md:col-span-2">
          <a href="#">Specialized & High Performance</a>
      </li>
      <li class="col-span-6 md:col-span-2">
        <a href="#">Maintenance</a>
      </li>
    </ul>

    <!-- JS -->
    <script>
      document
        .querySelector(".msc-tabs")
        .addEventListener("click", (event) => {
        event.preventDefault();
        let { target } = event;
        if (target.tagName === "A") {
        target = target.closest("li");
        }
        if (
        target.tagName === "LI" &&
        target.parentElement.classList.contains("msc-tabs")
        ) {
          Array.from(document.querySelectorAll(".msc-tabs > li")).forEach(
            (tab) => {
            tab === target
            ? tab.classList.add("active")
            : tab.classList.remove("active");
            }
          );
        }
      });
    </script>
      `}</Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscTabsPage;
