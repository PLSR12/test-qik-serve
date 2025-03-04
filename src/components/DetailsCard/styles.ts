import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	min-height: 100%;
	flex-direction: column;
`;

export const ContainerItem = styled.div`
	background-color: #f9f4eb;
	margin-bottom: 30px;
`;

export const ContainerTitle = styled.div`
	h1 {
		font-size: 25px;
		text-align: center;
	}
`;

export const ContainerImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContainerDescription = styled.div`
	margin: 0 24px;

	p {
		font-size: 1rem;
		text-align: center;
	}
`;
