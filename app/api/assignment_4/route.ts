import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {

	const COUNTRY_MAP = {
		0: "US",
		1: "FR",
		2: "ES",
		3: "DE",
		4: "JP",
	}

	let random_pick = Math.floor ((Math.random () * 10)) % 5;
	let body = {};
	let message;

	if (request.method == "POST") {
		message = "Hello World, you did a POST!";
	} else {
		message = "Hello World, you did not do a POST!";
	}

	const OUTPUT = {
		result: message + " " + country_response (COUNTRY_MAP[random_pick]),
		country: COUNTRY_MAP[random_pick],
	};

	return new Response (JSON.stringify (OUTPUT), {
		headers: {
			 'content-type': 'application/json;charset=UTF-8',
		},
	});
}

function country_response (country) {
	const COUNTRY_LOOKUP_TABLE = {
		US: "Thank you for cominng, please come again!",
		FR: "Merci d'être venu, revenez s'il vous plaît!",
		ES: "¡Gracias por venir, por favor vuelve!",
		DE: "„Danke für Ihr Kommen, bitte kommen Sie wieder!",
		JP: "「来てくれてありがとう、また来てね！」",
	};
	return  (COUNTRY_LOOKUP_TABLE[country]);
}
