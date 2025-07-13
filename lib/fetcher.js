import fetch from 'node-fetch';
import fs from 'fs';
import { MessageType } from '@adiwajshing/baileys';

export const getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    return videoBase64;
};

export const getBuffer = async (url) => {
	const res = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' }, method: 'GET' });
	const anu = fs.readFileSync('./src/emror.jpg');
	if (!res.ok) return { type: 'image/jpeg', result: anu };
	const buff = await res.buffer();
	return { type: res.headers.get('content-type'), result: buff };
};

export const fetchJson = async (url, options) => {
	try {
		const res = await fetch(url, options);
		const json = await res.json();
		return json;
	} catch (err) {
		throw err;
	}
};

export const fetchText = async (url, options) => {
	try {
		const res = await fetch(url, options);
		const text = await res.text();
		return text;
	} catch (err) {
		throw err;
	}
};
