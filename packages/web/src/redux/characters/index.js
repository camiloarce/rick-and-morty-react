import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import api from '../../service/api'
import loading from '../loading'

const { loadingFetchingStart, loadingFetchingEnd } = loading

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  charactersSet: ['characters', 'pages'],
  charactersDetailsSet: ['characters'],
  charactersReset: [],
  charactersFailure: ['error']
})

export const Actions = Types

export default Creators

/* ------------- Async Actions ------------- */

/**
 * get characters
 */
export function getCharacters (page, name) {
  return async dispatch => {
    try {
      dispatch(loadingFetchingStart('characters'))
      const response = await api.getCharacters(page, name)
      if (!response.ok && response.status !== 200) {
        dispatch(loadingFetchingEnd('characters'))
        return dispatch(Creators.charactersFailure(response.problem))
      }
      const { data } = response
      dispatch(Creators.charactersSet(data.results, data.info.pages))
      return dispatch(loadingFetchingEnd('characters'))
    } catch (e) {
      dispatch(loadingFetchingEnd('characters'))
      return dispatch(Creators.charactersFailure(e.message))
    }
  }
}

/**
 * detail characters
 */
export function detailCharacters (ids) {
  return async dispatch => {
    try {
      dispatch(loadingFetchingStart('characters'))
      const response = await api.getCharactersDetails(ids)
      if (!response.ok && response.status !== 200) {
        dispatch(loadingFetchingEnd('characters'))
        return dispatch(Creators.charactersFailure(response.problem))
      }
      dispatch(Creators.charactersDetailsSet(response.data))
      return dispatch(loadingFetchingEnd('characters'))
    } catch (e) {
      dispatch(loadingFetchingEnd('characters'))
      return dispatch(Creators.charactersFailure(e.message))
    }
  }
}

/**
 * search characters
 */
export function searchCharacters (text) {
  return async dispatch => {
    try {
      dispatch(loadingFetchingStart('characters'))
      const response = await api.search(text)
      if (!response.ok && response.status !== 200) {
        dispatch(loadingFetchingEnd('characters'))
        return dispatch(Creators.charactersFailure(response.problem))
      }
      const { data } = response
      dispatch(Creators.charactersReset())
      dispatch(Creators.charactersSet(data.results, data.info.pages))
      return dispatch(loadingFetchingEnd('characters'))
    } catch (e) {
      dispatch(loadingFetchingEnd('characters'))
      return dispatch(Creators.charactersFailure(e.message))
    }
  }
}

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  characters: [],
  detailCharacters: [],
  pages: 0,
  error: null
})

/* ------------- Reducers ------------- */

export const setCharacters = (state, { characters, pages }) => {
  const list = [...state.characters, ...characters]
  return state.merge({ error: null, characters: list, pages })
}

export const setCharactersDetails = (state, { characters }) => {
  const detailCharacters = Array.isArray(characters) ? characters : [characters]
  return state.merge({ error: null, detailCharacters })
}

export const resetCharacters = state => INITIAL_STATE

export const failure = (state, { error }) => state.merge({ error })

/* ------------- Hookup Reducers To Types ------------- */

export const characters = createReducer(INITIAL_STATE, {
  [Types.CHARACTERS_SET]: setCharacters,
  [Types.CHARACTERS_DETAILS_SET]: setCharactersDetails,
  [Types.CHARACTERS_RESET]: resetCharacters,
  [Types.CHARACTERS_FAILURE]: failure
})
