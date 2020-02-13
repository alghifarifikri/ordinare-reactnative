import Axios from 'axios'
import qs from 'qs'
import { APP_URL } from './config'

const url = APP_URL.concat('user')
export const postLogin = (data)=>{
    return {
        type: 'POST_LOGIN',
        payload: Axios.post(url.concat(`/login`), (data))
    }
} 