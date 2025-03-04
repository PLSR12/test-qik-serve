import Header from "../components/Header";
import Footer from "../components/Footer";
import { Layout } from "antd";
import { Outlet } from "react-router";
import styled from "styled-components";
const { Content } = Layout;

// @ts-ignore
export const ContentContainer: typeof Content = styled(Content)<LayoutProps>`
	min-height: 100vh;
	background: #ebeadb;
`;

const AuthLayout = () => {
	return (
		<Layout>
			<Header />
			<ContentContainer>
				<Outlet />
			</ContentContainer>
			<Footer />
		</Layout>
	);
};

export default AuthLayout;
