import { useEffect, useState } from "react";
import { getComponentListApi } from "../../api/getComponentList";
import { NavLink, useNavigate } from "react-router-dom";
import { createLinkPage } from "../../utils/createLinkPage";
import { routesIndex } from "../../router/routeIndex";
import handleDataSend from "../../utils/handleDataSend";
import { ICategoryApi } from "../../interfaces/component.interface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [components, setComponents] = useState<string[]>([]);
  const [categories, setCategories] = useState<ICategoryApi[] | null>(null);
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

  // Filter components
  const filteredComponents = components.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className=" ml-10 mr-auto relative w-[300px]">
      <div className="msc-input-wrapper">
        <input
          id="searchComp"
          type="text"
          placeholder="Search for a component..."
          className="w-full msc-input peer"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="searchComp" className="msc-input-label">
          Search for a component...
        </label>
      </div>

      {query && (
        <ul className="absolute w-full bg-white border rounded shadow-md mt-1 !z-50">
          {filteredComponents.length > 0 ? (
            filteredComponents.map((item, index) => (
              <NavLink
                key={index}
                to={`/docs/${createLinkPage(item)}`}
                onClick={(event) => {
                  event.preventDefault();
                  setQuery("");
                  const formattedName = createLinkPage(item);
                  if (
                    routesIndex[1].children?.some(
                      (route) => route.path === formattedName
                    )
                  ) {
                    handleDataSend(
                      navigate,
                      `/docs/${formattedName}`,
                      item,
                      categories ?? []
                    );
                  } else {
                    handleDataSend(
                      navigate,
                      `/docs/WipComponent/${formattedName}`,
                      item,
                      categories ?? []
                    );
                  }
                }}
              >
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </li>
              </NavLink>
            ))
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
