import React, { Component } from 'react';
import AppNavigator from './src/navigations/index';
import { Provider } from 'react-redux';

import store from './src/store/store';
import NavigationService from './src/navigations/NavigationService';

export class App extends Component {
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
