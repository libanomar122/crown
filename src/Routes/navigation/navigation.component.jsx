import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase.utils";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<div className="logo">
						<CrwnLogo className="logo" />
					</div>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							{" "}
							Sign Out{" "}
						</span>
					) : (
						<Link className="nav-link" to="/sign-in">
							Sign In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
