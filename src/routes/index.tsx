import { Routes, Route, Navigate } from "react-router";
import Menu from "../pages/Menu";
import AuthLayout from "../layouts/AuthLayout";
import { useEffect } from "react";
import i18n from "../utils/i18n";

const Router = () => {
	useEffect(() => {
		i18n.init().then(() => {
			console.log("Traduções carregadas:", i18n.t("greeting"));
		});
	}, []);
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
