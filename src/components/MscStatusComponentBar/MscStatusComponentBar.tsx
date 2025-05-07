import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

interface Stats {
	guidelines: string;
	figma: string;
	storybook: string;
	cdn: string;
}

interface MscStatusComponentBarProps {
	id?: number;
	stats: Stats[];
}

const MscStatusComponentBar: React.FC<MscStatusComponentBarProps> = ({ id, stats }) => {
	const { isAuthenticated } = useAuth0();

	const currentStats =
		stats && stats.length > 0
			? stats[0]
			: {
					guidelines: 'N/A',
					figma: 'N/A',
					storybook: 'N/A',
					cdn: 'N/A'
			  };

	return (
		<>
			<ul className="w-fit flex gap-1 lg:gap-3 mb-2">
				<li className="hidden">{id}</li>
				<li>
					<b>Guidelines:</b> {currentStats.guidelines}
				</li>
				<li>
					<b>Figma:</b> {currentStats.figma}
				</li>
				<li>
					<b>Storybook:</b> {currentStats.storybook}
				</li>
				<li>
					<b>CDN:</b> {currentStats.cdn}
				</li>
				{isAuthenticated ? (
					<li>
						<FontAwesomeIcon icon={faPencil} className="opacity-20 hover:opacity-100 transition-all cursor-pointer " />
					</li>
				) : null}
			</ul>
		</>
	);
};

export default MscStatusComponentBar;
