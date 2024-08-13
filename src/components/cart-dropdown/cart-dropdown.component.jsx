import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items"></div>
			<Link>
				<Button>Checkout</Button>
			</Link>
		</div>
	);
};

export default CartDropdown;
