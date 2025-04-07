import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Toast from './Toast';
import Dialog from './Dialog';
import Footer from './Footer';
import ModalFeedback from '../components/ModalFeedback';

const DocsLayout = () => {
	const [showModal, setShowModal] = useState('hidden');

	const toggleModal = () => {
		setShowModal((prev) => (prev === 'hidden' ? '' : 'hidden'));
	};
	return (
		<>
			<Navbar />
			<main className="flex flex-row pt-[75px] bg-off_white h-screen w-screen overflow-hidden">
				<Sidebar />
				<div className="flex flex-col w-full place-content-between">
					<div className="flex flex-col overflow-y-scroll overflow-x-visible w-full h-full pt-4 place-content-between">
						<div className="px-8 md:px-15 xl:px-20 w-full pb-4">
							<Outlet context={{ toggleModal }} />
						</div>
						<Footer toggleModal={toggleModal} />
					</div>
				</div>
			</main>
			<Toast />
			<Dialog />
			<ModalFeedback showModal={showModal} toggleModal={toggleModal} />
		</>
	);
};

export default DocsLayout;
