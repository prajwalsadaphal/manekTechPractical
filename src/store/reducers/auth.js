import {USER_SIGNIN } from "../action.types"

const initialState = {
    user:null,
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return  {...state,user:action.payload,isAuthenticated:true}
    default:
      return state
  }
}

export default authReducer