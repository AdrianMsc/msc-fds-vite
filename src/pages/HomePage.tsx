import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Lottie from 'react-lottie';
import animation from '../assets/animation.json';
import MscMiniLoading from '../components/MscMiniLoading/MscMiniLoading';
import MscLoginWidget from '../components/MscLoginWidget/MscLoginWidget';
import { RootState } from '../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare, faBook } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	const [hsFlag, setHsFlag] = useState('');
	const [isFading, setIsFading] = useState(false);
	const data = useSelector((state: RootState) => state.components);
	const [lottieSize, setLottieSize] = useState(600);

	useEffect(() => {
		const handleResize = () => {
			if (window.outerWidth < 500) {
				setLottieSize(400);
			} else {
				setLottieSize(600);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial call to set the size based on the current window size

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	useEffect(() => {
		if (data) {
			setHsFlag('👍');

			setTimeout(() => {
				setIsFading(true);
			}, 1500);
		}
	}, [data]);

	const { user, isAuthenticated, isLoading } = useAuth0();

	return (
		<main className="flex flex-col sm:justify-center items-center h-screen m-auto md:flex-row">
			<span
				className={`fixed top-3 right-3 transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}
			>
				{hsFlag ? hsFlag : <MscMiniLoading />}
			</span>

			<div className="flex flex-col md:flex-row my-auto">
				<div className="flex flex-col md:justify-center px-2 md:pl-16 w-full md:w-[45%] items-center h-fit md:h-screen">
					<div className="w-full text-center md:text-start">
						<h1 className="font-normal text-[3rem] xl:text-[4rem] leading-none mb-3 text-pretty">
							{isAuthenticated && (
								<small className="text-lg text-primary-blue font-bold">
									{isLoading ? 'Loading' : `Hello ${user?.name}`}
								</small>
							)}
							<br />
							Welcome to MSC Design System
						</h1>
						<h3 className="font-light text-pretty self-start">Empowering Innovation Through Unified Design.</h3>
					</div>

					<div className="py-5 gap-3 flex flex-wrap place-content-around md:place-content-between md:w-full sm:items-center sm:justify-center md:justify-normal">
						<Link className="msc-btn msc-btn-blue-solid order-2" to="/docs/Gettingstarted">
							Go to Docs
							<FontAwesomeIcon icon={faArrowRight} className="ml-2" height={16} width={16} />
						</Link>

						{isAuthenticated ? (
							<Link
								className="msc-text-link py-3 order-3"
								to="https://adrianmsc.github.io/msc-fuel-design-system-react/?path=/docs/configure-your-project--docs"
							>
								Storybook
								<FontAwesomeIcon icon={faBook} className=" mr-5 ml-2 text-[#ff4785]" height={16} width={16} />
							</Link>
						) : (
							''
						)}

						<Link className="msc-text-link py-3 order-3" to="https://ds-blog-ten.vercel.app/">
							Release Notes
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" height={16} width={16} />
						</Link>

						<MscLoginWidget className={'relative order-1'} type="button" logoutBtn={false} />
					</div>
				</div>

				<div className="self-start items-center md:self-center w-full">
					<Lottie options={defaultOptions} height={lottieSize} width={lottieSize} />
				</div>
			</div>
		</main>
	);
}
