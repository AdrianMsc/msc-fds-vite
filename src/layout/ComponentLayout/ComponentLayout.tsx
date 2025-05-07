import React, { ReactNode, useEffect, useState } from 'react';
import MscStatusComponentBar from '../../components/MscStatusComponentBar/MscStatusComponentBar';
import { useLocation } from 'react-router-dom';
import { createSBLink } from '../../utils/createSBLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

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
	const [figmaLink, setFigmaLink] = useState('');
	const location = useLocation();

	const { id, name, category, description, statuses } = location.state || {};
	const route = location.pathname.split('/').pop();
	const hasFigma = statuses && statuses[0] && statuses[0].storybook === '✅';

	useEffect(() => {
		console.log(hasFigma);
		if (hasFigma) {
			const figmaLink = createSBLink(name, category);
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
			{hasFigma && (
				<a href={figmaLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 no-underline">
					<FontAwesomeIcon icon={faBook} className="text-[#ff4785]" height={16} width={16} />
					<span className="text-sm text-primary-blue">See in Storybook</span>
				</a>
			)}
			<p className="my-2">{description ? description : "This component doesn't have any description yet"}</p>
			{children}
		</main>
	);
};

export default ComponentLayout;
