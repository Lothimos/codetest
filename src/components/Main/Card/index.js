import React from "react";
import { Container, Name, PlayerImg, Team } from "./styles";

const Card = () => (
	<Container>
		<Name>Gordon "Snake" Hayward</Name>
		<PlayerImg src="http://localhost:3008/gordon_hayward.png" alt="player_image" />
		<Team>Boston Celtics</Team>
	</Container>
);

export default Card;
