import { useDispatch, useSelector } from 'react-redux';
import { closeDialog } from '../redux/slices/dialogSlice';
import { RootState } from '../redux/store';

const Dialog: React.FC = () => {
	const dispatch = useDispatch();
	const { isOpen, title, text, onConfirm } = useSelector((state: RootState) => state.dialog);

	const handleCancel = () => {
		dispatch(closeDialog());
	};

	const handleConfirm = () => {
		if (onConfirm) {
			onConfirm(); // Execute the callback or action passed via onConsfirm
		}
		dispatch(closeDialog()); // Close the dialog after confirming
	};

	if (!isOpen) return null; // Don't render the dialog if it's not open

	return (
		<div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-[#00000087]">
			<div className="msc-dialog">
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
