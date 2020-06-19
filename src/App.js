import React, { Component } from 'react';
import Main from './components/mainComponents';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
// configure react app so store become available to every component
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';


const store = ConfigureStore();
 class App extends Component{
  
render(){
  return (
    <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main/> 
          </div>
        </BrowserRouter>
    </Provider>
    
    
  );
}

}


export default App;


// representational state transfer :- REST
// SOAP:- protocol for communicating between high level entites