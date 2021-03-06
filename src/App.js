import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

import LoginForm from "./components/LoginForm";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
