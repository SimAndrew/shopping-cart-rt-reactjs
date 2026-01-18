import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice.js';
import { clearCart } from '../features/cart/cartSlice.js';

const Modal = () => {
	const dispatch = useDispatch();

	const handleConfirm = () => {
		dispatch(clearCart());
		dispatch(closeModal());
	};

	const handleCancel = () => {
		dispatch(closeModal());
	};

	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>remove all items from your shopping cart?</h4>

				<div className="btn-container">
					<button
						type="button"
						onClick={handleConfirm}
						className="btn confirm-btn"
					>
						confirm
					</button>

					<button
						type="button"
						onClick={handleCancel}
						className="btn clear-btn"
					>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
};

export default Modal;
