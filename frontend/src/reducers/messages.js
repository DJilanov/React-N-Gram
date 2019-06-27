const messages = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES':
    case 'CREATE_MESSAGE':
    case 'EDIT_MESSAGE':
      // TODO: Add loading handler 
      return state
    case 'SET_MESSAGES':
      return action.messages.map(message => {
        message.editMode = false
        return message
      });
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          _id: action.message._id,
          text: action.message.text,
          deleted: action.message.deleted,
          editMode: false
        }
      ]
    case 'TOGGLE_EDIT_MESSAGE':
      return state.map(message =>
        (message._id === action._id)
          ? { ...message, editMode: !message.editMode }
          : message
      )
    case 'UPDATE_MESSAGE':
      return state.map(message =>
        (message._id === action.message._id)
          ? { ...action.message, editMode: false }
          : message
      )
    case 'DELETE_MESSAGE':
      return state.map(message =>
        (message._id === action._id)
          ? { ...action.message, editMode: false }
          : message
      )
    default:
      return state
  }
}

export default messages
