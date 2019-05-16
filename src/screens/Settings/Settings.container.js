import { connect } from 'react-redux';

import SettingsScreen from './Setings.screen'

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState)(SettingsScreen);
