import axios from 'axios'
import {APP_URL} from './config'

export const getRestaurant = ()=>{
const url = APP_URL.concat('items/listresto')
  return {
    type: 'GET_RESTAURANT',
    payload: axios.get(url)
  }
}