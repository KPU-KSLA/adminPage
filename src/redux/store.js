import { createStore, combineReducers } from 'redux'
import pageReducer from './reducer/pageReducer'
import signReducer from './reducer/signReducer'

const store = createStore(combineReducers({ pageReducer, signReducer }))

console.log(store)

export default store
