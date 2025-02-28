import { Link } from "react-router";
import { AvatarContainer, HeaderStyled } from "./styles";
import Avatar from "../Avatar/ZAvatar";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { t } = useTranslation();

	return (
		<HeaderStyled>
			<Link to="/menu" style={{ color: "#fff" }}>
				{t("menu")}
			</Link>

			<AvatarContainer>
				<LanguageSelector />

				<Avatar />
			</AvatarContainer>
		</HeaderStyled>
	);
};

export default Header;
