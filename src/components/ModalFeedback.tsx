import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { addToast, removeToast } from '../redux/slices/toastSlice';
import { IFormStateFB, resetForm, updateField } from '../redux/slices/feedbackFormSlice';
import { addFeedback } from '../redux/slices/feedbackSlice';

interface ModalFeedbackProps {
	showModal: string;
	toggleModal: () => void;
}

const ModalFeedback: React.FC<ModalFeedbackProps> = ({ showModal, toggleModal }) => {
	const dispatch = useDispatch<AppDispatch>();
	const formState = useSelector((state: RootState) => state.feedbackForm);
	const [isVisible, setIsVisible] = useState(false);
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		if (showModal !== 'hidden') {
			setIsVisible(true); // Show modal
			setTimeout(() => setFadeIn(true), 50); // Apply fade-in
		}
	}, [showModal]);

	const showToast = (status: string, title: string, description?: string) => {
		const id = Date.now().toString();
		dispatch(
			addToast({
				id,
				status,
				title,
				description
			})
		);

		setTimeout(() => {
			dispatch(removeToast(id));
		}, 4000);
	};

	const handleCancel = () => {
		dispatch(resetForm());
		setFadeIn(false); // Apply fade-out effect
		setTimeout(() => {
			setIsVisible(false); // Hide after fade-out completes
			toggleModal();
		}, 300);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		dispatch(
			updateField({
				field: e.target.name as keyof IFormStateFB,
				value: e.target.value
			})
		);
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const fbCasted = {
			...formState,
			id: Number(formState.id)
		};
		const response: any = await dispatch(addFeedback(fbCasted));
		if (response.payload.id != 0) {
			showToast('success', 'Feedback sent', 'Thanks for your comments!');
		}
		dispatch(resetForm());
		setFadeIn(false); // Apply fade-out effect
		setTimeout(() => {
			setIsVisible(false); // Hide after fade-out completes
			toggleModal();
		}, 300);
	};

	return isVisible ? (
		<div
			className={`msc-modal-bg !fixed ${showModal} !bg-[#00000087] transition-opacity duration-300 ${
				fadeIn ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="msc-modal">
				<div className="msc-modal-header">
					<h4 className="msc-modal-title">Share your feedback 📬</h4>
					<button onClick={handleCancel}>
						<FontAwesomeIcon icon={faClose} />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="msc-modal-body pb-4 sm:!w-fit overflow-hidden">
						<div className="flex flex-col gap-5">
							<div className="flex flex-col sm:flex-row gap-2 min-w-[300px] sm:w-[600px]">
								<div className="flex flex-col gap-1 sm:!w-[50%]">
									<label htmlFor="name" className="font-bold">
										Name
									</label>
									<input
										name="name"
										type="text"
										className="msc-input !w-full"
										value={formState.name}
										onChange={handleChange}
									/>
								</div>
								<div className="flex flex-col gap-1 sm:!w-[50%]">
									<label htmlFor="email" className="font-bold">
										Email
									</label>
									<input
										name="email"
										type="email"
										className="msc-input !w-full"
										value={formState.email}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="message" className="font-bold">
									Message
								</label>
								<textarea
									name="message"
									className="msc-input !p-2 h-[150px]"
									value={formState.message}
									onChange={handleChange}
								></textarea>
							</div>
						</div>
					</div>
					<div className="msc-modal-footer">
						<button type="submit" className="msc-btn msc-btn-blue-solid w-full">
							Send
						</button>
						<button type="reset" onClick={handleCancel} className="msc-btn msc-btn-blue-outline w-full">
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	) : null;
};

export default ModalFeedback;
