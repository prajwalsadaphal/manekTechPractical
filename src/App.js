import React from 'react';
import MainStackNavigator from './navigator/MainStackNavigator';
import { Provider } from 'react-redux';
import store from './store/store';
import { StatusBar } from 'react-native';
const App =  () => {

  return (
  <Provider store={store}>
  <StatusBar backgroundColor="#14dc8d"/>
  <MainStackNavigator/>
  </Provider>
  );
};


export default App;
