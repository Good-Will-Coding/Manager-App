import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyATJthxbEOiAlpeQKZ9VlOqVKkdysDSSyU",
      authDomain: "manager-170da.firebaseapp.com",
      databaseURL: "https://manager-170da.firebaseio.com",
      projectId: "manager-170da",
      storageBucket: "manager-170da.appspot.com",
      messagingSenderId: "666432720160"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
