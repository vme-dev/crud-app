import React from 'react';
import List from "./List";



export default function ListItem (props) {
	if (props.arr) {
		var list = <List arr={props.arr} p={props.p} onClick={(data) => props.onClick(data)}/>
	}
	
	return (
		<li className="list_item" key={props.p}>
			<div className="head_name">{props.name}<div className="wrap_btn_link"><span className="btn_link" onClick={(data) => props.onClick({ type:'edit',position:props.p })} >edit</span><span className="btn_link" onClick={(data) => props.onClick({ type:'del',position:props.p })}>delete</span></div></div>
			<div>{props.text}</div>
			
			<div className="btn_link" onClick={(data) => props.onClick({ type:'reply',position:props.p })}>rerly</div>
			{list}
		</li>
		);
}