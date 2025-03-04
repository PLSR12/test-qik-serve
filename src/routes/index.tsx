import { Routes, Route } from "react-router";
import Menu from "../pages/Menu";
import AuthLayout from "../layouts/AuthLayout";
import NotFound from "../pages/NotFound";

const Router = () => {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path="/" element={<Menu />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Router;
