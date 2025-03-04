import { Button as ButtonAnt } from "antd";
import styled from "styled-components";

export const ButtonContainer = styled(ButtonAnt)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	border-radius: 8px !important;
	cursor: pointer;
	padding-left: 1rem !important;
	padding-right: 1rem !important;
	color: #fff !important;

	&.ant-btn[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
		background: white;
	}

	svg {
		margin-right: 4px;
	}
`;
