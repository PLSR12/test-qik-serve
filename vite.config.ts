import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(() => {
	return {
		plugins: [react()],
		envPrefix: "REACT_APP_",
		base: "/",
		resolve: {
			alias: [],
		},
		test: {
			setupFiles: ["./jestSetupFile.js"],
			environment: "jsdom",
		},
	};
});
