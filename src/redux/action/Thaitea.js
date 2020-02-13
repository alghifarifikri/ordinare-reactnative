import axios from 'axios'
import {APP_URL} from './config'

export const getThaitea = ()=>{
const url = APP_URL.concat('items/category/3')
  return {
    type: 'GET_THAITEA',
    payload: axios.get(url)
  }
}