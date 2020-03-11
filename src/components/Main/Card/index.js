import React from "react";
import "./styles.css";

const Card = (props) => (
	<div className="cardContainer">
		<p className='cardName'>{props.playerName}</p>
		<img className='playerImg' src={props.playerImageUrl} alt="player_image" />
		<p className='team'>{props.playerTeamName}</p>

		{/* Demonstrating how I would handle button to save changes before that step actually happens. I would pass the event in on props and fire it. Let the viewer handle the logic: */}
		{/* <button onClick={props.saveCardEdit(this.props.playerId, this.txtbxFirstName.value, etc)}>Save changes</button> */}
	</div>
);

export default Card;
