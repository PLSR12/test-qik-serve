import { Routes, Route, Navigate } from "react-router";
import Menu from "../pages/Menu";
import AuthLayout from "../layouts/AuthLayout";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/menu" replace />} />

			<Route element={<AuthLayout />}>
				<Route path="/menu" element={<Menu />} />
			</Route>
		</Routes>
	);
};

export default Router;
