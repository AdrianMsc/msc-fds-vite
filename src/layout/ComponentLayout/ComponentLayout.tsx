import React, { ReactNode, useEffect, useState } from 'react';
import MscStatusComponentBar from '../../components/MscStatusComponentBar/MscStatusComponentBar';
import { useLocation } from 'react-router-dom';
import { createSBLink } from '../../utils/createSBLink';
import SBIcon from '../../assets/icons/SBIcon';
import FigmaIcon from '../../assets/icons/FigmaIcon';
import { getFigmaLink } from '../../utils/getFigmaLink';
import { FigmaLinks } from '../../constants/FigmaLinks';

interface ComponentLayoutProps {
	id?: number;
	name?: string;
	category?: string;
	description?: string;
	children?: ReactNode;
	className?: string;
	statusBar?: boolean;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children, className, statusBar = true }) => {
	const [SBLink, setSBLink] = useState('');
	const [figmaLink, setFigmaLink] = useState<string | null>('');
	const location = useLocation();

	const { id, name, category, description, statuses } =
		(location.state as {
			id?: number;
			name?: keyof (typeof FigmaLinks)[keyof typeof FigmaLinks];
			category?: keyof typeof FigmaLinks;
			description?: string;
			statuses?: any;
		}) || {};
	const route = location.pathname.split('/').pop();
	const hasSB = statuses && statuses[0] && statuses[0].storybook === '✅';
	const hasFigmaLink = statuses && statuses[0] && statuses[0].figma === '✅';

	useEffect(() => {
		if (hasSB) {
			const SBLink = name && category ? createSBLink(name, category) : '';
			setSBLink(SBLink);
		}
		if (hasFigmaLink) {
			const figmaLink = name && category ? getFigmaLink(name, category) : null;

			setFigmaLink(figmaLink);
		}
	}, []);

	return (
		<main className={`${className ? className : ''} mx-auto container`}>
			<h1 className="font-bold text-3xl mb-3">
				<small className="text-sm text-primary-blue">{category}</small> <br />
				{route === 'Wipcomponent' ? 'WIP:' : ''} {name}
			</h1>
			{statusBar ? <MscStatusComponentBar id={id} stats={statuses} /> : ''}
			<div className="flex flex-row items-center gap-2">
				<p className="font-bold">Links:</p>
				{hasSB && (
					<a href={SBLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 no-underline">
						<SBIcon />
						<span className="text-sm text-primary-blue">Storybook</span>
					</a>
				)}
				{hasFigmaLink && figmaLink && (
					<a
						href={figmaLink}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1 no-underline"
					>
						<FigmaIcon />
						<span className="text-sm text-primary-blue">Figma</span>
					</a>
				)}
			</div>
			<p className="my-2">{description ? description : "This component doesn't have any description yet"}</p>
			{children}
		</main>
	);
};

export default ComponentLayout;
