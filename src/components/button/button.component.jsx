import "./button.style.scss";

export const BUTTON_TYPES_CLASS = {
	google: "google",
	inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPES_CLASS[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
