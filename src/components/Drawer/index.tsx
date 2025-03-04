import styled from "styled-components";
import { Drawer as DrawerAntd, DrawerProps } from "antd";
import { useScreenDetector } from "../../hooks/useScreenDetector";

const DrawerStyled = styled(DrawerAntd)`
	.ant-drawer-title {
		color: #734c37 !important;
	}

	.ant-drawer-close {
		color: #734c37 !important;
	}

	.ant-drawer-header {
		background-color: #f5ebdc;
	}
	.ant-drawer-body {
		background-color: #f5ebdc;
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: #f5ebdc;
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb {
		background: #502314;
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #a67c52;
	}
`;

const Drawer = (props: DrawerProps) => {
	const { isDesktop } = useScreenDetector();

	return <DrawerStyled width={!isDesktop ? "100%" : "30%"} {...props} />;
};

export default Drawer;
