import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar.jsx';
import CartContainer from './components/CartContainer.jsx';
import { calculateTotals } from './features/cart/cartSlice.js';

function App() {
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems, dispatch]);

	return (
		<main>
			<Navbar />;
			<CartContainer />
		</main>
	);
}

export default App;
