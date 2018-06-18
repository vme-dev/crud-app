import React from 'react';
import ListItem from "./ListItem";


export default function List (props) {

	var listItem = props.arr.map((user,i,arr) => {
	        return <ListItem  name={user.name} 
	        					text={user.text} 
	        					file={user.file}
	        					arr={user.childComm}
	        					p={props.p + "." + i }
	        					onClick={(data) => props.onClick(data)}/> 
    	})

	return (
		<ul className="list_item">
			{listItem}
		</ul>
		);
}