import apisauce from 'apisauce'
import config from '../config'

const { BASE_URL } = config

// define the api
const create = () => {
  const api = apisauce.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 20000
  })

  // --------------------------------------------------
  // Characters Methods
  // --------------------------------------------------

  /**
   * Get characters list
   *
   * @name getCharacters
   * @param {string} page: page number for pagination.
   */
  const getCharacters = (page, name) => {
    const url = name
      ? `character/?page=${page}&name=${name}`
      : `character/?page=${page}`
    return api.get(url)
  }

  /**
   * Get single character
   *
   * @name getCharacters
   * @param {number} id: character id.
   */
  const getCharacter = id => api.get(`character/${id}`)

  /**
   * Get characters details
   *
   * @name getCharactersDetails
   * @param {array} ids: characters ids.
   */
  const getCharactersDetails = ids => api.get(`character/${ids}`)

  /**
   * Search characters by name
   *
   * @name search
   * @param {string} name: character name.
   */
  const search = name => api.get(`character/?name=${name}`)

  return { getCharacters, getCharacter, getCharactersDetails, search }
}

const api = create()

export default api
