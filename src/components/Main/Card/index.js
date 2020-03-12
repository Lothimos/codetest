import React from "react";
import "./styles.css";

//TODO: the textbox needs to save it's edits in a similar way that we are tracking what card is in edit mode... 

const Card = (props) => (
	<div className="cardContainer">
		{!props.IsInEditMode && <p className='cardName'>{props.playerName}</p>}
		{props.IsInEditMode && <input placeholder={props.playerName}/>}  
		<img className='playerImg' src={props.playerImageUrl} alt="player_image" />
		<p className='team'>{props.playerTeamName}</p>
		{!props.IsInEditMode && <button onClick={()=> {if(props.putCardInEditMode) props.putCardInEditMode(props.playerId)}}>Edit</button>}
		{props.IsInEditMode && <button onClick={()=> {if(props.saveCardInEditMode) props.saveCardInEditMode(props.playerId)}}>Save</button>}
	</div>
);

export default Card;
