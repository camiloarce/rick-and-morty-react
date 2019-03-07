import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loadingFetchingStart: ['part'],
  loadingFetchingEnd: ['part']
})

export const Actions = Types

export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  characters: false
})

/* ------------- Reducers ------------- */

export const fetchingStart = (state, { part }) => state.merge({ [part]: true })

export const fetchingEnd = (state, { part }) => state.merge({ [part]: false })

/* ------------- Hookup Reducers To Types ------------- */

export const loading = createReducer(INITIAL_STATE, {
  [Types.LOADING_FETCHING_START]: fetchingStart,
  [Types.LOADING_FETCHING_END]: fetchingEnd
})
