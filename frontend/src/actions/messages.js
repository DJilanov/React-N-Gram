/* global fetch:false */
import { config } from '../config/config'
const apiUrl = config.API_URL

export const fetchMessages = () => {
  return dispatch => {
    dispatch({
      method: 'GET',
      type: 'FETCH_MESSAGES'
    })
    return fetch(apiUrl + 'messages')
      .then(response => response.json())
      .then(json => dispatch(setMessages(json)))
  }
}

export const setMessages = (messages) => ({
  type: 'SET_MESSAGES',
  messages: messages
})

export const createMessage = (message) => {
  return dispatch => {
    dispatch({
      type: 'CREATE_MESSAGE'
    })
    return fetch(apiUrl + 'message', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: message,
        deleted: false
      })
    })
      .then(response => response.json())
      .then(json => {
        dispatch(toggleAddForm())
        dispatch(addMessage(json))
      })
  }
}

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message
})

export const editMessage = (message) => {
  return dispatch => {
    dispatch({
      type: 'EDIT_MESSAGE'
    })
    return fetch(apiUrl + 'message', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(response => response.json())
      .then(json => dispatch(updateMessage(json)))
  }
}

export const deleteMessage = (id, deleted) => {
  return dispatch => {
    dispatch({
      type: 'DELETE_MESSAGE'
    })
    return fetch(apiUrl + 'message', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: id,
        deleted: !deleted
      })
    })
      .then(response => response.json())
      .then(json => dispatch(updateMessage(json)))
  }
}

export const updateMessage = message => ({
  type: 'UPDATE_MESSAGE',
  message
})

export const toggleEditMode = id => ({
  type: 'TOGGLE_EDIT_MESSAGE',
  _id: id
})

export const toggleAddForm = () => ({
  type: 'TOGGLE_MESSAGE_FORM'
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_DELETED: 'SHOW_DELETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
