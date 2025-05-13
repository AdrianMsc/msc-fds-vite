import React from 'react';
import FigmaIcon from '../../assets/icons/FigmaIcon';
import SBIcon from '../../assets/icons/SBIcon';

interface LinkItemProps {
	href: string;
	icon: React.ReactNode;
	text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, icon, text }) => (
	<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="flex items-center gap-1 text-primary-blue font-bold text-sm hover:underline transition-colors"
		aria-label={text}
	>
		{icon}
		<span>{text}</span>
	</a>
);

interface LinksProps {
	storybookLink?: string;
	figmaLink?: string;
}

export const Links: React.FC<LinksProps> = ({ storybookLink, figmaLink }) => {
	const hasLinks = Boolean(figmaLink || storybookLink);

	if (!hasLinks) return null;

	return (
		<div className="flex flex-row gap-2 mb-2" data-testid="resource-links">
			{figmaLink && <LinkItem href={figmaLink} icon={<FigmaIcon />} text="View in Figma" />}
			{storybookLink && <LinkItem href={storybookLink} icon={<SBIcon />} text="View in Storybook" />}
		</div>
	);
};

export default Links;
