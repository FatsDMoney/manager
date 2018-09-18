import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
          // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBp2y6KsMrgDjzpZjsbQB__EMtqxMdjkJo',
            authDomain: 'manager-781d8.firebaseapp.com',
            databaseURL: 'https://manager-781d8.firebaseio.com',
            projectId: 'manager-781d8',
            storageBucket: 'manager-781d8.appspot.com',
            messagingSenderId: '963891894911'
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
