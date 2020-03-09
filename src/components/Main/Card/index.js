import React from "react";
import "./styles.css";

const Card = () => (
	<div className="container">
		<p className='name'>Gordon "Snake" Hayward</p>
		<img className='playerImg' src="http://localhost:3008/gordon_hayward.png" alt="player_image" />
		<p className='team'>Boston Celtics</p>
	</div>
);

export default Card;
