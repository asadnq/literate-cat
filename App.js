import React, { Component } from 'react'
import AppNavigator from './src/navigations/index';
import { Provider } from 'react-redux';
import store from './src/store/store';

export class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppNavigator />
      </Provider>
    )
  }
}

export default App
