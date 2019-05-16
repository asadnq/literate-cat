import { connect } from 'react-redux';

import { register } from '../../store/actions/user';
import Register from './Register.screen';

export default connect(null, { register })(Register);