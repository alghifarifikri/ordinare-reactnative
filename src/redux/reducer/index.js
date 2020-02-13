import {combineReducers} from 'redux'

import food from './Food'
import chickenfood from './Chickenfood'
import localdrinks from './Localdrinks'
import thaitea from './Thaitea'
import snack from './Snack'
import vegetarian from './Vegetarian'
import cardrestaurant from './CardRestaurant'
import details from './Details'
import review from './Review'
import suggest from './Suggest'
import menuresto from './MenuResto'
import login from './Login'

const appReducer = combineReducers({
  food, 
  chickenfood,
  localdrinks,
  thaitea,
  snack,
  vegetarian,
  cardrestaurant,
  details,
  review,
  suggest,
  menuresto,
  login

})

export default appReducer
