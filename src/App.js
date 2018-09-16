import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
