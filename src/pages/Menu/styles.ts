import { Tabs } from "antd";
import styled from "styled-components";

export const TabsStyled = styled(Tabs)`
	border-bottom: none;

	.ant-tabs-top {
		::before {
			border-bottom: none;
		}
	}

	.ant-tabs-ink-bar {
		background-color: red !important; /* Cor da linha inferior ativa */
	}

	.ant-tabs-tab-active {
		border-bottom: 2px solid red !important; /* Cor da borda inferior da aba ativa */

		.ant-tabs-tab-btn {
			color: red !important;
		}
	}

	.ant-tabs-nav {
		background: transparent !important;
		padding: 0px 0rem 5px 4rem !important;
		overflow-x: auto;

		/* ant-tabs-top > .ant-tabs-nav::before  */

		::before {
			border-bottom: none;
		}

		@media (max-width: 1180px) {
			padding: 0px 0% 0px 3% !important;
		}
	}

	.ant-tabs-nav-list {
		display: inline-flex;
	}

	.ant-tabs-content {
		padding: 28px 4rem 0px 4rem !important;

		@media (max-width: 1180px) {
			padding: 28px 2% 0px 2% !important;
		}
	}

	.ant-tabs-nav::-webkit-scrollbar {
		display: none;
	}

	.ant-tabs-nav {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
`;

export const Container = styled.div`
	width: 100%;
	padding: 24px;
`;
