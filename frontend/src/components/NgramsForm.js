import React from 'react'
import PropTypes from 'prop-types'

const NgramsForm = ({ getNgrams }) => {
  let input

  const submitForm = (event) => {
    event.preventDefault()
    if (!input.value.trim()) {
      return
    }
    getNgrams(input.value)
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={e => submitForm(e)}>
        <textarea ref={node => input = node} />
        <button type="submit">
          Check N-grams
          </button>
      </form>
    </div>
  )
}

NgramsForm.propTypes = {
  getNgrams: PropTypes.func.isRequired
}

export default NgramsForm
