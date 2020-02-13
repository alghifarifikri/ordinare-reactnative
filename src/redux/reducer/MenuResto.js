const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
  }

  const menuresto = (state = initialState, action) => {
    switch(action.type){
    case 'GET_MENURESTO_PENDING':
        return {
          ...state,
          isLoading: true,
          isError: false,
        }
      case 'GET_MENURESTO_REJECTED':
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      case 'GET_MENURESTO_FULFILLED':
        return {
          ...state,
          data: action.payload.data.data,
          isLoading: false,
          isError: false
        }
        default :
          return state
    }
}
  
  export default menuresto