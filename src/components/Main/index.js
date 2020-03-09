import React from "react";
import Search from "./Search";
import Card from "./Card";
import { Container, Title } from "./styles";

const Main = () => (
  <Container>
    <Title>NBA Interview</Title>
    <Search />
    <Card playerName='Gordon "Snake" Hayward' playerImageUrl='http://localhost:3008/gordon_hayward.png' playerTeamName='Boston Celtics' />
  </Container>
)

export default Main;

