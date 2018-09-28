import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import images from "../components/Images/Images.js";
import Col from "../components/Col";
console.log(images[0].image)
const About = () => (
  <div>
    <Hero image={images[0].image} >
      <h1 id="gamecafe">Game Cafe</h1>
      <h2>Find a game and play</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>

      </Row>
    </Container>
  </div>
);

export default About;
