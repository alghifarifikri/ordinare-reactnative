const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
  }

  const localdrinks = (state = initialState, action) => {
    switch(action.type){
    case 'GET_LOCALDRINKS_PENDING':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case 'GET_LOCALDRINKS_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      case 'GET_LOCALDRINKS_FULFILLED':
        return {
          data: action.payload.data.data,
          isLoading: false,
          isError: false
        }
        default :
          return state
    }
}
  
  export default localdrinks