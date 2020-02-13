const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
  }

  const cardrestaurant = (state = initialState, action) => {
    switch(action.type){
    case 'GET_RESTAURANT_PENDING':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case 'GET_RESTAURANT_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      case 'GET_RESTAURANT_FULFILLED':
        return {
          data: action.payload.data.data,
          isLoading: false,
          isError: false
        }
        default :
          return state
    }
}
  
  export default cardrestaurant