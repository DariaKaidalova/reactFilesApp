import { connect } from 'react-redux'
//import { setVisibility } from '../list/actions'
import DeleteButton from './DeleteButton'

export default function DeleteButtonReducer(state = { visibility: true }, { type, payload }) {
  console.log('state');
  console.log(state);
}

const DeleteButtonReducer = connect(
  //mapStateToProps,
  //mapDispatchToProps
)(DeleteButton)


