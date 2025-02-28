import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../stores/language/slice";
import i18n from "../../utils/i18n";
import { ContainerLanguage } from "./styles";
import { Dropdown, MenuProps } from "antd";
import { FaLanguage } from "react-icons/fa";

const LanguageSelector: React.FC = () => {
	const dispatch = useDispatch();
	const language = useSelector((state: any) => state.language.language);

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language]);

	const handleChangeLanguage = (lang: string) => {
		dispatch(setLanguage(lang));
	};

	const items: MenuProps & MenuProps["items"] = [
		{
			key: "1",
			label: "EN-US",
			onClick: () => handleChangeLanguage("en"),
		},
		{
			key: "2",
			label: "PT-BR",
			onClick: () => handleChangeLanguage("pt-br"),
		},
	];

	return (
		<ContainerLanguage>
			<Dropdown menu={{ items }} trigger={["hover"]} placement="bottomCenter">
				<FaLanguage cursor={"pointer"} size={26} />
			</Dropdown>
		</ContainerLanguage>
	);
};

export default LanguageSelector;
