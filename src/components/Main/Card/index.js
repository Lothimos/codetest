import React from "react";
import "./styles.css";

const Card = (props) => (
	<div className="container">
		<p className='name'>{props.playerName}</p>
		<img className='playerImg' src={props.playerImageUrl} alt="player_image" />
		<p className='team'>{props.playerTeamName}</p>
	</div>
);

export default Card;
