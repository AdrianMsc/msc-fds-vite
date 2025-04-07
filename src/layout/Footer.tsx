interface FooterProps {
	toggleModal: () => void;
}

const Footer = ({ toggleModal }: FooterProps) => {
	return (
		<div className="flex flex-row w-full py-4 px-8 md:px-15 xl:px-20 bg-white place-content-between items-end">
			<div className="flex flex-row">
				<p className="text-xs text-gray-500">All Rights Reserved</p>
				<div className="border-l mx-3 border-gray-400"></div>
				<p className="text-xs text-gray-500">© 2000 - 2025 MSC Industrial Direct Co., Inc.</p>
			</div>
			<button className="msc-btn msc-btn-sm msc-btn-blue-outline" onClick={toggleModal}>
				Give Feedback
			</button>
		</div>
	);
};

export default Footer;
