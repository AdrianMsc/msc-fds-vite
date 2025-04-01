import { Link } from 'react-router-dom';

const GettingStarted = () => {
	return (
		<>
			<h1 className="font-bold text-3xl mb-3">Welcome to the MSC Design System</h1>
			<h2 className="font-bold text-xl mt-5">Get Started</h2>
			<p className="text-balance">
				The MSC Design System is built on Tailwind CSS, offering a highly customizable component library. While
				customization is possible, we recommend following the design system guidelines for consistency and usability.
			</p>

			<h2 className="font-bold text-xl mt-5">Configuration File</h2>
			<p>The configuration file defines key styles aligned with MSC’s corporate identity, including:</p>

			<ul className="list-disc mt-3 pl-10">
				<li>Colors 🎨</li>
				<li>Spacing 📏</li>
				<li>Fonts* 🔤</li>
				<li>Customized Components 🛠️</li>
			</ul>
			<br></br>
			<p>*Font customization may be limited based on guidelines.</p>

			<h2 className="font-bold text-xl mt-5">Component Status</h2>
			<p className="mb-2">
				Stay up to date with our latest progress! Check the development status of all components currently in the works.
			</p>
			<Link className="flex w-fit items-center text-primary-blue" to="/component-status">
				➡️ View status
				<i className="fa-solid fa-arrow-up ml-2 mb-[2px] rotate-45"></i>
			</Link>
			<h2 className="font-bold text-xl mt-5">How to Setup</h2>
			<p className="mb-2">Follow these simple steps to integrate the MSC Design System via CDN.</p>
			<a
				target="_blank"
				className="flex w-fit items-center text-primary-blue"
				href="https://mscdirectjira.atlassian.net/wiki/spaces/PD/pages/2251456570/How+to+get+setup"
			>
				📖 Learn More
				<i className="fa-solid fa-arrow-up ml-2 mb-[2px] rotate-45"></i>
			</a>
			<h2 className="font-bold text-xl mt-5">Batch Release Notes ⬇️</h2>
			<p className="mb-2">Explore the latest updates and releases in the design system.</p>
			<a target="_blank" className="flex w-fit items-center text-primary-blue" href="https://ds-blog-ten.vercel.app/">
				<img src="./../../public/cover.webp" className="h-[200px] rounded-md" />
			</a>
		</>
	);
};

export default GettingStarted;
