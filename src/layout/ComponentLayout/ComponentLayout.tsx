import React, { ReactNode, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import MscStatusComponentBar from '../../components/MscStatusComponentBar/MscStatusComponentBar';
import Links from '../../components/Links/Links';
import ModalForm from '../../components/ModalForm';
import { IComponentApi } from '../../interfaces/component.interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MscTypographyPageV1 from '../../pages/TypographyPage/MscTypographyPageV1';

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
	HIDE: 'hidden'
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
	statuses: [
		{
			guidelines: '',
			figma: '',
			storybook: '',
			cdn: ''
		}
	]
};

/**
 ** ComponentLayout - Displays component information with optional status bar and editing capabilities
 */
export const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children, className = '', statusBar = true }) => {
	// 🪝 Hooks
	const location = useLocation();
	const { isAuthenticated } = useAuth0();

	// 🏷️ State
	const [modalVisibility, setModalVisibility] = useState<'' | 'hidden'>(MODAL_VISIBILITY.HIDE);
	const [selectedRecord, setSelectedRecord] = useState<IComponentApi>(DEFAULT_VALUES);
	const [currentVersion, setCurrentVersion] = useState('V2');

	// 🧠 Redux
	const state = useSelector((state: RootState) => state.currentComponent.currentComponent);

	const { id, name, category, description, statuses, figmaLink, storybookLink, image } = state ?? {};

	const isWipComponent = useMemo(() => location.pathname.split('/').pop() === 'Wipcomponent', [location.pathname]);

	const hasLinks = Boolean(figmaLink || storybookLink);

	// 🎬 Event handlers
	const toggleModal = useCallback(() => {
		setModalVisibility((prev) => (prev === MODAL_VISIBILITY.HIDE ? MODAL_VISIBILITY.SHOW : MODAL_VISIBILITY.HIDE));
	}, []);

	const handleEdit = useCallback(() => {
		if (id) {
			setSelectedRecord(state as IComponentApi);
			toggleModal();
		}
	}, [id, state, toggleModal]);

	const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedVersion = event.target.value;
		setCurrentVersion(selectedVersion);
	};

	return (
		<main className={`container mx-auto ${className}`} data-testid="component-layout">
			<header className="flex flex-row place-content-between items-start">
				<div className="flex flex-col gap-2">
					{category && <small className="text-sm text-primary-blue block">{category}</small>}

					<h1 className="font-bold text-3xl mb-3 flex items-center gap-2">
						{isWipComponent && <span>WIP: </span>}
						{name}
						{isAuthenticated && (
							<button onClick={handleEdit} aria-label="Edit component" title="Edit component" className="pb-1">
								<FontAwesomeIcon
									icon={faPencil}
									className="size-5 opacity-10 hover:opacity-80 transition-all cursor-pointer"
								/>
							</button>
						)}
					</h1>

					{statusBar && (statuses?.length ?? 0) > 0 && <MscStatusComponentBar id={id} stats={statuses ?? []} />}

					{hasLinks && <Links storybookLink={storybookLink} figmaLink={figmaLink} />}

					<p className="mb-4">{description || "This component doesn't have any description yet"}</p>
				</div>

				<select
					className="px-3 py-1 bg-white justify-center rounded-md border border-monochromes-grey_xlight"
					onChange={handleVersionChange}
				>
					<option
						className="w-full flex items-center justify-center text-sm text-monochromes-grey_light hover:bg-monochromes-grey_xlight hover:text-black transition-all cursor-pointer"
						value="V2"
					>
						v2
					</option>
					<option
						className="w-full flex items-center justify-center text-sm text-monochromes-grey_light hover:bg-monochromes-grey_xlight hover:text-black transition-all cursor-pointer"
						value="V1"
					>
						v1
					</option>
				</select>
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
				{image ? (
					<img src={image} alt={`${name} component visualization`} />
				) : currentVersion === 'V2' ? (
					<div key={currentVersion}>{children}</div> // forces rerender when version changes
				) : (
					<MscTypographyPageV1 />
				)}
			</section>
		</main>
	);
};

export default ComponentLayout;
