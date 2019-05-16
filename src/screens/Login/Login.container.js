import { connect } from 'react-redux';

import { login } from '../../store/actions/user';
import Login from './Login.screen'

const mapState = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

const mapDispatch = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(mapState, mapDispatch)(Login);
