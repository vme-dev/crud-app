import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as action from "../../action.js";


class Form extends Component {
  	constructor(props) {

      super(props);
      this.state = {text:'Comment text', name: 'Author'};

      this.onFormTextChange = this.onFormTextChange.bind(this);
      this.onFormNameChange = this.onFormNameChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(e){
      this.props.addComment(this.state.name,this.state.text,this.state.file);

      this.setState({text: 'Comment text'});
      e.preventDefault();
     // console.log(this.fileInput.files);
    }

    onFormTextChange(e){
      this.setState({text: e.target.value});
    }

    onFormNameChange(e) {
      this.setState({name: e.target.value});
    }



	render () {
    
		return (
			<div className="form_wrap">

				<form onSubmit={this.onSubmit}>
					
					<textarea id="form_text" value={this.state.text} onChange={this.onFormTextChange}></textarea>
 
					<input type="text" id="form_name" onChange={this.onFormNameChange} placeholder={`${this.state.name}`} />

					<input type="file" id="form_file" ref={input => {this.fileInput = input;}}/>

					<input type="submit" id="form_btn" value="comment" onSubmit={this.onSubmit}/>
				</form>
			</div>
		)
	}
}

export default connect(
  (store) => {return {
    index: store,
  }},
  (dispatch) => {return {
    addComment: (name,text,file)     => { dispatch(action.ADD_COMMENT(name,text,file)); },
  }}
  
)(Form);