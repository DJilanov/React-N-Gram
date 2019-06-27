const defaultState = {
  visible: false
}

const form = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MESSAGE_FORM':
      return Object.assign({}, state, {
        visible: !state.visible
      })
    default:
      return state
  }
}

export default form
