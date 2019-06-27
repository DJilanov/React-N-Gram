import React from 'react'
import PropTypes from 'prop-types'

const MessageForm = ({ visible, addMessage, toggleAddForm }) => { 
  let input

  const submitMessage = (event) => {
    event.preventDefault()
    if (!input.value.trim()) {
      return
    }
    addMessage(input.value)
    input.value = ''
  }
  
  return (
    <div>
      <button onClick={() => {
        toggleAddForm()
      }}>Add new message</button>
      { visible ? 
        <form onSubmit={e => submitMessage(e)}>
          <textarea ref={node => input = node} />
          <button type="submit">
            Add Message
          </button>
        </form>
        : null
      }
    </div>
  )
}

MessageForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  addMessage: PropTypes.func.isRequired,
  toggleAddForm: PropTypes.func.isRequired
}

export default MessageForm
