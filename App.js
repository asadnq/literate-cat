import React, { Component } from 'react';
import AppNavigator from './src/navigations/index';
import { Provider } from 'react-redux';

import store from './src/store/store';
import NavigationService from './src/navigations/NavigationService';
import { getProvinces, getCities } from './src/store/actions/location'

export class App extends Component {
  componentDidMount() {
    store.dispatch(getProvinces())
    store.dispatch(getCities())
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={navigationRef => {
            NavigationService.setTopLevelNavigator(navigationRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
