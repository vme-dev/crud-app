import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as action from "../action.js";


class WinEdit extends Component {
  	constructor(props) {

      super(props);
var arr = this.props.index.position.split(".");

    	function getObj(arr,a) {
    		var obj = a;

    		for (var i = 1; i < arr.length; i++) {
    			obj = obj.childComm[+arr[i]];
    		}

    		return obj;
    	}

      this.state = {text:getObj(arr,this.props.index.dataList).text};

      this.onFormTextChange = this.onFormTextChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e){
      this.props.edit(this.state.text);

      e.preventDefault();
    }

    onFormTextChange(e){
      this.setState({text: e.target.value});
    }



	render () {

		return (
			<div className="form_wrap">
				<h1>Edit</h1>

				<form onSubmit={this.onSubmit}>
					
					<textarea id="form_text" value={this.state.text} onChange={this.onFormTextChange}></textarea>

					<input type="submit" id="form_btn" value="Edit" onSubmit={this.onSubmit}/>
				</form>
			</div>
		)
	}
}

export default connect(
  (store) => {return {
    index: store.index,
  }},
  (dispatch) => {return {
    edit: (data)     => { dispatch(action.MODAL_EDIT(data));},
  }}
  
)(WinEdit);