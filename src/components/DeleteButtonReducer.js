import { connect } from 'react-redux'
import { BUTTON_IS_VISIBLE, BUTTON_IS_NOT_VISIBLE } from '../list/actions'
import DeleteButton from './DeleteButton'

const changeDeleteButtonStates = (state = { visibility: true }) => {
  console.log('state::::');
  console.log(state);
}

const mapStateToProps = state => {
  return {
    todos: changeDeleteButtonStates(state.todos, state.visibilityFilter)
  }
}

const DeleteButtonReducer = connect(
  //mapStateToProps,
  //mapDispatchToProps
)(DeleteButton)

export default DeleteButtonReducer
