import { Provider } from "react-redux";
import store from "./stores/store";
import Router from "./routes";
import { BrowserRouter } from "react-router";
import { GlobalStyle } from "../src/styles/index";
import { ConfigProvider } from "antd";
import { antDefaultTheme } from "./styles/ant/default";
import { App as AntdApp } from "antd";

function App() {
	return (
		<BrowserRouter>
			<ConfigProvider theme={antDefaultTheme}>
				<AntdApp>
					<Provider store={store}>
						<GlobalStyle />
						<Router />
					</Provider>
				</AntdApp>
			</ConfigProvider>
		</BrowserRouter>
	);
}

export default App;
