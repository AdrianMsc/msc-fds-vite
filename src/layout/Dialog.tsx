import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../redux/slices/dialogSlice';
import { RootState } from '../redux/store';
import { useEffect, useState } from 'react';

const Dialog: React.FC = () => {
	const dispatch = useDispatch();
	const { isOpen, title, text, onConfirm } = useSelector((state: RootState) => state.dialog);

	const [isVisible, setIsVisible] = useState(false);
	const [fadeIn, setFadeIn] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true); // Make it render
			setFadeIn(false); // Reset fadeIn immediately

			// Ensure the fade-in transition happens AFTER render
			setTimeout(() => {
				setFadeIn(true);
			}, 50);
		} else {
			setFadeIn(false); // Start fade-out
			setTimeout(() => setIsVisible(false), 300); // Hide after animation
		}
	}, [isOpen]);

	const handleCancel = () => {
		dispatch(closeDialog());
	};

	const handleConfirm = () => {
		if (onConfirm) {
			onConfirm();
		}
		dispatch(closeDialog());
	};

	if (!isVisible) return null; // Prevent rendering when fully hidden

	return (
		<div
			className={`fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-[#00000087] transition-opacity duration-300 ease-out ${
				fadeIn ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div
				className={`msc-dialog transition-all duration-300 ease-out transform ${
					fadeIn ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
				}`}
			>
				<h4 className="msc-dialog-title">{title}</h4>
				<p>{text}</p>
				<div className="msc-dialog-footer">
					<button className="msc-btn msc-btn-transparent" onClick={handleCancel}>
						Cancel
					</button>
					<button className="msc-btn msc-btn-blue-solid" onClick={handleConfirm}>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
