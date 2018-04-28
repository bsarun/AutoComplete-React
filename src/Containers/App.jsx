import React, { Component } from 'react';
import AppDispatcher from '../Dispatchers/AppDispatcher';

class App extends Component {
    constructor(props){
        AppDispatcher.register(payload => {
            console.log('AppDispatcher Is: ', payload.action.type, payload.action);
        });
    }
   
}

export default App;