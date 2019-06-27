import { connect } from 'react-redux'
import { createMessage, toggleAddForm } from '../actions'
import MessageForm from '../components/MessageForm'

const mapStateToProps = state => {
  return {
    visible: state.form.visible,
    currentText: state.form.currentText
  };
}

const mapDispatchToProps = (dispatch) => ({
  addMessage: (value) => dispatch(createMessage(value)),
  toggleAddForm: () => dispatch(toggleAddForm()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm)
