import styled from "styled-components";
import { RadioProps } from "antd";

const ContainerRadio = styled.div`
	.adm-list-header {
		font-family: var(--font-family-highlight-regular);
		color: var(--brand-color-primary-500);
		font-size: 19px;
		line-height: 115%;
		letter-spacing: 0.02em;
		padding: 8px 12px 8px 10px;
	}

	.adm-list-sub-header {
		font-family: var(--font-family-base);
		color: var(--brownscale-color-600);
		margin: 0 0 8px 30px;
		font-size: 15px;
	}
`;

interface RadioListProps extends RadioProps {
	header?: React.ReactNode;
	subHeader?: React.ReactNode;
}

const RadioList: React.FC<RadioListProps> = ({
	header,
	subHeader,
	children,
}) => {
	return (
		<ContainerRadio>
			{header && <div className="adm-list-header">{header}</div>}
			{subHeader && <div className="adm-list-sub-header">{subHeader}</div>}

			<div style={{ padding: "0 40px" }}>{children}</div>
		</ContainerRadio>
	);
};

export default RadioList;
