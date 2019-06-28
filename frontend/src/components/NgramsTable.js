import React from 'react'
import PropTypes from 'prop-types'

const NgramsTable = ({ ngrams, getNgrams }) => (
  <ul>test
    {/* {messages.map(message =>
      <Message
        key={message._id}
        {...message}
        toggleEditMode={() => toggleEditMode(message._id)}
        onDeleteClick={() => deleteMessage(message._id, message.deleted)}
        onSaveClick={(text) => onSaveClick(text, message)}
      />
    )} */}
  </ul>
)

NgramsTable.propTypes = {
  ngrams: PropTypes.object.isRequired,
  getNgrams: PropTypes.func.isRequired
}

export default NgramsTable
