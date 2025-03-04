import { useTranslation } from "react-i18next";
import { useCart } from "../../hooks/useCart";
import { Button, Row } from "antd";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
	CardStyled,
	Container,
	ContainerActions,
	ContainerCard,
	ContainerCards,
	ContentCard,
} from "./styles";
import { useCurrencyFormatter } from "../../hooks/useCurrencyFormatter";
import { IoBagCheckOutline } from "react-icons/io5";
import { useMemo } from "react";
import { isEmpty } from "lodash";

const CartDetails = () => {
	const { cartItems, removeItem, increaseQuantity, decreaseQuantity } =
		useCart();
	const { t } = useTranslation();
	const formatCurrency = useCurrencyFormatter();
	const totalValue = useMemo(
		() =>
			cartItems?.reduce((total, item) => total + item.price * item.quantity, 0),
		[cartItems]
	);
	return (
		<>
			{isEmpty(cartItems) ? (
				<Row justify={"center"}>
					<h2>{t("bag empty")}</h2>
				</Row>
			) : (
				<Container>
					<h2>{t("Check your bag items here")}</h2>

					<ContainerCards>
						{cartItems?.map((item) => (
							<CardStyled key={item.id}>
								<ContainerCard>
									<img
										src={item.imageUrl}
										alt={item.name}
										width={60}
										height={60}
										style={{ objectFit: "cover", marginRight: 16 }}
									/>
									<ContentCard>
										<h3>{item.name}</h3>
										<p>
											{t("price")}: {formatCurrency(item.price)}
										</p>
										<p>
											{t("quantity")}: {item.quantity}
										</p>
										<ContainerActions>
											<Button
												icon={<PlusOutlined />}
												onClick={() => increaseQuantity(item.id)}
											/>
											<Button
												icon={<MinusOutlined />}
												onClick={() => decreaseQuantity(item.id)}
											/>
											<Button
												icon={<DeleteOutlined />}
												onClick={() => removeItem(item.id)}
												danger
											/>
										</ContainerActions>
									</ContentCard>
								</ContainerCard>
							</CardStyled>
						))}
					</ContainerCards>

					<h3>
						{t("total value")}: {formatCurrency(totalValue)}
					</h3>

					<Button
						size="large"
						style={{ marginTop: "auto" }}
						type="primary"
						icon={<IoBagCheckOutline size={20} />}
						onClick={() => {}}
					>
						{t("go to checkout")}
					</Button>
				</Container>
			)}
		</>
	);
};

export default CartDetails;
