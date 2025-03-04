import Card from "antd/es/card/Card";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
	gap: 20px;
`;

export const ContainerCards = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	min-height: 100%;
`;

export const ContainerCard = styled.div`
	display: flex;
	align-items: center;
`;

export const CardStyled = styled(Card)`
	width: 100%;

	.ant-card-body {
		padding: 16px;
	}
`;

export const ContentCard = styled.div`
	flex: 1;
`;

export const ContainerActions = styled.div`
	display: flex;
	gap: 20px;
	margin-top: 15px;
`;
