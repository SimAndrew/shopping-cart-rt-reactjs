import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import CartContainer from './components/CartContainer.jsx';
import { calculateTotals, getCartItems } from './features/cart/cartSlice.js';
import Modal from './components/Modal.jsx';

function App() {
	const { cartItems, isLoading } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems, dispatch]);

	useEffect(() => {
		dispatch(getCartItems());
	}, [dispatch]);

	if (isLoading) {
		return (
			<div className="loading">
				<h3>loading...</h3>
			</div>
		);
	}

	return (
		<main>
			{isOpen && <Modal />}
			<Navbar />;
			<CartContainer />
		</main>
	);
}

export default App;
