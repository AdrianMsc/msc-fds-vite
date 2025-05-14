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
			</ul>
		</>
	);
};

export default MscStatusComponentBar;
