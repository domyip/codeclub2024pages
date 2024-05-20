import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {

	const COUNTRY_MAP: {[key: string]: string } =  {
		0: "Thank you for cominng, please come again!",
		1: "Merci d'être venu, revenez s'il vous plaît!",
		2: "¡Gracias por venir, por favor vuelve!",
		3: "„Danke für Ihr Kommen, bitte kommen Sie wieder!",
		4: "「来てくれてありがとう、また来てね！」",
	};

	let random_pick = Math.floor ((Math.random () * 10)) % 5;
	let body = {};
	let message;

	if (request.method == "POST") {
		message = "Hello World, you did a POST!";
	} else {
		message = "Hello World, you did not do a POST!";
	}

	const OUTPUT = {
		result: message + " " + COUNTRY_MAP [random_pick],
	};

	return new Response (JSON.stringify (OUTPUT), {
		headers: {
			 'content-type': 'application/json;charset=UTF-8',
		},
	});
}


