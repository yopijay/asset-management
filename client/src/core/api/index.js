// Core
import { api  } from "core/function/global";
import Env from "./Env.json";

const env = 'office' // Environment

export const authentication = async data => { return await api({ url: `${Env[env].url}/login`, method: 'post', data: data }).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }
export const profile = async id => { return await api({ url: `${Env[env].url}/profile/${id}`, method: 'get'}).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }
export const records = async ({ table, data }) => { return await api({ url: `${Env[env].url}/list/${table}`, method: 'post', data: data }).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }
export const series = async table => { return await api({ url: `${Env[env].url}/series/${table}`, method: 'get' }).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }
export const specific = async ({ table, id }) => { return await api({ url: `${Env[env].url}/specific/${table}/${id}`, method: 'get' }).then(res => res.data); }
export const save = async ({ table, data }) => { return await api({ url: `${Env[env].url}/save/${table}`, method: 'post', data: data }).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }
export const update = async ({ table, data }) => { return await api({ url: `${Env[env].url}/update/${table}`, method: 'post', data: data }).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }
export const look = async ({ table, data }) => { return await api({ url: `${Env[env].url}/search/${table}`, method: 'post', data: data }).then(res => res.data); }