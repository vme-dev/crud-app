import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import * as action from "../action.js";
import WinEdit from "./WinEdit.js";
import WinDel from "./WinDel.js";
import WinReply from "./WinReply.js";

class Modal extends React.Component {
  constructor(props) {
      super(props);
      this.login = null;
      this.onLoginChange = this.onLoginChange.bind(this);
  }

  onLoginChange(e) {
      this.login = e.target.value;
      console.log(this.login);
  }

  render() {

      var form = <form onSubmit={this.onSubmit}>
                    <p>
                      <label> Тексе для заметик:  
                        <input  type="text" 
                                name="login" 
                                onChange={this.onLoginChange}/>
                      </label>
                    </p>

                    <p>
                      <input  type="button"  
                              value="Send" />
                    </p>

                  </form>;

      var err =  <div> The time is passed</div>;

      return ReactDOM.createPortal( 
     		<div className="modal_wrap">
  	     		<div className="modal_window">
  	            	<h1 > Modal window </h1> 

                  {this.props.index.edit && <WinEdit /> }
                  {this.props.index.del && <WinDel /> }
                  {this.props.index.reply && <WinReply /> }

                  <input  type="button"  
                            onClick={(data) => this.props.modal(null)} 
                            value="close"/>
	        	</div> 
      	</div>,

        document.getElementById('portal')
        );
  }
}


export default connect(
  (store) => {return {
    index: store.index,
  }},
  (dispatch) => {return {
    modal: (data)     => { dispatch(action.MODAL_TOG(data));},
    edit: (data)     => { dispatch(action.MODAL_EDIT(data));},
  }}
  
)(Modal);
