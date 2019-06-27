import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Footer from './Footer'
import { fetchMessages } from '../actions'
import FormContainer from '../containers/FormContainer'
import VisibleMessageList from '../containers/VisibleMessageList'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchMessages()
  }

  render() {
    return (
      <div>
        <FormContainer />
        <VisibleMessageList />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  fetchMessages: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(fetchMessages()),
})

export default connect(null, mapDispatchToProps)(App);
