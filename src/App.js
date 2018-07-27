import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD8_xYxpHhBAD__Cqb0a1cMr3IJx4zH8Ws',
      authDomain: 'managerapp-a4db0.firebaseapp.com',
      databaseURL: 'https://managerapp-a4db0.firebaseio.com',
      projectId: 'managerapp-a4db0',
      storageBucket: '',
      messagingSenderId: '227299538652'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
