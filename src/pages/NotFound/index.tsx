import { Link } from "react-router";

const NotFound = () => {
	return (
		<div style={{ textAlign: "center", marginTop: "50px" }}>
			<h1>404 - Página Não Encontrada</h1>
			<p>A página que você tentou acessar não existe.</p>
			<Link to="/">Voltar para a Home</Link>
		</div>
	);
};

export default NotFound;
