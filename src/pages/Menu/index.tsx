import { useState, useEffect, useCallback } from "react";
import { Col, Input, Row, Spin, Carousel } from "antd"; // Importação do Carousel
import CardMenu from "../../components/CardMenu";
import { Container, TabsStyled } from "./styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getMenu } from "../../services/Menu";
import { IMenuCategory, IMenuItem } from "../../types/IMenu";
import { isEmpty } from "lodash";
import DetailsCard from "../../components/DetailsCard";
import Drawer from "../../components/Drawer";
import { RootReducer } from "../../stores/store";
import BurgerImage from "../../assets/burger-image.png";
import BurgerImage2 from "../../assets/burger-image(2).webp";

const Menu = () => {
	const { t } = useTranslation();
	const language = useSelector((state: RootReducer) => state.language.language);
	const [menu, setMenu] = useState<IMenuCategory[]>([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");
	const [filteredMenu, setFilteredMenu] = useState<IMenuCategory[]>([]);
	const [open, setOpen] = useState(false);
	const [itemSelected, setItemSelected] = useState<IMenuItem | undefined>(
		undefined
	);

	const showDrawer = useCallback(() => {
		setOpen(true);
	}, [setOpen]);

	const onClose = useCallback(() => {
		setOpen(false);
	}, [setOpen]);

	useEffect(() => {
		const getMenuData = async () => {
			const data = await getMenu(language);
			setMenu(data);
			setFilteredMenu(data);
		};
		getMenuData();
	}, [language]);

	useEffect(() => {
		if (!isEmpty(menu)) {
			let updatedMenu = menu;
			if (activeCategory !== "all") {
				updatedMenu = menu.filter((category) => category.id === activeCategory);
			}
			if (searchTerm.trim() !== "") {
				updatedMenu = updatedMenu.map((category) => ({
					...category,
					sets: category.sets.filter((menuItem) =>
						menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
					),
				}));
			}
			setFilteredMenu(updatedMenu);
		}
	}, [searchTerm, activeCategory, menu]);

	return (
		<Row gutter={[0, 20]}>
			<Col span={24}>
				<Carousel autoplay effect="fade">
					<div>
						<img
							src={BurgerImage2}
							alt="Promoção 1"
							style={{ width: "100%", height: "600px", objectFit: "cover" }}
						/>
					</div>
					<div>
						<img
							src={BurgerImage}
							alt="Promoção 2"
							style={{ width: "100%", height: "600px", objectFit: "cover" }}
						/>
					</div>
				</Carousel>
			</Col>

			<Container>
				<Row style={{ width: "100%" }} align="middle" justify="center">
					<Col xs={24} sm={12} md={10} lg={10} xl={10}>
						<Input.Search
							placeholder={t("Search here")}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</Col>
				</Row>

				{isEmpty(filteredMenu) ? (
					<Row
						style={{ width: "100%", marginTop: "40px" }}
						align="middle"
						justify="center"
					>
						<Spin size="large" />
					</Row>
				) : (
					<>
						<Row style={{ width: "100%" }}>
							<Col span={24}>
								<TabsStyled
									centered
									activeKey={activeCategory}
									onChange={setActiveCategory}
									items={[{ id: "all", categoryName: t("all") }, ...menu].map(
										(category) => ({
											label: category.categoryName,
											key: category.id,
										})
									)}
								/>
							</Col>
						</Row>

						<Row style={{ width: "100%", marginLeft: 0 }} gutter={[30, 30]}>
							{filteredMenu.map((category) =>
								category.sets.map((menuItem) => (
									<Col key={menuItem.id} xs={24} sm={12} md={8} lg={8} xl={6}>
										<CardMenu
											menuItem={menuItem}
											onClick={() => {
												showDrawer();
												setItemSelected(menuItem);
											}}
										/>
									</Col>
								))
							)}
						</Row>
					</>
				)}
			</Container>

			{itemSelected && (
				<Drawer title={<h2>{t("menu")}</h2>} onClose={onClose} open={open}>
					<DetailsCard item={itemSelected} onClose={onClose} />
				</Drawer>
			)}
		</Row>
	);
};

export default Menu;
