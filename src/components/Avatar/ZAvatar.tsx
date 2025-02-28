import { useTranslation } from "react-i18next";
import { AvatarContainer } from "./styles";
import { Dropdown, type MenuProps } from "antd";

interface ZAvatarProps {
	src?: string;
}

const Avatar = ({ src }: ZAvatarProps) => {
	const { t } = useTranslation();

	const items: MenuProps & MenuProps["items"] = [
		{
			key: "1",
			label: t("user-datas"),
		},
		{
			key: "2",
			label: t("address"),
		},
		{
			key: "3",
			label: t("preferences-user"),
		},
		{
			key: "4",
			label: t("out"),
		},
	];

	return (
		<Dropdown menu={{ items }} trigger={["click"]}>
			<AvatarContainer size="large" src={src ? src : null} />
		</Dropdown>
	);
};

export default Avatar;
