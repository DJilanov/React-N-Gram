/* global fetch:false */
import { config } from '../config/config'
const apiUrl = config.API_URL

export const getNgrams = (text) => {
  return dispatch => {
    dispatch({
      method: 'GET',
      type: 'FETCH_NGRAMS'
    })
    return fetch(apiUrl + 'ngrams?text=' + text)
      .then(response => response.json())
      .then(json => dispatch(setNgrams(json)))
  }
}

export const setNgrams = (ngrams) => ({
  type: 'SET_NGRAMS',
  ngrams: ngrams
})