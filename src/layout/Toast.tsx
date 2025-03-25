import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckCircle,
	faExclamationCircle,
	faInfoCircle,
	faWarning,
	faClose
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeToast } from '../redux/slices/toastSlice';

const toastConfig: { [key: string]: { icon: any; color: string; border: string } } = {
	success: { icon: faCheckCircle, color: 'text-green-600', border: 'border-green-600' },
	warning: { icon: faWarning, color: 'text-yellow-500', border: 'border-yellow-500' },
	error: { icon: faExclamationCircle, color: 'text-red-600', border: 'border-red-600' },
	info: { icon: faInfoCircle, color: 'text-blue-400', border: 'border-blue-400' }
};

const Toast: React.FC = () => {
	const dispatch = useDispatch();
	const toasts = useSelector((state: RootState) => state.toast.toasts);

	const handleClose = (id: string) => {
		dispatch(removeToast(id));
	};

	const getToastConfig = (status: string) => toastConfig[status] || toastConfig.info;

	return (
		<div className="absolute top-0 right-0 p-4 space-y-2 z-50">
			{toasts.map((toast) => {
				const { icon, color, border } = getToastConfig(toast.status);

				return (
					<div
						key={toast.id}
						className={`sticky flex flex-row items-center p-4 mb-2 bg-white border ${border} rounded-lg shadow-lg transition-all transform duration-500 ease-out h-fit w-[240px] justify-between`}
					>
						<div className="flex flex-row gap-1 items-center pt-[2px]">
							<FontAwesomeIcon icon={icon} className={`${color}`} />
							<p className="font-semibold">{toast.title}</p>
							{toast.description && <p className="text-sm text-gray-500">{toast.description}</p>}
						</div>
						<button onClick={() => handleClose(toast.id)}>
							<FontAwesomeIcon icon={faClose} className="text-gray-500" />
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Toast;
