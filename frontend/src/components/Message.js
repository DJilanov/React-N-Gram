import React from 'react'
import PropTypes from 'prop-types'

const controllButtonStyle = {
  marginLeft: '50px'
};

const Message = ({ onDeleteClick, toggleEditMode, onSaveClick, deleted, text, editMode }) => {
  let input

  return (
    <li
      style={{
        textDecoration: deleted ? 'line-through' : 'none'
      }}
    > 
      <div>
        <input 
          type="text"
          ref={node => input = node}
          defaultValue={text} disabled={!editMode} 
        />
        { editMode ? (
          <span>
            <button
              onClick={() => onSaveClick(input.value)}
              style={controllButtonStyle}
            >save</button>
            <button
              onClick={toggleEditMode}
              style={controllButtonStyle}
            >cancel</button>
          </span>
        ) : (
          <span>
            <button
              onClick={toggleEditMode}
              style={controllButtonStyle}
            >edit</button>
            <button
              onClick={onDeleteClick}
              style={controllButtonStyle}
            >{ deleted ? 'restore': 'delete' }</button>
          </span>
        )}
      </div>
    </li>
  )
}

Message.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  editMode: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Message
