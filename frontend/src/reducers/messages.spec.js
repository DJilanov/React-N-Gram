import messages from './messages'

const message = {
  _id: 1,
  text: 'Changed Redux',
  deleted: false,
  editMode: false
};

describe('inbox reducer', () => {
  it('should handle initial state', () => {
    expect(
      messages(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_MESSAGE', () => {
    expect(
      messages([], {
        type: 'ADD_MESSAGE',
        message: message
      })
    ).toEqual([
      message
    ])
  })

  it('should handle DELETE_MESSAGE', () => {
    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          _id: 1
        }, {
          text: 'Use Redux',
          deleted: false,
          editMode: false,
          _id: 0
        }
      ], {
        type: 'DELETE_MESSAGE',
        message: message
      })
    ).toEqual([
      {
        text: 'Run the tests',
        deleted: false,
        editMode: false,
        _id: 1
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        _id: 0
      }
    ])
  })

  it('should handle TOGGLE_EDIT_MESSAGE', () => {
    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          _id: 1
        }, {
          text: 'Use Redux',
          deleted: false,
          editMode: false,
          _id: 0
        }
      ], {
        type: 'TOGGLE_EDIT_MESSAGE',
        _id: 1,
      })
    ).toEqual([
      {
        text: 'Run the tests',
        deleted: false,
        editMode: true,
        _id: 1
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        _id: 0
      }
    ])
  })

  it('should handle UPDATE_MESSAGE', () => {
    expect(
      messages([
        {
          text: 'Run the tests',
          deleted: false,
          editMode: false,
          _id: 1
        }, {
          text: 'Use Redux',
          deleted: false,
          editMode: false,
          _id: 0
        }
      ], {
        type: 'UPDATE_MESSAGE',
        message: message
      })
    ).toEqual([
      {
        text: 'Changed Redux',
        deleted: false,
        editMode: false,
        _id: 1
      }, {
        text: 'Use Redux',
        deleted: false,
        editMode: false,
        _id: 0
      }
    ])
  })
})
