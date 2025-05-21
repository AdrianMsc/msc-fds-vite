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

const ANIMATION_DURATION = 300; // milliseconds for fade animation
const TOAST_DURATION = 4000; // milliseconds for toast visibility

const CATEGORY_OPTIONS = [
	{ value: '', label: '-- Select a category --' },
	{ value: 'Foundations', label: 'Foundations' },
	{ value: 'Action', label: 'Action' },
	{ value: 'Form', label: 'Form' },
	{ value: 'Indicator', label: 'Indicator' },
	{ value: 'Layout', label: 'Layout' },
	{ value: 'Navigation', label: 'Navigation' },
	{ value: 'Overlay', label: 'Overlay' }
];

const STATUS_OPTIONS = [
	{ value: '🧱', label: '🧱 Todo' },
	{ value: '🔨', label: '🔨 WIP' },
	{ value: '🔭', label: '🔭 Alpha' },
	{ value: '🧪', label: '🧪 Beta' },
	{ value: '✅', label: '✅ Live' },
	{ value: '🚫', label: '🚫 Not Applicable' }
];

//* Map component data to form data structure
export const mapComponentToFormData = (component: IComponentApi): any => {
	return {
		id: component.id,
		name: component.name,
		category: component.category,
		comment: component.comment,
		image: component.image,
		cdn: component.statuses[0].cdn,
		figma: component.statuses[0].figma,
		guidelines: component.statuses[0].guidelines,
		storybook: component.statuses[0].storybook,
		figmaLink: component.figmaLink,
		storybookLink: component.storybookLink
	};
};

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
	const [isEditingImage, setIsEditingImage] = useState(false);

	useEffect(() => {
		if (triggerModal !== 'hidden') {
			setIsVisible(true);
			setTimeout(() => setFadeIn(true), 50);
		}
	}, [triggerModal]);

	//* Initialize form data based on whether we're editing or creating
	useEffect(() => {
		if (selectedRecord.id === 0) {
			dispatch(resetForm());
		} else {
			const formattedData = mapComponentToFormData(selectedRecord);
			dispatch(setComponentData(formattedData));
		}
	}, [selectedRecord, dispatch]);

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
		}, TOAST_DURATION);
	};

	const closeModalWithAnimation = () => {
		setFadeIn(false);
		setTimeout(() => {
			setIsVisible(false);
			toggleModal();
		}, ANIMATION_DURATION);
	};

	const handleCancel = () => {
		dispatch(resetForm());
		setSelectedRecord(emptyValues);
		closeModalWithAnimation();
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

		const componentCasted = {
			...formState,
			id: Number(formState.id)
		};

		//* Check if we're creating or updating a component
		const isNewComponent = formState.id === '';
		const actionType = isNewComponent ? 'created' : 'updated';

		//* Dispatch the appropriate action directly instead of using a variable
		let response: any;
		if (isNewComponent) {
			response = await dispatch(addComponent(componentCasted));
		} else {
			response = await dispatch(updateComponentThunk(componentCasted));
		}

		if (response.payload && response.payload.id !== 0) {
			showToast('success', `Component ${actionType}`);
		}

		closeModalWithAnimation();
		dispatch(resetForm());
	};

	const renderFieldGroup = (id: string, label: string, children: React.ReactNode) => (
		<div className="flex flex-col gap-1 w-full">
			<label htmlFor={id} className="font-bold">
				{label}
			</label>
			{children}
		</div>
	);

	const renderSelectField = (name: string, value: string, options: Array<{ value: string; label: string }>) => (
		<select name={name} className="msc-input !p-2" value={value} onChange={handleChange}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);

	const renderTextField = (
		name: string,
		value: string | File | null | undefined,
		isTextarea: boolean = false,
		isImage: boolean = false
	) => {
		if (isImage) {
			return (
				<input
					type="file"
					name={name}
					onChange={(e) => {
						const file = e.target.files?.[0] || null;
						dispatch(updateField({ field: 'image', value: file }));
					}}
				/>
			);
		}

		const commonProps = {
			name,
			onChange: handleChange,
			className: isTextarea ? 'msc-input !p-2 w-full' : 'msc-input !w-full'
		} as const;

		if (isTextarea) {
			return <textarea {...commonProps} value={value as string} />;
		}

		return <input type="text" {...commonProps} value={value as string} />;
	};

	//* Don't render anything if not visible
	if (!isVisible) return null;

	return (
		<div
			className={`msc-modal-bg !fixed ${triggerModal} !bg-[#00000087] transition-opacity duration-300 z-50 ${
				fadeIn ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div className="msc-modal flex flex-col max-h-[90vh]">
				<div className="msc-modal-header">
					<h4 className="msc-modal-title">{title}</h4>
					<button onClick={handleCancel}>
						<FontAwesomeIcon icon={faClose} />
					</button>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
					<div className="msc-modal-body flex-1 pb-4 overflow-y-auto">
						<div className="flex flex-col w-full gap-5">
							{/* Hidden ID field */}
							<input name="id" type="text" className="hidden" value={formState.id} onChange={handleChange} />

							{/* Name and Category Row */}
							<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[600px]">
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									{renderFieldGroup('name', 'Name', renderTextField('name', formState.name))}
								</div>
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									{renderFieldGroup(
										'category',
										'Category',
										renderSelectField('category', formState.category, CATEGORY_OPTIONS)
									)}
								</div>
							</div>

							{/* Guidelines and Figma Row */}
							<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[600px]">
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									{renderFieldGroup(
										'guidelines',
										'Guidelines',
										renderSelectField('guidelines', formState.guidelines, STATUS_OPTIONS)
									)}
								</div>
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									{renderFieldGroup('figma', 'Figma', renderSelectField('figma', formState.figma, STATUS_OPTIONS))}
								</div>
							</div>

							{/* Storybook and CDN Row */}
							<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[600px]">
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									{renderFieldGroup(
										'storybook',
										'Storybook',
										renderSelectField('storybook', formState.storybook, STATUS_OPTIONS)
									)}
								</div>
								<div className="flex flex-col gap-1 w-full sm:!w-[50%]">
									{renderFieldGroup('cdn', 'CDN', renderSelectField('cdn', formState.cdn, STATUS_OPTIONS))}
								</div>
							</div>

							{/* Image Row */}
							<div className="flex flex-col gap-1 w-full">
								{renderFieldGroup(
									'image',
									'Image',
									<>
										{!isEditingImage && (formState.image || selectedRecord.image) && (
											<div className="flex flex-col gap-2">
												<img
													src={
														formState.image instanceof File
															? URL.createObjectURL(formState.image)
															: typeof formState.image === 'string'
															? formState.image
															: selectedRecord.image ?? ''
													}
													alt="Preview"
													className="max-w-[150px] h-auto"
												/>
												<button
													type="button"
													onClick={() => setIsEditingImage(true)}
													className="msc-btn msc-btn-blue-outline !max-w-[150px] !px-2"
												>
													Change Image
												</button>
											</div>
										)}

										{(isEditingImage || (!formState.image && !selectedRecord.image)) && (
											<input
												type="file"
												name="image"
												onChange={(e) => {
													const file = e.target.files?.[0] || null;
													dispatch(updateField({ field: 'image', value: file }));
													setIsEditingImage(false); // Exit edit mode on file select
												}}
											/>
										)}
									</>
								)}
							</div>

							{/* Links and Comments */}
							{renderFieldGroup('figmaLink', 'Figma Link', renderTextField('figmaLink', formState.figmaLink, true))}
							{renderFieldGroup(
								'storybookLink',
								'Storybook Link',
								renderTextField('storybookLink', formState.storybookLink, true)
							)}
							{renderFieldGroup('comment', 'Comments', renderTextField('comment', formState.comment, true))}
						</div>
					</div>

					<div className="msc-modal-footer">
						<button type="reset" onClick={handleCancel} className="msc-btn msc-btn-blue-outline w-full">
							{buttonTwo}
						</button>
						<button type="submit" className="msc-btn msc-btn-blue-solid w-full">
							{buttonOne}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ModalForm;
