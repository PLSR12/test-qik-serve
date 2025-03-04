import { Routes, Route } from "react-router";
import Menu from "../pages/Menu";
import AuthLayout from "../layouts/AuthLayout";

const Router = () => {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="/" element={<Menu />} />
			</Route>
		</Routes>
	);
};

export default Router;
