import React from 'react'
import { connect } from 'react-redux'
import { getNgrams } from '../actions'
import NgramsForm from '../components/NgramsForm'
import NgramsTable from '../components/NgramsTable'

const FormContainer = () => {
  return (
    <div>
      <NgramsForm />
      <NgramsTable />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ngrams: state.ngrams
  };
}

const mapDispatchToProps = (dispatch) => ({
  getNgrams: (text) => dispatch(getNgrams(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer)
