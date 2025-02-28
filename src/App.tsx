import { Provider, useSelector } from "react-redux";
import store from "./stores/store";
import Router from "./routes";
import { BrowserRouter } from "react-router";
import { GlobalStyle } from "../src/styles/index";
import i18n from "./utils/i18n";
import { useEffect } from "react";

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<GlobalStyle />
				<Router />
			</Provider>
		</BrowserRouter>
	);
}

export default App;
