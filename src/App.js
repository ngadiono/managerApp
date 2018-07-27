import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyD8_xYxpHhBAD__Cqb0a1cMr3IJx4zH8Ws",
      authDomain: "managerapp-a4db0.firebaseapp.com",
      databaseURL: "https://managerapp-a4db0.firebaseio.com",
      projectId: "managerapp-a4db0",
      storageBucket: "",
      messagingSenderId: "227299538652"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
