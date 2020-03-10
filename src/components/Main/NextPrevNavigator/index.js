import React from "react";
import "./styles.css";

const NextPrevNavigator = (props) => (
	<div className="container">
		{props.prevUrl && <a href={props.prevUrl}>&lt;</a>}
		{props.nextUrl && <a href={props.nextUrl}>&gt;</a>}
	</div>
);

export default NextPrevNavigator;