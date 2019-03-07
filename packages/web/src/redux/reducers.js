import { combineReducers } from 'redux'
import { characters } from './characters'
import { loading } from './loading'

const appReducer = combineReducers({
  characters,
  loading
})

export default appReducer
