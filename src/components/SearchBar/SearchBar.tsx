import { useEffect, useState } from "react";
import { getComponentListApi } from "../../api/getComponentList";
import { useNavigate } from "react-router-dom";
import { createLinkPage } from "../../utils/createLinkPage";
import { routesIndex } from "../../router/routeIndex";
import handleDataSend from "../../utils/handleDataSend";
import { ICategoryApi } from "../../interfaces/component.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import easter from "../../assets/easter.png";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [components, setComponents] = useState<string[]>([]);
  const [categories, setCategories] = useState<ICategoryApi[] | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const componentsApiData = useSelector((state: RootState) => state.components);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const data = await getComponentListApi();
        const componentNames = data.map(
          (component: { name: string }) => component.name
        );
        setComponents(componentNames);
      } catch (error) {
        console.error("Error fetching components:", error);
      }
    };
    setCategories(componentsApiData);
    fetchComponents();
  }, [componentsApiData]);

  const filteredComponents = components.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex(
        (prevIndex) => (prevIndex + 1) % filteredComponents.length
      );
    } else if (event.key === "ArrowUp") {
      setSelectedIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredComponents.length) %
          filteredComponents.length
      );
    } else if (event.key === "Enter" && filteredComponents.length > 0) {
      navigateToComponent(filteredComponents[selectedIndex]);
      event.currentTarget.blur();
    } else if (event.key === "Escape") {
      setQuery("");
      event.currentTarget.blur();
    }
  };

  const navigateToComponent = (componentName: string) => {
    setQuery("");
    const formattedName = createLinkPage(componentName);
    if (
      routesIndex[1].children?.some((route) => route.path === formattedName)
    ) {
      handleDataSend(
        navigate,
        `/docs/${formattedName}`,
        componentName,
        categories ?? []
      );
    } else {
      handleDataSend(
        navigate,
        `/docs/WipComponent/${formattedName}`,
        componentName,
        categories ?? []
      );
    }
  };

  return (
    <div className="ml-10 mr-auto relative w-[300px]">
      <div className="msc-input-wrapper">
        <input
          id="searchComp"
          type="text"
          placeholder="Search for a component..."
          className="w-full msc-input peer"
          autoComplete="off"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <label htmlFor="searchComp" className="msc-input-label">
          Search for a component...
        </label>
      </div>

      {query && (
        <ul className="absolute w-full bg-white border rounded shadow-md mt-1 !z-50">
          {filteredComponents.length > 0 ? (
            <>
              {filteredComponents.map((item, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer ${
                    index === selectedIndex
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => navigateToComponent(item)}
                >
                  {item}
                </li>
              ))}
            </>
          ) : query.includes("jefe") || query.includes("Jefe") ? (
            <li className="p-2 text-gray-500 flex flex-col items-center">
              <img src={easter} alt="" className="w-12" /> Special for the jefe
            </li>
          ) : (
            <li className="p-2 text-gray-500 flex flex-col items-center">
              <span className="text-4xl">🤔</span> No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
