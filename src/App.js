import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { connect } from 'react-redux';


import * as action from "./action.js";
import Form from './Component/Form';
import CommList from './Component/CommList';
import Modal from './Component/Modal';

class App extends Component {

  render() {
    return (
      <div className="App">

      {this.props.index.modal && <Modal />}

        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Form/>
        <CommList />

         <ul>
          
         </ul>

      </div>
    );
  }
}

export default connect(
  (store) => {return {
    index: store.index,
  }},
  (dispatch) => {return {
    load: (data)     => { dispatch(action.LOAD(data)); },
    edit: (data)     => { dispatch(action.EDIT(data)); },

  }}
  
)(App);