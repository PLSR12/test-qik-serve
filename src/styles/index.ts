import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
	padding: 0;
	border: 0;
	margin: 0;
	font-family: "Poppins", sans-serif !important;
}

body {
	font-weight: 400;
	font-size: 1rem;
}

main {
	min-height: 100vh !important;
}
`;
