import form from './form'

describe('inbox reducer', () => {
  it('should handle initial state', () => {
    expect(
      form(undefined, {})
    ).toEqual({
      visible: false
    })
  })

  it('should handle TOGGLE_MESSAGE_FORM', () => {
    expect(
      form({}, {
        type: 'TOGGLE_MESSAGE_FORM'
      })
    ).toEqual({
      visible: true
    })
  })
})
