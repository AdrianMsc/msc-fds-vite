import React, { ReactNode, useState, useCallback, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencil,
  faThLarge,
  faShapes,
  faFileCode,
  faCog,
  faBolt,
  faClipboardList,
  faLightbulb,
  faColumns,
  faCompass,
  faWindowRestore,
  faListUl,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

import MscStatusComponentBar from '../../components/MscStatusComponentBar/MscStatusComponentBar';
import Links from '../../components/Links/Links';
import ModalForm from '../../components/ModalForm';
import { IComponentApi, IVersionApi } from '../../interfaces/component.interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getComponentVersionsApi } from '../../api/componentVersions';

interface ComponentLayoutProps {
  id?: number;
  name?: string;
  category?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  statusBar?: boolean;
}

// 🔒 Constants
const MODAL_VISIBILITY = {
  SHOW: '',
  HIDE: 'hidden',
} as const;

const DEFAULT_VALUES: IComponentApi = {
  id: 0,
  name: '',
  category: '',
  comment: '',
  image: '',
  figmaLink: '',
  storybookLink: '',
  createdAt: '',
  updatedAt: '',
  atomicType: '',
  statuses: [
    {
      guidelines: '',
      figma: '',
      storybook: '',
      cdn: '',
    },
  ],
};

// Icon Mapping Helper
const getCategoryIcon = (catName: string = '') => {
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

/**
 ** ComponentLayout - Displays component information with optional status bar and editing capabilities
 */
export const ComponentLayout: React.FC<ComponentLayoutProps> = ({
  children,
  className = '',
  statusBar = true,
  name: nameProp,
  category: categoryProp,
  description: descriptionProp,
}) => {
  // 🪝 Hooks
  const location = useLocation();
  const { user } = useAuth();
  const isAuthenticated = !!user;

  // 🏷️ State
  const [modalVisibility, setModalVisibility] = useState<'' | 'hidden'>(MODAL_VISIBILITY.HIDE);
  const [selectedRecord, setSelectedRecord] = useState<IComponentApi>(DEFAULT_VALUES);
  const [versions, setVersions] = useState<IVersionApi[]>([]);
  const [selectedVersionId, setSelectedVersionId] = useState<number | null>(null);
  const [isLoadingVersions, setIsLoadingVersions] = useState(false);

  // 🧠 Redux
  const reduxComponent = useSelector((state: RootState) => state.currentComponent.currentComponent);

  const locationState = location.state as IComponentApi | null;

  const componentData = locationState ?? reduxComponent;

  const {
    id,
    name = nameProp,
    category = categoryProp,
    description = descriptionProp,
    statuses,
    figmaLink,
    storybookLink,
    image,
    atomicType,
  } = componentData ?? {};

  const isWipComponent = useMemo(
    () => location.pathname.split('/').pop() === 'Wipcomponent',
    [location.pathname],
  );

  const canManageComponents = isAuthenticated && (user?.role === 'admin' || user?.role === 'editor');
  const hasLinks = Boolean(figmaLink || storybookLink);

  // 🎬 Event handlers
  const toggleModal = useCallback(() => {
    setModalVisibility((prev) =>
      prev === MODAL_VISIBILITY.HIDE ? MODAL_VISIBILITY.SHOW : MODAL_VISIBILITY.HIDE,
    );
  }, []);

  const handleEdit = useCallback(() => {
    if (id) {
      setSelectedRecord(componentData as IComponentApi);
      toggleModal();
    }
  }, [id, componentData, toggleModal]);

  // Load versions when component ID changes
  useEffect(() => {
    if (!id) return;
    
    const abortController = new AbortController();
    let isCancelled = false;

    const loadVersions = async () => {
      setIsLoadingVersions(true);
      try {
        const versionsData = await getComponentVersionsApi(id);
        if (!isCancelled) {
          setVersions(versionsData);
          
          // Find the latest version
          const latestVersion = versionsData.find((v: IVersionApi) => v.is_latest);
          if (latestVersion) {
            setSelectedVersionId(latestVersion.id);
          }
        }
      } catch (error) {
        if (!isCancelled) {
          console.error('Error loading versions:', error);
        }
      } finally {
        if (!isCancelled) {
          setIsLoadingVersions(false);
        }
      }
    };

    loadVersions();

    return () => {
      isCancelled = true;
      abortController.abort();
    };
  }, [id]);

  const handleVersionChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const versionId = Number(event.target.value);
    setSelectedVersionId(versionId);
    
    // Optionally reload component data for the selected version
    // This would require updating the component data in Redux or passing it down
  };

  return (
    <main
      key={componentData?.id}
      className={`container mx-auto ${className}`}
      data-testid="component-layout"
    >
      <header className="flex flex-row place-content-between items-start">
        <div className="flex flex-col gap-2">
          {category && (
            <small className="text-sm text-primary-blue block font-bold">{category}</small>
          )}

          <h1 className="font-bold text-3xl mb-3 flex items-center gap-2">
            {isWipComponent && <span>WIP: </span>}
            {name}
            <span className="bg-primary-blue border border-brand-subtle text-white text-xs font-medium px-1.5 py-0.5 rounded-full">
              {atomicType && (
                <div className="flex items-center gap-2 p-1">
                  <FontAwesomeIcon icon={getCategoryIcon(category)} className="text-sm" />
                  {atomicType}
                </div>
              )}
            </span>
            {canManageComponents && (
              <button
                onClick={handleEdit}
                aria-label="Edit component"
                title="Edit component"
                className="pb-1"
              >
                <FontAwesomeIcon
                  icon={faPencil}
                  className="size-5 opacity-10 hover:opacity-80 transition-all cursor-pointer"
                />
              </button>
            )}
          </h1>

          {statusBar && (statuses?.length ?? 0) > 0 && (
            <MscStatusComponentBar id={id} stats={statuses ?? []} />
          )}

          {hasLinks && <Links storybookLink={storybookLink} figmaLink={figmaLink} />}

          <p className="mb-4">{description || "This component doesn't have any description yet"}</p>
        </div>

        {/* Version Selector - Show when there are multiple versions */}
        {versions.length > 0 && (
          <div className="flex flex-col items-end gap-2">
            <label htmlFor="version-selector" className="text-xs font-bold text-gray-500">
              Version
            </label>
            <select
              id="version-selector"
              className="px-3 py-1 bg-white justify-center rounded-md border border-monochromes-grey_xlight text-sm"
              value={selectedVersionId || ''}
              onChange={handleVersionChange}
              disabled={isLoadingVersions}
            >
              {isLoadingVersions ? (
                <option value="">Loading...</option>
              ) : (
                versions.map((version: IVersionApi) => (
                  <option key={version.id} value={version.id}>
                    {version.version} {version.is_latest ? '(Latest)' : ''}
                  </option>
                ))
              )}
            </select>
          </div>
        )}
      </header>

      <ModalForm
        triggerModal={modalVisibility}
        toggleModal={toggleModal}
        selectedRecord={selectedRecord}
        setSelectedRecord={setSelectedRecord}
        title="Edit Component"
        buttonOne="Update"
        buttonTwo="Cancel"
        emptyValues={DEFAULT_VALUES}
      />

      <section className="pb-4">
        {children ? (
          <div>{children}</div>
        ) : image ? (
          <img src={image} alt={`${name} component visualization`} />
        ) : (
          <div className="text-gray-400 text-center py-10">
            No preview available for this component
          </div>
        )}
      </section>
    </main>
  );
};

export default ComponentLayout;
