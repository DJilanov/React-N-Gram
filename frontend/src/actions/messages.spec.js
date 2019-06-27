import * as actions from './index'

const message = {
  _id: 0,
  text: 'Use Redux',
  deleted: false,
  editMode: false
};

describe('message actions', () => {
  it('addMessage should create ADD_MESSAGE action', () => {
    expect(actions.addMessage(message)).toEqual({
      type: 'ADD_MESSAGE', 
      message: message
    })
  })

  it('editMessage should create UPDATE_MESSAGE action', () => {
    expect(actions.updateMessage(message)).toEqual({
      type: 'UPDATE_MESSAGE',
      message: message,
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleEditMode should create TOGGLE_EDIT_MESSAGE action', () => {
    expect(actions.toggleEditMode(1)).toEqual({
      type: 'TOGGLE_EDIT_MESSAGE',
      _id: 1
    })
  })

  it('toggleAddForm should create TOGGLE_MESSAGE_FORM action', () => {
    expect(actions.toggleAddForm()).toEqual({
      type: 'TOGGLE_MESSAGE_FORM'
    })
  })
})
