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
			<main className="flex flex-row bg-off_white h-screen w-screen overflow-hidden">
				<Sidebar />
				<div className="flex flex-col overflow-y-scroll overflow-x-visible w-full">
					<div className="flex px-8 pt-5 md:px-15 xl:px-20 flex-1">
						<Outlet context={{ toggleModal }} />
					</div>
					<Footer toggleModal={toggleModal} />
				</div>
			</main>
			<Toast />
			<Dialog />
			<ModalFeedback showModal={showModal} toggleModal={toggleModal} />
		</>
	);
};

export default DocsLayout;
