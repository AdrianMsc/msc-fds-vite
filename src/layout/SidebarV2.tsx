import React, { useContext, useEffect, useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCog,
  faThLarge,
  faShapes,
  faFileCode,
  faLayerGroup,
  faPlus,
  faMinus,
  faBolt,
  faClipboardList,
  faLightbulb,
  faColumns,
  faCompass,
  faWindowRestore,
  faListUl,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import SidebarContext from '../context/SidebarCtx';
import formatComponentName from '../utils/formatComponentName';
import { routesIndex } from '../router/routeIndex';
import { RootState } from '../redux/store';
import { IComponentApi } from '../interfaces/component.interface';
import { createLinkPage } from '../utils/createLinkPage';
import { getNavLinkTo } from '../utils/getNavLinkTo';
import { setCurrentComponent } from '../redux/slices/currentComponentSlice';
import SkeletonMenu from './SkeletonMenu';

const SidebarV2: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const componentsApiData = useSelector((state: RootState) => state.components);

  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const context = useContext(SidebarContext);
  if (!context) throw new Error('Sidebar must be used within a SidebarProvider');

  const { toggleSidebar, isSidebarOpen } = context;

  interface AtomicGroup {
    id: 'atom' | 'molecule' | 'organism' | 'template' | 'page';
    title: string;
    icon: IconDefinition;
  }

  // 🧪 Atomic Design Configuration
  const ATOMIC_GROUPS: AtomicGroup[] = useMemo(
    () => [
      { id: 'atom', title: 'Components', icon: faCog },
      { id: 'molecule', title: 'Composite Components', icon: faLayerGroup },
      { id: 'organism', title: 'Interaction Units', icon: faShapes },
      { id: 'template', title: 'Layout Structures', icon: faColumns },
      { id: 'page', title: 'View Modules', icon: faFileCode },
    ],
    [],
  );

  type GroupedDataType = Record<
    string,
    { items: IComponentApi[]; subcategories: Record<string, IComponentApi[]> }
  >;

  // 🔄 Process and Group Data
  const groupedData = useMemo<GroupedDataType | null>(() => {
    if (!componentsApiData) return null;

    const groups: GroupedDataType = {
      atom: { items: [], subcategories: {} },
      molecule: { items: [], subcategories: {} },
      organism: { items: [], subcategories: {} },
      template: { items: [], subcategories: {} },
      page: { items: [], subcategories: {} },
    };

    // Helper to normalize atomic type
    const normalizeAtomicType = (type: string | null | undefined) => {
      if (!type) return 'atom';
      const t = type.toLowerCase();
      if (t.includes('atom')) return 'atom';
      if (t.includes('molecule')) return 'molecule';
      if (t.includes('organism')) return 'organism';
      if (t.includes('template')) return 'template';
      if (t.includes('page')) return 'page';
      return 'atom';
    };

    // Flatten and bucket
    componentsApiData.forEach((cat) => {
      cat.components.forEach((comp) => {
        const type = normalizeAtomicType(comp.atomicType);

        if (groups[type]) {
          if (type === 'atom') {
            // For Atoms (Components), group by original category
            const subCat = comp.category || 'Uncategorized';
            if (!groups[type].subcategories[subCat]) {
              groups[type].subcategories[subCat] = [];
            }
            groups[type].subcategories[subCat].push(comp);
          } else {
            // For others, add directly to items
            groups[type].items.push(comp);
          }
        }
      });
    });

    return groups;
  }, [componentsApiData]);

  // 📂 Open default categories
  useEffect(() => {
    if (groupedData) {
      setOpenCategories((prev) => [
        ...prev,
        'Start Here',
        'Components',
        'Composite Components',
        'Interaction Units',
        'Layout Structures',
        'View Modules',
        // Open subcategories for logic if needed, or keep closed to avoid clutter
      ]);
    }
  }, [groupedData]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category],
    );
  };

  const renderLink = (name: string, navToPath: string, comp?: IComponentApi) => (
    <NavLink
      to={navToPath}
      state={comp}
      onClick={() => {
        toggleSidebar();
        if (comp) dispatch(setCurrentComponent(comp));
      }}
      className={({ isActive }) =>
        `block py-1 text-sm transition-colors ${
          isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
        }`
      }
    >
      {formatComponentName(name)}
    </NavLink>
  );

  const renderComponentItem = (comp: IComponentApi) => {
    const formattedName = createLinkPage(comp.name);
    const routeExists = routesIndex[1]?.children?.some((route) => route.path === formattedName);
    const navTo = routeExists ? `/docs/${formattedName}` : `/docs/WipComponent/${formattedName}`;

    if (!isAuthenticated && navTo.includes('/docs/WipComponent/')) {
      return null;
    }

    return (
      <div key={comp.id} className="mb-2 last:mb-0">
        {renderLink(comp.name, getNavLinkTo(comp), comp)}
      </div>
    );
  };

  const SidebarGroup = ({
    title,
    icon,
    children,
    lineStyle = 'solid',
    groupId,
    indent = false,
  }: {
    title: string;
    icon?: IconDefinition;
    children: React.ReactNode;
    lineStyle?: 'solid' | 'dotted';
    groupId: string;
    indent?: boolean;
  }) => {
    const isOpen = openCategories.includes(groupId);

    return (
      <div className={`mb-2 ${indent ? 'ml-0' : ''}`}>
        <div
          className="flex items-center gap-1 cursor-pointer group select-none pr-2"
          onClick={() => toggleCategory(groupId)}
        >
          {icon && (
            <div className="w-5 flex justify-center text-gray-400 group-hover:text-black transition-colors">
              <FontAwesomeIcon icon={icon} className="text-md" />
            </div>
          )}
          <h3 className="font-bold text-gray-900 text-[15px] flex-1">{title}</h3>
          <div className="text-gray-400">
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} size="sm" />
          </div>
        </div>

        <div className={`relative ${isOpen ? '' : 'hidden'}`}>
          <div
            className={`absolute left-[9px] top-0 bottom-2 border-l ${
              lineStyle === 'dotted' ? 'border-dotted border-l-2' : 'border-solid'
            } border-gray-300`}
          ></div>

          <div className="pl-6">{children}</div>
        </div>
      </div>
    );
  };

  // Icon Mapping for Subcategories (Atoms)
  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Foundations':
        return faThLarge;
      case 'Interaction Units':
        return faShapes;
      case 'View Modules':
        return faFileCode;
      case 'Components':
        return faCog;
      case 'Action':
        return faBolt;
      case 'Form':
        return faClipboardList;
      case 'Indicator':
        return faLightbulb;
      case 'Layout':
        return faColumns;
      case 'Navigation':
        return faCompass;
      case 'Overlay':
        return faWindowRestore;
      case 'Collection':
        return faListUl;
      default:
        return faLayerGroup;
    }
  };

  const hasCategories =
    groupedData &&
    Object.values(groupedData).some(
      (g) => g.items.length > 0 || Object.keys(g.subcategories).length > 0,
    );

  return (
    <aside
      className={`
        mt-[3px] md:mt-[43px] lg:mt-[3px] pb-10 bg-white sm:max-w-[260px] sm:min-w-[260px] w-[260px]
        absolute left-0 z-50 lg:static lg:z-auto
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col overflow-y-auto h-full pl-5 pt-8 text-base border-r border-gray-100/50 shadow-sm
      pr-5
        `}
    >
      {/* 🚀 Start Here */}
      <SidebarGroup title="Start Here" icon={faHome} groupId="Start Here" lineStyle="solid">
        {['GettingStarted', 'ComponentStatus'].map((page) => (
          <div key={page} className="mb-2 last:mb-0">
            {renderLink(page, `/docs/${createLinkPage(page)}`)}
          </div>
        ))}
      </SidebarGroup>

      {!hasCategories && groupedData === null && <SkeletonMenu />}

      {/* ⚛️ Render Atomic Groups */}
      {groupedData &&
        ATOMIC_GROUPS.map((group) => {
          const data = groupedData[group.id];
          if (!data) return null;

          const hasSubcategories = Object.keys(data.subcategories).length > 0;
          const hasItems = data.items.length > 0;

          if (!hasSubcategories && !hasItems) return null; // Skip empty groups

          return (
            <SidebarGroup
              key={group.id}
              title={group.title}
              icon={group.icon}
              groupId={group.title}
              lineStyle="solid"
            >
              {/* Subcategories (only for Atoms/Components) */}
              {hasSubcategories &&
                Object.entries(data.subcategories)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([subCatName, comps]) => (
                    <SidebarGroup
                      key={subCatName}
                      title={subCatName}
                      icon={getCategoryIcon(subCatName)}
                      groupId={subCatName}
                      lineStyle="dotted"
                      indent
                    >
                      {comps
                        .slice()
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(renderComponentItem)}
                    </SidebarGroup>
                  ))}

              {/* Direct Items (for other types) */}
              {hasItems &&
                data.items
                  .slice()
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(renderComponentItem)}
            </SidebarGroup>
          );
        })}

      {/* Separator */}
      <div className="w-10 border-t border-gray-200 mt-2 mb-6 ml-2"></div>

      {/* Footer Links */}
      <div className="flex flex-col gap-3 pl-2 pb-10 text-[15px]">
        <a
          href="http://localhost:6006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 font-medium hover:text-black hover:underline"
        >
          Storybook
        </a>
        <NavLink
          to="/docs/ChangeLog"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `font-medium hover:underline ${isActive ? 'text-black' : 'text-gray-900'}`
          }
        >
          Release Notes
        </NavLink>

        <NavLink
          to="/docs/Ecosystem"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `font-medium hover:underline ${isActive ? 'text-black' : 'text-gray-900'}`
          }
        >
          Ecosystem
        </NavLink>
        <NavLink
          to="/docs/ComponentTester"
          onClick={toggleSidebar}
          className={({ isActive }) =>
            `font-medium hover:underline ${isActive ? 'text-black' : 'text-gray-900'}`
          }
        >
          Playground
        </NavLink>
        <span className="text-gray-900 font-medium cursor-not-allowed opacity-75">Team</span>
        <span className="text-gray-900 font-medium cursor-not-allowed opacity-75">Contact</span>
      </div>
    </aside>
  );
};

export default SidebarV2;
