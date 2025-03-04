import { Link } from "react-router";
import { AvatarContainer, HeaderStyled } from "./styles";
import Avatar from "../Avatar/ZAvatar";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";
import { IoBagOutline } from "react-icons/io5";
import { useState } from "react";
import { Badge } from "antd";
import CartDetails from "../CartDetails";
import { useCart } from "../../hooks/useCart";
import Drawer from "../Drawer";

const Header = () => {
	const { t } = useTranslation();
	const [open, setOpen] = useState(false);
	const { cartItems } = useCart();

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<HeaderStyled>
			<Link to="/menu" style={{ color: "#fff" }}>
				{t("menu")}
			</Link>

			<AvatarContainer>
				<LanguageSelector />

				<Badge count={cartItems.length} showZero>
					<IoBagOutline
						size={24}
						onClick={() => showDrawer()}
						cursor={"pointer"}
						color="#fff"
					/>
				</Badge>

				<Avatar />
			</AvatarContainer>

			<Drawer title={<h2>{t("bag")}</h2>} onClose={onClose} open={open}>
				<CartDetails />
			</Drawer>
		</HeaderStyled>
	);
};

export default Header;
