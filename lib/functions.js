import fetch from 'node-fetch';
import axios from 'axios';
import cfonts from 'cfonts';
import spin from 'spinnies';
import Crypto from 'crypto';

const h2k = (number) => {
    const SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"];
    const tier = Math.floor(Math.log10(Math.abs(number)) / 3);
    if (tier === 0) return number;
    const postfix = SI_POSTFIXES[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    let formatted = scaled.toFixed(1);
    if (/\.0$/.test(formatted)) formatted = formatted.slice(0, -2);
    return formatted + postfix;
};

const getBuffer = async (url, options = {}) => {
    try {
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        });
        return res.data;
    } catch (e) {
        console.log(`Error: ${e}`);
    }
};

const randomBytes = (length) => {
    return Crypto.randomBytes(length);
};

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase();
};

const getGroupAdmins = (participants) => {
    let admins = [];
    for (let i of participants) {
        if (i.isAdmin) admins.push(i.jid);
    }
    return admins;
};

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
};

// 👇 FUNCIONES NUEVAS AGREGADAS (mínimas para evitar errores)
export const wait = () => {
    console.log('[⏳] Espera un momento...');
};

export const pegatinas = () => {
    console.log('[🧩] Generando sticker...');
};

export const simih = () => {
    console.log('[🤖] Simih activado...');
};

export const banner = () => {
    return `
╭━━━╮╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╱┃┃
┃╰━━┳━━┳╮╭┫┃╭╮
╰━━╮┃┃━┫┃┃┃┃┣┫
┃╰━╯┃┃━┫╰╯┃╰┫╰╮
╰━━━┻━━┻━━┻━┻━╯`;
};

export const start = () => {
    console.log('[✔] Bot iniciado...');
};

export const info = () => {
    console.log('[ℹ️] Información cargada...');
};

export const success = () => {
    console.log('[✅] Todo cargado correctamente...');
};

export const close = () => {
    console.log('[❌] El bot se ha cerrado.');
};

// 👉 Exportación general
export {
    getBuffer,
    h2k,
    generateMessageID,
    getGroupAdmins,
    getRandom
};
