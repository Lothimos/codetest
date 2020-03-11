import React from "react";
import "./styles.css";

const NextPrevNavigator = (props) => (
	<div className="centerHeader">
		{props.prevUrl && <a href={props.prevUrl}>&lt;</a>}
		&nbsp;
		{props.nextUrl && <a href={props.nextUrl}>&gt;</a>}
	</div>
);

export default NextPrevNavigator;