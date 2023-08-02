// Core
import { api  } from "core/function/global";
import Env from "./Env.json";

const env = 'office' // Environment

export const authentication = async data => { return await api({ url: `${Env[env].url}/login`, method: 'post', data: data }).then(res => res.data).catch(err => console.log(`Error: ${err}`)); }
export const profile = async id => { return await api({ url: `${Env[env].url}/profile/${id}`, method: 'get'}).then(res => res.data); }
export const series = async table => { return await api({ url: `${Env[env].url}/series/${table}`, method: 'get' }).then(res => res.data); }