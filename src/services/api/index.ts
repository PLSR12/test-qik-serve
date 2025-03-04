import axios from "axios";
import { message } from "antd";

const { REACT_APP_API_URL } = import.meta.env;

const client = axios.create({
	baseURL: REACT_APP_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

const getToken = () => {
	const usersToken: any = localStorage.getItem("idToken");
	if (!usersToken) {
		return "";
	}
	return usersToken;
};

client.interceptors.request.use(
	(config) => {
		const token = getToken();

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

client.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 401) {
			message.error("Seu acesso expirou. Faça login!");
			localStorage.clear();
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		} else if (error.response.status === 403) {
		} else if (error.response.status === 400) {
		} else if (error.response.status === 404) {
			message.error("Recurso não encontrado");
		} else if (error.response.status >= 500) {
			message.error(
				"Desculpe, ocorreu um erro inesperado. Tente novamente mais tarde."
			);
		}

		return Promise.reject(error);
	}
);

export const get = (url: string, headers = {}): Promise<any> =>
	client.get(url, headers);
export const post = (url: string, data: any, headers = {}): Promise<any> =>
	client.post(url, data, headers);
export const put = (url: string, data: any, headers = {}): Promise<any> =>
	client.put(url, data, headers);
export const remove = (url: string, data: any = undefined): Promise<any> =>
	client.delete(url, { data });

const httpService = {
	get,
	post,
	put,
	remove,
};

export default httpService;
