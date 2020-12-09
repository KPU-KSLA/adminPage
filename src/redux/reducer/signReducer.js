import { SIGNIN } from '../action/signIn'
import { SIGNOUT } from '../action/signOut'

const initialState = {
  isSignIn: false
}

function signReducer (state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        isSignIn: action.isSignIn
      }
    case SIGNOUT:
      return {
        ...state,
        isSignIn: action.isSignIn
      }
    default:
      return state
  }
}

export default signReducer
