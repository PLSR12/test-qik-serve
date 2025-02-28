import { useState, useEffect } from "react";
import { Col, Input, Row } from "antd";
import CardMenu from "../../components/CardMenu";
import { mockMenuCategories } from "../../mocks/menu";
import { TabsStyled } from "./styles";
import { useTranslation } from "react-i18next";
import { useAutoTranslate } from "../../hooks/useAutoTranslate";

const Menu = () => {
	const { t } = useTranslation();
	const mockMenu = mockMenuCategories;

	// Estados para busca e categoria ativa
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");
	const [filteredMenu, setFilteredMenu] = useState(mockMenu);

	// Atualiza os itens ao mudar a busca ou categoria
	useEffect(() => {
		let updatedMenu = mockMenu;

		// Filtra por categoria
		if (activeCategory !== "all") {
			updatedMenu = mockMenu.filter(
				(category) => category.id === activeCategory
			);
		}

		// Filtra por nome digitado
		if (searchTerm.trim() !== "") {
			updatedMenu = updatedMenu.map((category) => ({
				...category,
				sets: category.sets.filter((menuItem) =>
					menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
				),
			}));
		}

		setFilteredMenu(updatedMenu);
	}, [searchTerm, activeCategory, mockMenu]);

	return (
		<Row gutter={[24, 20]}>
			{/* Input de Busca */}
			<Row style={{ width: "100%" }} align="middle" justify="center">
				<Col xs={24} sm={12} md={10} lg={10} xl={10}>
					<Input.Search
						placeholder={t("Search here")}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</Col>
			</Row>

			{/* Tabs de Categorias */}
			<Row style={{ width: "100%" }}>
				<Col span={24}>
					<TabsStyled
						centered
						defaultActiveKey="all"
						activeKey={activeCategory}
						onChange={setActiveCategory}
						items={[{ id: "all", categoryName: t("all") }, ...mockMenu].map(
							(category) => ({
								label: useAutoTranslate(category.categoryName),
								key: category.id,
							})
						)}
					/>
				</Col>
			</Row>

			{/* Exibição dos Itens Filtrados */}
			<Row style={{ width: "100%" }} gutter={[24, 24]}>
				{filteredMenu.map((category) =>
					category.sets.map((menuItem) => (
						<Col key={menuItem.id} xs={24} sm={12} md={8} lg={8} xl={8}>
							<CardMenu menuItem={menuItem} />
						</Col>
					))
				)}
			</Row>
		</Row>
	);
};

export default Menu;
