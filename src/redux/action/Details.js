import axios from 'axios'
import {APP_URL} from './config'

const url = APP_URL.concat(`items/details/`)

export const getDetails = (id)=>{ 
    return {
        type: 'GET_DETAILS',
        payload: axios.get(url.concat(`${id}`))
        }
    }
