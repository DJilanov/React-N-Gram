const ngrams = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_NGRAMS':
      // TODO: Add loading handler 
      return state
    case 'SET_NGRAMS':
      return action.ngrams
    default:
      return state
  }
}

export default ngrams
