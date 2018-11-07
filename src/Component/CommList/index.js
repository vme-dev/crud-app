import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as action from "../../action.js";
import ListItem from "./ListItem";
import List from "./List";

class CommList extends Component {
	constructor(props) {
	    super(props);

    }

	componentDidMount() {
 	
		let promise = new Promise((resolve, reject) => {

		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/info.json', true);
		xhr.send(); 
		xhr.onreadystatechange = function() {

		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
		  alert("err");
		} else {
		  resolve(xhr.responseText);
		}
		}
    });

    promise.then(
      result => { 
        this.props.load(result);
      },
      error => {
        console.log("Rejected: " + error);
      }
    );

	}

	render () {	
		if (this.props.index.dataList === null) {

    		return <div className="list_wrap">Please wait...</div>;
    		
    	} 

		return (
			<div className="list_wrap">
				<List arr={this.props.index.dataList.childComm} p={"childComm"} onClick={(data) => this.props.modal(data)}/>
			</div>
		)
	
	}
}

export default connect(
  (store) => {return {
    index: store.index,
  }},
  (dispatch) => {return {
    load: (data)     => { dispatch(action.LOAD(data)); },
    modal: (data)     => { dispatch(action.MODAL_TOG(data)); },

  }}
  
)(CommList);