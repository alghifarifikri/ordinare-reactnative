import axios from 'axios'
import {APP_URL} from './config'

const url = APP_URL.concat(`user/menu/`)

export const getMenuResto = (id)=>{ 
    return {
        type: 'GET_MENURESTO',
        payload: axios.get(url.concat(`${id}`))
        }
    }
