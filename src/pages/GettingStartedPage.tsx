import { Link, useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUp,
  faArrowUpRightFromSquare,
  faBookOpen,
  faCircle,
  faCube,
  faFile,
  faFileLines,
  faFont,
  faLayerGroup,
  faPalette,
  faPuzzlePiece,
  faRulerCombined,
  faSitemap,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { RootState } from '../redux/store';

type OutletContextType = {
  toggleModal: () => void;
};

const GettingStarted = () => {
  const { toggleModal } = useOutletContext<OutletContextType>();
  const components = useSelector((state: RootState) => state.components);

  const totalComponents = components.reduce(
    (sum, cat) => sum + cat.components.length,
    0,
  );
  const atomsCount = components
    .flatMap((c) => c.components)
    .filter((c) => c.atomicType?.toLowerCase().includes('atom')).length;
  const moleculesCount = components
    .flatMap((c) => c.components)
    .filter((c) => c.atomicType?.toLowerCase().includes('molecule')).length;
  const organismsCount = components
    .flatMap((c) => c.components)
    .filter((c) => c.atomicType?.toLowerCase().includes('organism')).length;
  const templatesCount = components
    .flatMap((c) => c.components)
    .filter((c) => c.atomicType?.toLowerCase().includes('template')).length;
  const pagesCount = components
    .flatMap((c) => c.components)
    .filter((c) => c.atomicType?.toLowerCase().includes('page')).length;

  return (
    <main className="pt-4 mx-auto container">
      <h1 className="font-bold text-3xl mb-3">
        Welcome to the MSC Design System Dev
      </h1>

      <h2 className="font-bold text-xl mt-5">Get Started</h2>
      <p className="text-balance">
        The MSC Design System is built on Tailwind CSS, offering a highly
        customizable component library. While customization is possible, we
        recommend following the design system guidelines for consistency and
        usability.
      </p>

      <h2 className="font-bold text-xl mt-5">Configuration File</h2>
      <p>
        The configuration file defines key styles aligned with MSC&apos;s
        corporate identity, including:
      </p>

      <ul className="list-disc mt-3 pl-10">
        <li>Colors 🎨</li>
        <li>Spacing 📏</li>
        <li>Fonts* 🔤</li>
        <li>Customized Components 🛠️</li>
      </ul>
      <br />
      <p>*Font customization may be limited based on guidelines.</p>

      {/* Design System Stats */}
      <h2 className="font-bold text-xl mt-8">Design System Stats</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mt-3">
        {[
          {
            label: 'Total',
            count: totalComponents,
            icon: faCube,
            color: 'text-primary-blue',
          },
          { label: 'Atoms', count: atomsCount, icon: faCircle, color: 'text-emerald-500' },
          {
            label: 'Molecules',
            count: moleculesCount,
            icon: faLayerGroup,
            color: 'text-violet-500',
          },
          {
            label: 'Organisms',
            count: organismsCount,
            icon: faPuzzlePiece,
            color: 'text-amber-500',
          },
          {
            label: 'Templates',
            count: templatesCount,
            icon: faFile,
            color: 'text-rose-500',
          },
          { label: 'Pages', count: pagesCount, icon: faFileLines, color: 'text-cyan-500' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border border-monochromes-grey_xlight rounded p-4 flex flex-col items-center gap-2 bg-white"
          >
            <FontAwesomeIcon
              icon={stat.icon}
              className={`text-2xl ${stat.color}`}
            />
            <span className="text-2xl font-bold">{stat.count}</span>
            <span className="text-sm text-gray-500">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Quick Links — Foundations */}
      <h2 className="font-bold text-xl mt-8">Foundations</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
        {[
          { label: 'Colors', path: '/docs/Colors', icon: faPalette },
          { label: 'Spacing', path: '/docs/Spacing', icon: faRulerCombined },
          { label: 'Typography', path: '/docs/Typography', icon: faFont },
          { label: 'Shadows', path: '/docs/Shadows', icon: faSun },
        ].map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="border border-monochromes-grey_xlight rounded p-4 flex items-center gap-3 bg-white hover:shadow-md transition-shadow"
          >
            <FontAwesomeIcon
              icon={link.icon}
              className="text-xl text-primary-blue"
            />
            <span className="font-medium">{link.label}</span>
          </Link>
        ))}
      </div>

      {/* Architecture & Ecosystem */}
      <h2 className="font-bold text-xl mt-8">Architecture &amp; Ecosystem</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
        <Link
          to="/docs/ArchitectureFlow"
          className="border border-monochromes-grey_xlight rounded p-4 flex items-center justify-between bg-white hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faSitemap}
              className="text-xl text-primary-blue"
            />
            <div>
              <p className="font-medium">Architecture Flow</p>
              <p className="text-sm text-gray-500">
                Project structure and data flow
              </p>
            </div>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-400" />
        </Link>
        <Link
          to="/docs/Ecosystem"
          className="border border-monochromes-grey_xlight rounded p-4 flex items-center justify-between bg-white hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-xl text-primary-blue"
            />
            <div>
              <p className="font-medium">Ecosystem</p>
              <p className="text-sm text-gray-500">Modules and technologies</p>
            </div>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-400" />
        </Link>
      </div>

      {/* External Resources */}
      <h2 className="font-bold text-xl mt-8">External Resources</h2>
      <div className="flex flex-wrap gap-3 mt-3">
        <a
          href="http://localhost:6006"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-monochromes-grey_xlight rounded px-4 py-3 flex items-center gap-2 bg-white hover:shadow-md transition-shadow"
        >
          <span className="font-medium">Storybook</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-xs text-gray-400"
          />
        </a>
        <a
          href="https://ds-blog-ten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-monochromes-grey_xlight rounded px-4 py-3 flex items-center gap-2 bg-white hover:shadow-md transition-shadow"
        >
          <span className="font-medium">Release Notes</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-xs text-gray-400"
          />
        </a>
      </div>

      <h2 className="font-bold text-xl mt-8">Component Status</h2>
      <p className="mb-2">
        Stay up to date with our latest progress! Check the development status
        of all components currently in the works.
      </p>
      <Link
        className="flex w-fit items-center text-primary-blue"
        to="/docs/ComponentStatus"
      >
        ➡️ View status
        <FontAwesomeIcon
          icon={faArrowUp}
          rotation={90}
          className="ml-2 mb-[2px]"
        />
      </Link>

      <h2 className="font-bold text-xl mt-5">How to Setup</h2>
      <p className="mb-2">
        Follow these simple steps to integrate the MSC Design System via CDN.
      </p>
      <a
        target="_blank"
        className="flex w-fit items-center text-primary-blue"
        href="https://mscdirectjira.atlassian.net/wiki/spaces/PD/pages/2251456570/How+to+get+setup"
        rel="noopener noreferrer"
      >
        📖 Learn More
        <FontAwesomeIcon
          icon={faArrowUp}
          rotation={90}
          className="ml-2 mb-[2px]"
        />
      </a>

      <h2 className="font-bold text-xl mt-5">Changelog</h2>
      <Link
        className="flex w-fit items-center text-primary-blue"
        to="/docs/ChangeLog"
      >
        ➡️ View Changes
        <FontAwesomeIcon
          icon={faArrowUp}
          rotation={90}
          className="ml-2 mb-[2px]"
        />
      </Link>

      <h2 className="font-bold text-xl mt-5">Batch Release Notes ⬇️</h2>
      <p className="mb-2">
        Explore the latest updates and releases in the design system.
      </p>
      <a
        target="_blank"
        className="flex w-fit items-center text-primary-blue"
        href="https://ds-blog-ten.vercel.app/"
        rel="noopener noreferrer"
      >
        <img src="/cover.webp" className="h-[200px] rounded-md" />
      </a>

      <h2 className="font-bold text-xl mt-5">Help us improve!</h2>
      <p className="mb-2">
        Tell us what you think about our app&apos;s features and design. Your
        feedback is valuable.
      </p>
      <button
        className="flex w-fit items-center text-primary-blue mb-4"
        onClick={toggleModal}
        type="button"
      >
        📝 Send Feedback
      </button>
    </main>
  );
};

export default GettingStarted;
