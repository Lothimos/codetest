import React from "react";
import "./styles.css";

const NextPrevNavigator = (props) => (
	<div className="centerHeader">
		{(props.prevUrl && props.prevUrl.length > 0) && <a href={props.prevUrl}>&lt;</a>}
		&nbsp;
		{(props.nextUrl && props.nextUrl.length > 0) && <a href={props.nextUrl}>&gt;</a>}
	</div>
);

export default NextPrevNavigator;