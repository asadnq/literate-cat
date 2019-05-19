import { connect } from 'react-redux';

import { logout } from '../../store/actions/user'
import SettingsScreen from './Setings.screen'

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState, { logout })(SettingsScreen);
