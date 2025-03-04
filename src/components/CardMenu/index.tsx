import {
	CardStyled,
	ContainerFooterCard,
	ContainerHeaderCard,
	ContainerPriceCombo,
	ContainerPriceIndividual,
	ContainerTexts,
} from "./styles";
import { IMenuItem } from "../../types/IMenu";
import { CardProps } from "antd";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";

export interface CardMenuProps extends CardProps {
	menuItem: IMenuItem;
}

const CardMenu: React.FC<CardMenuProps> = ({ menuItem, ...rest }) => {
	const formatCurrency = useCurrencyFormatter();

	return (
		<CardStyled {...rest} title="">
			<ContainerHeaderCard>
				<div className="container-image">
					<img src={menuItem.imageUrl} width={100} height={100} />
				</div>
				<ContainerTexts>
					<h1>{menuItem.name}</h1>
					<p>{menuItem.description}</p>
				</ContainerTexts>
			</ContainerHeaderCard>
			<ContainerFooterCard>
				{menuItem.combo ? (
					<ContainerPriceCombo>
						<div>
							<p>Individual</p>
							<strong>{formatCurrency(menuItem.price)}</strong>
						</div>
						<div>
							<p>Combo</p>
							<strong>{formatCurrency(menuItem.combo.price)}</strong>
						</div>
					</ContainerPriceCombo>
				) : (
					<ContainerPriceIndividual>
						<strong>{formatCurrency(menuItem.price)}</strong>
					</ContainerPriceIndividual>
				)}
			</ContainerFooterCard>
		</CardStyled>
	);
};

export default CardMenu;
