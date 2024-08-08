import { Outlet } from "react-router-dom";
import categories from "../../categories.json";
import Directory from "../../components/directory/directory.component";

const Home = () => (
	<>
		<Directory categories={categories} />
		<Outlet />
	</>
);

export default Home;
