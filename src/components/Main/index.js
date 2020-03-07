import React from "react";
import Search from "./Search";
import Card from "./Card";
import { Container, Title } from "./styles";

const Main = () => (
  <Container>
    <Title>NBA Interview</Title>
    <Search />
    <Card />
  </Container>
)

export default Main;

