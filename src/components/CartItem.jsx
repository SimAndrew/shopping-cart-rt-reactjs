import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice.js';
import { ChevronDown, ChevronUp } from '../icons.jsx';

const CartItem = ({ id, img, title, price, amount }) => {
	const dispatch = useDispatch();

	return (
		<article className="cart-item">
			<img src={img} alt={title} />

			<div>
				<h4>{title}</h4>
				<h4 className="item-price">${price}</h4>
				<button
					onClick={() => {
						dispatch(removeItem(id));
					}}
					className="remove-btn"
				>
					remove
				</button>
			</div>

			<div>
				<button className="amount-btn">
					<ChevronUp />
				</button>
				<p className="amount">{amount}</p>
				<button className="amount-btn">
					<ChevronDown />
				</button>
			</div>
		</article>
	);
};

export default CartItem;
