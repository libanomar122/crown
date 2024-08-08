import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
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
						SHOP
					</Link>
					{/* <Link className="nav-link"></Link>
					<Link className="nav-link"></Link>
					<Link className="nav-link"></Link> */}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
