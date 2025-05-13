import React, { ReactNode } from 'react';
import MscStatusComponentBar from '../../components/MscStatusComponentBar/MscStatusComponentBar';
import Links from '../../components/Links/Links';
import { useLocation } from 'react-router-dom';

interface LocationState {
	id?: number;
	name?: string;
	category?: string;
	description?: string;
	statuses?: Array<any>; // Consider defining a proper type for statuses
	figmaLink?: string;
	storybookLink?: string;
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

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children, className = '', statusBar = true }) => {
	const location = useLocation();
	const state = (location.state as LocationState) || {};
	const { id, name, category, description, statuses, figmaLink, storybookLink } = state;

	const currentRoute = location.pathname.split('/').pop() || '';
	const isWipComponent = currentRoute === 'Wipcomponent';
	const hasLinks = Boolean(figmaLink || storybookLink);

	return (
		<main className={`container mx-auto ${className}`} data-testid="component-layout">
			<header>
				<h1 className="font-bold text-3xl mb-3">
					{category && <small className="text-sm text-primary-blue block">{category}</small>}
					{isWipComponent && <span>WIP: </span>}
					{name}
				</h1>

				{statusBar && statuses && <MscStatusComponentBar id={id} stats={statuses} />}

				{hasLinks && <Links storybookLink={storybookLink} figmaLink={figmaLink} />}

				<p className="mb-4">{description || "This component doesn't have any description yet"}</p>
			</header>

			<section>{children}</section>
		</main>
	);
};

export default ComponentLayout;
