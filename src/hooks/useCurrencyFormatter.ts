import { useTranslation } from "react-i18next";

export const useCurrencyFormatter = () => {
	const { i18n } = useTranslation();

	return (value: number) => {
		return new Intl.NumberFormat(i18n.language, {
			style: "currency",
			currency: i18n.language === "pt-br" ? "BRL" : "USD",
		}).format(value);
	};
};
