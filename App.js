import React from 'react';
import AppContainer from './src/navigation/AppContainer';
import { Provider } from 'react-redux';
import appStore from './src/store';

export default class App extends React.Component{

  render(){
    return(
      <Provider store={appStore}>
        <AppContainer/>
      </Provider>
    )
  }

}