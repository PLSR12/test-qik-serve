import { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";
import { useSelector } from "react-redux";

const DEEPL_API_KEY = "69016249-b1a8-4678-ba0e-368c595201e2:fx";

const translationCache = new Map<string, string>();

const requestQueue: (() => Promise<void>)[] = [];
let isProcessing = false;

const processQueue = async () => {
	if (isProcessing || requestQueue.length === 0) return;

	isProcessing = true;
	const nextRequest = requestQueue.shift();
	if (nextRequest) {
		await nextRequest();
	}
	isProcessing = false;

	setTimeout(() => processQueue(), 500);
};

const enqueueTranslation = (
	text: string,
	targetLang: string
): Promise<string> => {
	return new Promise<string>((resolve) => {
		requestQueue.push(async () => {
			const translation = await translateWithDeepL(text, targetLang);
			resolve(translation);
		});
		processQueue();
	});
};

async function translateWithDeepL(text: string, targetLang: string) {
	const cacheKey = `${text}-${targetLang.toUpperCase()}`;

	try {
		const response = await axios.post(
			"https://api-free.deepl.com/v2/translate",
			new URLSearchParams({
				auth_key: DEEPL_API_KEY,
				text: text,
				target_lang: targetLang.toUpperCase(),
			})
		);

		const translatedText = response.data.translations[0].text;

		translationCache.set(cacheKey, translatedText);

		return translatedText;
	} catch (error) {
		console.error("Erro ao traduzir com DeepL:", error);
		return text;
	}
}

export const useAutoTranslate = (text: string, targetLang?: string) => {
	const [translatedText, setTranslatedText] = useState(text);
	const language = useSelector((state: any) => state.language.language);

	useEffect(() => {
		if (!text) return;

		const fetchTranslation = debounce(async () => {
			const translation = await enqueueTranslation(text, language);
			setTranslatedText(translation);
		}, 1500);

		fetchTranslation();

		return () => {
			fetchTranslation.cancel();
		};
	}, [text, targetLang, language]);

	return translatedText;
};
