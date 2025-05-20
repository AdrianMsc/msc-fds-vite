import React, { ReactNode, useState, useCallback, useMemo } from 'react';
import MscStatusComponentBar from '../../components/MscStatusComponentBar/MscStatusComponentBar';
import Links from '../../components/Links/Links';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';
import ModalForm from '../../components/ModalForm';
import { IComponentApi } from '../../interfaces/component.interface';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface ComponentStatus {
	guidelines: string;
	figma: string;
	storybook: string;
	cdn: string;
}

interface LocationState {
	id?: number;
	name?: string;
	category?: string;
	description?: string;
	statuses?: ComponentStatus[];
	figmaLink?: string;
	storybookLink?: string;
	image?: string;
}

interface ComponentLayoutProps {
	id?: number;
	name?: string;
	category?: string;
	description?: string;
	children?: ReactNode;
	className?: string;
	statusBar?: boolean;
}

const MODAL_VISIBILITY = {
	SHOW: '',
	HIDE: 'hidden'
};

const defaultValuesEmpty: IComponentApi = {
	id: Number(''),
	name: '',
	category: '',
	comment: '',
	image: '',
	figmaLink: '',
	storybookLink: '',
	statuses: [
		{
			guidelines: '',
			figma: '',
			storybook: '',
			cdn: ''
		}
	]
};

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children, className = '', statusBar = true }) => {
	const [modalVisibility, setModalVisibility] = useState(MODAL_VISIBILITY.HIDE);
	const [selectedRecord, setSelectedRecord] = useState<IComponentApi>(defaultValuesEmpty);
	const location = useLocation();
	const { isAuthenticated } = useAuth0();
	const components = useSelector((state: RootState) => state.components);

	// * Extract and memoize location state to avoid unnecessary re-renders
	const state = useMemo(() => (location.state as LocationState) || {}, [location.state]);
	const { id, name, category, description, statuses, figmaLink, storybookLink, image } = state;
	const imageUrl = components
		.find((cat) => cat.category === category)
		?.components.find((comp) => comp.id === id)?.image;

	// * Extract route logic into reusable memo
	const isWipComponent = useMemo(() => location.pathname.split('/').pop() === 'Wipcomponent', [location]);
	const hasLinks = Boolean(figmaLink || storybookLink);

	const toggleModal = useCallback(() => {
		setModalVisibility((prev) => (prev === MODAL_VISIBILITY.HIDE ? MODAL_VISIBILITY.SHOW : MODAL_VISIBILITY.HIDE));
	}, []);

	const handleEdit = useCallback(() => {
		if (id) {
			setSelectedRecord(state as IComponentApi);
			toggleModal();
		}
	}, [id, state, toggleModal]);

	return (
		<main className={`container mx-auto ${className}`} data-testid="component-layout">
			<header>
				{category && <small className="text-sm text-primary-blue block">{category}</small>}

				<h1 className="font-bold text-3xl mb-3 flex items-center gap-2">
					{isWipComponent && <span>WIP: </span>}
					{name}
					{isAuthenticated && (
						<button onClick={handleEdit} aria-label="Edit component" title="Edit component" className="pb-1">
							{/* ! Using aria-label for accessibility */}
							<FontAwesomeIcon
								icon={faPencil}
								className="size-5 opacity-10 hover:opacity-80 transition-all cursor-pointer"
							/>
						</button>
					)}
				</h1>

				{/* * Conditional rendering with safe checks */}
				{statusBar && statuses?.length && <MscStatusComponentBar id={id} stats={statuses} />}
				{hasLinks && <Links storybookLink={storybookLink} figmaLink={figmaLink} />}
				<p className="mb-4">{description || "This component doesn't have any description yet"}</p>
			</header>

			<ModalForm
				triggerModal={modalVisibility}
				toggleModal={toggleModal}
				selectedRecord={selectedRecord}
				setSelectedRecord={setSelectedRecord}
				title="Edit Component"
				buttonOne="Update"
				buttonTwo="Cancel"
				emptyValues={defaultValuesEmpty}
			/>

			<section>{image ? <img src={imageUrl} alt={name} className="max-h-[500px]" /> : children}</section>
		</main>
	);
};

export default ComponentLayout;
