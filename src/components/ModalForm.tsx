import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { updateField, resetForm, IFormState, setComponentData } from '../redux/slices/formSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { IComponentApi } from '../interfaces/component.interface';
import { addComponent, updateComponentThunk } from '../redux/slices/componentsSlice';
import { addToast, removeToast } from '../redux/slices/toastSlice';

interface ModalFormProps {
	triggerModal: string;
	toggleModal: () => void;
	setSelectedRecord: (component: IComponentApi) => void;
	title: string;
	buttonOne: string;
	buttonTwo: string;
	selectedRecord: IComponentApi;
	emptyValues: IComponentApi;
}

const ModalForm: React.FC<ModalFormProps> = ({
	triggerModal,
	toggleModal,
	title,
	buttonOne,
	buttonTwo = 'Cancel',
	selectedRecord,
	setSelectedRecord,
	emptyValues
}) => {
	const dispatch = useDispatch<AppDispatch>();
	const formState = useSelector((state: RootState) => state.form);
	const [isVisible, setIsVisible] = useState(false);
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		if (triggerModal !== 'hidden') {
			setIsVisible(true); // Show modal
			setTimeout(() => setFadeIn(true), 50); // Apply fade-in
		}
	}, [triggerModal]);

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

	useEffect(() => {
		if (selectedRecord.id === 0) {
			dispatch(resetForm());
		} else {
			const formattedData: any = {
				id: selectedRecord.id,
				name: selectedRecord.name,
				category: selectedRecord.category,
				comment: selectedRecord.comment,
				cdn: selectedRecord.statuses[0].cdn,
				figma: selectedRecord.statuses[0].figma,
				guidelines: selectedRecord.statuses[0].guidelines,
				storybook: selectedRecord.statuses[0].storybook
			};
			dispatch(setComponentData(formattedData));
		}
	}, [selectedRecord]);

	const handleCancel = () => {
		dispatch(resetForm());
		setSelectedRecord(emptyValues);
		setFadeIn(false); // Apply fade-out effect
		setTimeout(() => {
			setIsVisible(false); // Hide after fade-out completes
			toggleModal();
		}, 300);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		dispatch(
			updateField({
				field: e.target.name as keyof IFormState,
				value: e.target.value
			})
		);
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (formState.id === '') {
			const componentCasted = {
				...formState,
				id: Number(formState.id)
			};
			const response: any = await dispatch(addComponent(componentCasted));
			if (response.payload.id != 0) {
				showToast('success', 'Component created');
			}
		} else {
			const componentCasted = {
				...formState,
				id: Number(formState.id)
			};
			const response: any = await dispatch(updateComponentThunk(componentCasted));
			if (response.payload.id != 0) {
				showToast('success', 'Component updated');
			}
		}
		setFadeIn(false); // Apply fade-out effect
		setTimeout(() => {
			setIsVisible(false); // Hide after fade-out completes
			toggleModal();
		}, 300);
		dispatch(resetForm());
	};

	return isVisible ? (
		<div
			className={`msc-modal-bg !fixed ${triggerModal} !bg-[#00000087] transition-opacity duration-300 ${
				fadeIn ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="msc-modal">
				<div className="msc-modal-header">
					<h4 className="msc-modal-title">{title}</h4>
					<button onClick={handleCancel}>
						<FontAwesomeIcon icon={faClose} />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="msc-modal-body pb-4 overflow-hidden">
						<div className="flex flex-col w-full gap-5">
							<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[600px]">
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									<label htmlFor="name" className="font-bold">
										Name
									</label>
									<input name="id" type="text" className="hidden" value={formState.id} onChange={handleChange} />
									<input
										name="name"
										type="text"
										className="msc-input !w-full"
										value={formState.name}
										onChange={handleChange}
									/>
								</div>
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									<label htmlFor="category" className="font-bold">
										Category
									</label>
									<select name="category" className="msc-input !p-2" value={formState.category} onChange={handleChange}>
										<option value="">-- Select a category --</option>
										<option value="Foundations">Foundations</option>
										<option value="Action">Action</option>
										<option value="Form">Form</option>
										<option value="Indicator">Indicator</option>
										<option value="Layout">Layout</option>
										<option value="Navigation">Navigation</option>
										<option value="Overlay">Overlay</option>
									</select>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[600px]">
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									<label htmlFor="guidelines" className="font-bold">
										Guidelines
									</label>
									<select
										name="guidelines"
										className="msc-input !p-2"
										value={formState.guidelines}
										onChange={handleChange}
									>
										<option value="🧱">🧱 Todo</option>
										<option value="🔨">🔨 WIP</option>
										<option value="🔭">🔭 Alpha</option>
										<option value="🧪">🧪 Beta</option>
										<option value="✅">✅ Live</option>
										<option value="🚫">🚫 Not Applicable</option>
									</select>
								</div>
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									<label htmlFor="figma" className="font-bold">
										Figma
									</label>
									<select name="figma" className="msc-input !p-2" value={formState.figma} onChange={handleChange}>
										<option value="🧱">🧱 Todo</option>
										<option value="🔨">🔨 WIP</option>
										<option value="🔭">🔭 Alpha</option>
										<option value="🧪">🧪 Beta</option>
										<option value="✅">✅ Live</option>
										<option value="🚫">🚫 Not Applicable</option>
									</select>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[600px]">
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									<label htmlFor="storybook" className="font-bold">
										Storybook
									</label>
									<select
										name="storybook"
										className="msc-input !p-2"
										value={formState.storybook}
										onChange={handleChange}
									>
										<option value="🧱">🧱 Todo</option>
										<option value="🔨">🔨 WIP</option>
										<option value="🔭">🔭 Alpha</option>
										<option value="🧪">🧪 Beta</option>
										<option value="✅">✅ Live</option>
										<option value="🚫">🚫 Not Applicable</option>
									</select>
								</div>
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									<label htmlFor="cdn" className="font-bold">
										CDN
									</label>
									<select name="cdn" className="msc-input !p-2" value={formState.cdn} onChange={handleChange}>
										<option value="🧱">🧱 Todo</option>
										<option value="🔨">🔨 WIP</option>
										<option value="🔭">🔭 Alpha</option>
										<option value="🧪">🧪 Beta</option>
										<option value="✅">✅ Live</option>
										<option value="🚫">🚫 Not Applicable</option>
									</select>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="figmaLink" className="font-bold">
									Figma Link
								</label>
								<textarea
									name="figmaLink"
									className="msc-input !p-2 w-full"
									value={formState.figmaLink}
									onChange={handleChange}
								></textarea>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="storybookLink" className="font-bold">
									Storybook Link
								</label>
								<textarea
									name="storybookLink"
									className="msc-input !p-2 w-full"
									value={formState.storybookLink}
									onChange={handleChange}
								></textarea>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="comment" className="font-bold">
									Comments
								</label>
								<textarea
									name="comment"
									className="msc-input !p-2 w-full"
									value={formState.comment}
									onChange={handleChange}
								></textarea>
							</div>
						</div>
					</div>
					<div className="msc-modal-footer">
						<button type="submit" className="msc-btn msc-btn-blue-solid w-full">
							{buttonOne}
						</button>
						<button type="reset" onClick={handleCancel} className="msc-btn msc-btn-blue-outline w-full">
							{buttonTwo}
						</button>
					</div>
				</form>
			</div>
		</div>
	) : null;
};

export default ModalForm;
