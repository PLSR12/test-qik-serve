import {
	ContainerItem,
	ContainerDescription,
	ContainerTitle,
	Container,
	ContainerImage,
} from "./styles";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";
import { IMenuItem } from "../../types/IMenu";
import RadioList from "../RadioList";
import { App, Radio, RadioChangeEvent } from "antd";
import { useCallback, useState } from "react";
import { Button } from "../Button";
import { IoBagOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useCart } from "../../hooks/useCart";

const DetailsCard: React.FC<{ item: IMenuItem; onClose: () => void }> = ({
	item,
	onClose,
}: {
	item: IMenuItem;
	onClose: () => void;
}) => {
	const { t } = useTranslation();
	const { message } = App.useApp();
	const formatCurrency = useCurrencyFormatter();
	const { addItem } = useCart();
	const [typeChoose, setTypeChoose] = useState<
		"individual" | "combo" | undefined
	>(undefined);

	const handleChange = useCallback(
		({ target: { value } }: RadioChangeEvent) => {
			setTypeChoose(value);
		},
		[setTypeChoose]
	);

	return (
		<Container>
			<ContainerItem>
				<ContainerImage>
					{item.imageUrl && (
						<img src={item.imageUrl} width={300} height={280} alt={item.name} />
					)}
				</ContainerImage>
				<ContainerTitle>
					<h1>{item.name}</h1>
				</ContainerTitle>
				<ContainerDescription>
					<p>{item.description}</p>
				</ContainerDescription>
			</ContainerItem>

			<RadioList header={t("Choose between individual or combo")}>
				<Radio.Group
					options={
						item.combo
							? [
									{
										label: `Individual - ${formatCurrency(item.price)}`,
										value: "individual",
									},
									{
										label: `Combo - ${formatCurrency(item.combo.price)}`,
										value: "combo",
									},
							  ]
							: [
									{
										label: `Individual - ${formatCurrency(item.price)}`,
										value: "individual",
									},
							  ]
					}
					onChange={handleChange}
				/>
			</RadioList>

			<Button
				style={{ marginTop: "auto" }}
				type="primary"
				icon={<IoBagOutline size={20} />}
				onClick={() => {
					if (typeChoose !== undefined) {
						const itemToAdd =
							typeChoose === "individual"
								? item
								: {
										...item,
										id: `${item.id}C`,
										price: item.combo.price,
								  };

						addItem({ ...itemToAdd });
						onClose();
						return;
					}
					message.info(t("Choose between individual or combo"));
				}}
			>
				{t("Add to bag")}
			</Button>
		</Container>
	);
};

export default DetailsCard;
