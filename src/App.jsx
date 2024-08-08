import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import Shop from "./Routes/shop/shop.component";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}> 
				<Route index={true} element={<Home />} />
				<Route path="shop" element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
