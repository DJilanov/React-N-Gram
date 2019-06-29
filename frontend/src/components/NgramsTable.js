import React from 'react'
import PropTypes from 'prop-types'

const NgramsTable = ({ ngrams }) => (
  Object.entries(ngrams).length ?
    <table>
      <thead>
        <tr>
          <th>n-gram</th>
          <th>count</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(ngrams).map(([key, value]) =>
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        )}
      </tbody>
    </table>
  : null
)

NgramsTable.propTypes = {
  ngrams: PropTypes.object.isRequired
}

export default NgramsTable
