import { Card } from "antd";
import { styled } from "styled-components";

export const CardStyled = styled(Card)`
	min-height: 248px;
	width: 100%;
	border-radius: 8px;
	padding: 5px 0px 5px 0px;
	cursor: pointer;

	.adm-card-body {
		padding: 2px 0px;

		.container-image {
			margin-top: 10px;
		}
	}
`;

export const ContainerHeaderCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0px 8px 5px 8px;
`;

export const ContainerTexts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		height: 30px;
		text-align: center;
		color: #502314;
		font-size: 12px;
		margin-bottom: 0;
	}

	p {
		text-align: center;
		color: #85614b;
		font-size: 0.8rem;
	}
`;

export const ContainerFooterCard = styled.div`
	text-align: center;
	flex-direction: column;
	border-top: 1px solid #e1d3c1;
	border-width: 100%;
	padding: 0px 0px;

	p {
		color: #a98e77;
		font-size: 12px;
	}

	strong {
		margin-top: 1px;
		padding-top: 1px;
		color: #d62300;
		font-size: 14px;
	}
`;

export const ContainerPriceCombo = styled.div`
	display: grid;
	flex-direction: row;
	grid-template-columns: 1fr 1fr;

	p {
		padding-bottom: 1px;
		margin-bottom: 1px;
		margin-top: 4px;
	}
`;

export const ContainerPriceIndividual = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	strong {
		margin-top: 18px;
	}
`;
