import React from "react";
import  "./styles.css";

const Search = (props) => (
	<div>
		<input placeholder="Search..." value={props.textValue} onChange={(event)=>{if(props.updateFilterText) props.updateFilterText(event.target.value)}} />
	</div>
);

export default Search;
